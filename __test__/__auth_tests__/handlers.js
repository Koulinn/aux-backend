import authentication from '../../src/authentication/index.js'

const {
  authUtils: {
    isExistentOAuthAccount,
    createGoogleAccount,
    genAuthorizationToken,
    genRefreshToken,
  },
} = authentication

const testCreateGoogleAccount = async (mockProfile) => {
  const res = await createGoogleAccount(mockProfile)
  expect(res).toHaveProperty('acc_id')
}
const testCheckExistentOAuthAccount = async (profileId, strategy) => {
  const res = await isExistentOAuthAccount(profileId, strategy)
  expect(res).toBeTruthy()
}
const testGenAuthorizationToken = async (accountId) => {
  const res = await genAuthorizationToken(accountId)
  expect(res).toBeTruthy()
}
const testGenRefreshToken = async (accountId) => {
  const res = await genRefreshToken(accountId)
  expect(res).toBeTruthy()
}

const handlers = {
  testCreateGoogleAccount,
  testCheckExistentOAuthAccount,
  testGenAuthorizationToken,
  testGenRefreshToken,
}

export default handlers
