import testingUtilsHandlers from './handlers.js'

const { testHashPassword } = testingUtilsHandlers

describe('Testing utils handlers', () => {
  it('should test that password is hashed', async () =>
    await testHashPassword())
})
