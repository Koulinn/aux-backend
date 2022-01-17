import bcrypt from 'bcrypt'

const { hash, compare } = bcrypt

const hashPassword = async (password) => {
  try {
    const hashedPassword = await hash(password, 12)
    return hashedPassword
  } catch (error) {
    console.log(error, 'from hashPassword')
  }
}

const validateUser = async (password) => {
  // const isCorrectPassword = await compare(password)
  try {
  } catch (error) {
    console.log(error, 'from hashPassword')
  }
}

const authUtils = {
  hashPassword,
  validateUser,
}
export default authUtils
