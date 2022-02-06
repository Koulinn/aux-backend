import testingUtilsHandlers from './handlers.js'

const { testHashPassword, testGenerateTableStrings } = testingUtilsHandlers

describe('Testing utils handlers', () => {
  it('should test that password is hashed', async () =>
    await testHashPassword())
  it('should test that generateTableStrings', () => testGenerateTableStrings())
})
