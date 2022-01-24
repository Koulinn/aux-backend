import GoogleStrategy from 'passport-google-oauth20'
import passport from 'passport'
import globalOAuthValues from '../global_Oauth_values.js'
import authUtils from '../auth_utils.js'
import accountHandlers from '../../server/services/account/account_handlers.js'

const {
  GOOGLE_OAUTH_CLIENT_ID,
  GOOGLE_OAUTH_CLIENT_SECRET,
  URL_REDIRECT_OAUTH,
} = globalOAuthValues

const googleStrategyConfig = {
  clientID: GOOGLE_OAUTH_CLIENT_ID,
  clientSecret: GOOGLE_OAUTH_CLIENT_SECRET,
  callbackURL: URL_REDIRECT_OAUTH,
}

const { createUser } = accountHandlers

const { isExistentOAuthAccount, createGoogleAccount, generateTokens } =
  authUtils

const googleStrategyCb = async (
  accessToken,
  refreshToken,
  profile,
  passportNext
) => {
  try {
    const res = await isExistentOAuthAccount(profile.id, 'google_id')
    if (res?.acc_id) {
      const { acc_id } = res
      const tokens = await generateTokens(acc_id)

      passportNext(null, tokens)
    } else {
      const { acc_id } = await createGoogleAccount(profile)
      await createUser(acc_id, profile)

      const tokens = await generateTokens(acc_id)

      passportNext(null, tokens)
    }
  } catch (error) {
    console.log(error, 'from googleStrategy')
    passportNext(null, error)
  }
}

const googleStrategy = new GoogleStrategy(
  googleStrategyConfig,
  googleStrategyCb
)

passport.serializeUser(function (user, passportNext) {
  passportNext(null, user)
})

export default googleStrategy
