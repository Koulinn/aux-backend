import authentication from '../../src/authentication/index.js'

const {
  authUtils: {
    isExistentOAuthAccount,
    createGoogleAccount,
    genAuthorizationToken,
    genRefreshToken,
    verifyAuthorizationToken,
    verifyRefreshToken,
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

const testGenAuthorizationToken = (accountId) => {
  const res = genAuthorizationToken(accountId)
  expect(res).toBeTruthy()
}

const testGenRefreshToken = (accountId) => {
  const res = genRefreshToken(accountId)
  expect(res).toBeTruthy()
}

const testVerifyAuthorizationToken = () => {
  const authToken = genAuthorizationToken('randomAcc_id')
  const res = verifyAuthorizationToken(authToken)
  expect(res).toBeTruthy()
}

const testVerifyRefreshToken = () => {
  const authToken = genRefreshToken('randomAcc_id')
  const res = verifyRefreshToken(authToken)
  expect(res).toBeTruthy()
}

const handlers = {
  testCreateGoogleAccount,
  testCheckExistentOAuthAccount,
  testGenAuthorizationToken,
  testGenRefreshToken,
  testVerifyAuthorizationToken,
  testVerifyRefreshToken,
}

export default handlers
