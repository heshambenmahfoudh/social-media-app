import bcrypt from 'bcrypt'

export const bcryptPassword = async (data) => {
  return await bcrypt.hashSync(data, bcrypt.genSaltSync(10 | process.env.SALT))
}

export const comparePassword = async (oldData, currentData) => {
  return await bcrypt.compare(oldData, currentData)
}
