import ApiErr from '../apiErr.js'
import { FAIL } from '../httpStatus.js'

export async function createUserValidator (req, res, next) {
  const { username, password, name, connfirmPassword } = req.body
  const pattern = /^[^# ]+@[^ ]+\.[a-z]{2,3}$/
  
  if (!name) {
    return next(new ApiErr(FAIL, 403, `User Name is Required`))
  }
  if (!username) {
    return next(new ApiErr(FAIL, 403, `User Username is Required`))
  }
  if (!!username.match(pattern) === false) {
    return next(new ApiErr(FAIL, 403, `User Username Email Not Valid`))
  }
  if (!password) {
    return next(new ApiErr(FAIL, 403, `User Password is Required`))
  }
  if (password?.includes('$')) {
    return next(new ApiErr(FAIL, 403, `User Password is Not Valid contain ($)`))
  }
  if (password !== connfirmPassword) {
    return next(new ApiErr(FAIL, 403, `Confirm Password Not Same`))
  }
  next()
}
