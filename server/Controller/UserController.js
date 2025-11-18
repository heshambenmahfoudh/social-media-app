import User from '../Model/UserMod.js'
import { ERR, FAIL, SUCCESS } from '../utils/httpStatus.js'
import ApiErr from '../utils/apiErr.js'
import { bcryptPassword } from '../utils/bcryptPassword.js'

// UPDATE USER
export async function updateUserById(req, res, next) {
  const { id } = req.params
  const {
    username,
    password,
    name,
    coverImageUrl,
    profileImageUrl,
    about,
    workat,
    country,
    livein,
    relationship,
  } = req.body

  try {
    const updateUser = await User.findByIdAndUpdate(
      id,
      {
        $set: {
          name,
          username,
          coverImageUrl,
          profileImageUrl,
          about,
          workat,
          country,
          livein,
          relationship,
        },
      },
      { new: true },
    )
    const existUser = await User.findById(id)
    if (password && existUser?.password !== password) {
      await UserModel.findByIdAndUpdate(
        id,
        {
          $set: {
            password: await bcryptPassword(password),
          },
        },
        { new: true },
      )
    }
    res.status(200).json({
      status: SUCCESS,
      data: {
        id: updateUser?._id,
        name: updateUser?.name,
        username: updateUser?.username,
      },
    })
  } catch (err) {
    return next(new ApiErr(ERR, 500, `Failed to Updated User`))
  }
}

// DELETE USE
export async function deleteUserById (req, res, next)  {
  const { id } = req.params
  try {
    await User.findByIdAndDelete(id)

    res.status(200).json({ status: SUCCESS, message: 'User Has Been Deleted' })
  } catch (err) {
    return next(new ApiErr(ERR, 500, `Failed to Deleted User`))
  }
}

// GET USER
export async function getUserById  (req, res, next)  {
  const { id } = req.params
  try {
    const user = await User.findById(id)
    if (!user) {
      return next(new ApiErr(FAIL, 402, `User Not Found`))
    }
    res.status(200).json({ status: SUCCESS, data: user })
  } catch (err) {
    return next(new ApiErr(ERR, 500, `Failed to Fetching User`))
  }
}

// GET USERS
export async function getAllUsers  (req, res, next)  {
  try {
    const getUsers = await User.find().sort({ _id: -1 })
    res.status(200).json({ status: SUCCESS, data: getUsers })
  } catch (err) {
    return next(new ApiErr(ERR, 500, `Failed to Fetching Users`))
  }
}

// FOLLOWERS USER
export async function followUser  (req, res, next)  {
  const { id } = req.params
  const { id: bodyId } = req.body
  try {
    if (bodyId === id) {
      return next(new ApiErr(FAIL, 403, `Can Not Follwed By Self`))
    }

    const follw = await User.findById(id)

    const follwing = await User.findById(bodyId)

    if (!follw.follwers.includes(bodyId)) {
      await follw.updateOne({ $push: { follwers: bodyId } })

      await follwing.updateOne({ $push: { following: id } })

      res.status(200).json({ status: SUCCESS, message: 'User Follwed' })
    } else {
      await follw.updateOne({ $pull: { follwers: bodyId } })

      await follwing.updateOne({ $pull: { following: id } })
    }
  } catch (err) {
    return next(new ApiErr(ERR, 500, `Failed to Follwing Users`))
  }
}

// UNFOLLOWERS USER
export async function UnfollowUser  (req, res, next)  {
  const { id } = req.params
  const { id: bodyId } = req.body
  try {
    const follw = await User.findById(id)

    const follwing = await User.findById(bodyId)

    if (follw.follwers.includes(bodyId)) {
      await follw.updateOne({ $pull: { follwers: bodyId } })

      await follwing.updateOne({ $pull: { following: id } })

      res.status(200).json({ status: SUCCESS, message: 'User Not Follwed!' })
    } else {
      await follw.updateOne({ $push: { follwers: bodyId } })

      await follwing.updateOne({ $push: { following: id } })

      return next(new ApiErr(FAIL, 403, `You Alredy Unfollwed by User !!`))
    }
  } catch (err) {
    return next(new ApiErr(FAIL, 403, `Failed To Unfollwing User !!`))
  }
}

// USER FRINDS
export async function getUsersFrinds (req, res, next){
  const { id } = req.params
  try {
    const user = await User.findById(id)
    const userFrinds = await Promise.all(
      user.following.map((frindId) => {
        return User.findById({ _id: frindId })
      }),
    )

    res.status(200).json({ status: SUCCESS, data: userFrinds })
  } catch (err) {
    return next(new ApiErr(ERR, 500, `Failed To Fetching Users Frinds`))
  }
}
