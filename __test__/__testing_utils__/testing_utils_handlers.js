import authUtils from '../../src/authentication/auth_utils.js'
import bcrypt from 'bcrypt'

const { compare } = bcrypt

const { hashPassword } = authUtils

const testHashPassword = async () => {
  const password = '123456'
  const hashedPassword = await hashPassword(password)
  const isCorrectPassword = await compare(password, hashedPassword)
  expect(isCorrectPassword).toBe(true)
}

const testingUtilsHandlers = {
  testHashPassword,
}

export default testingUtilsHandlers
