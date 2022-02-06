import authUtils from '../../src/authentication/auth_utils.js'
import bcrypt from 'bcrypt'
import lib from '../../src/library/index.js'

const {
  queryHandlers: { generateTableStrings },
} = lib

const { compare } = bcrypt

const { hashPassword } = authUtils

const testHashPassword = async () => {
  const password = '123456'
  const hashedPassword = await hashPassword(password)
  const isCorrectPassword = await compare(password, hashedPassword)
  expect(isCorrectPassword).toBe(true)
}
const testGenerateTableStrings = () => {
  const obj = {
    name: 'Rafael Lima',
    location: 'Leeds-UK',
    email: 'rafauxdev@gmail.com',
    hireable: null,
  }
  const { tableKeys, tableValues } = generateTableStrings(obj)
  expect(tableKeys).toBe('name, location, email, hireable')
  expect(tableValues).toBe(
    `'Rafael Lima', 'Leeds-UK', 'rafauxdev@gmail.com', null`
  )
}

const testingUtilsHandlers = {
  testHashPassword,
  testGenerateTableStrings,
}

export default testingUtilsHandlers
