import authentication from '../../src/authentication/index.js'

const {
  authUtils: { isExistentOAuthAccount, createGoogleAccount },
} = authentication

const testCreateGoogleAccount = async (mockProfile) => {
  const res = await createGoogleAccount(mockProfile)
  expect(res).toHaveProperty('acc_id')
}
const testCheckExistentOAuthAccount = async (profileId, strategy) => {
  const res = await isExistentOAuthAccount(profileId, strategy)
  expect(res).toBeTruthy()
}

const handlers = {
  testCreateGoogleAccount,
  testCheckExistentOAuthAccount,
}

export default handlers
