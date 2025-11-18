import User from '../Model/UserMod.js'
import ApiErr from '../utils/apiErr.js'
import { ERR, FAIL, SUCCESS } from '../utils/httpStatus.js'
import { bcryptPassword, comparePassword } from '../utils/bcryptPassword.js'

// REGISTER
export async function createAccount(req, res, next) {
  const { name, username, password } = req.body

  const oldUser = await User.findOne({ username })
  if (oldUser) {
    return next(new ApiErr(FAIL, 403, `User ${username} alredy found `))
  }

  try {
    const newUser = await User.create({
      username,
      name,
      password: await bcryptPassword(password),
    })

    const savedUser = await newUser.save()

    return res.status(200).json({ status: SUCCESS, data: savedUser })
  } catch (err) {
    console.log(err)
    return next(new ApiErr(ERR, 500, `Failed To Create User`))
  }
}

// LOGIN
export async function loginUser  (req, res, next) {
  const { username, password } = req.body
  const passwordBody = password

  try {
    const user = await User.findOne({
      username,
    })

    if (!user)
      return next(new ApiErr(FAIL, 402, `User (${username}) Not Found`))

    const isPassowrd = await comparePassword(passwordBody, user.password)

    if (!isPassowrd) {
      return next(new ApiErr(FAIL, 403, `Wrong Password or Username`))
    }

    res.status(200).json({
      status: SUCCESS,
      data: {
        id: user?._id,
        name: user?.name,
        username: user?.username,
      },
    })
  } catch (err) {
    return next(new ApiErr(ERR, 500, `Failed To Login User`))
  }
}
