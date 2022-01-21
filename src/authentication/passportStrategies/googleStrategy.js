import GoogleStrategy from 'passport-google-oauth20'
import passport from 'passport'
import globalOAuthValues from '../global_Oauth_values.js'
import authUtils from '../auth_utils.js'
import query_handlers from '../../server/services/account/query_handlers.js'

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

const { createUser } = query_handlers

const { isExistentOAuthAccount, createGoogleAccount } = authUtils

const googleStrategyCb = async (
  accessToken,
  refreshToken,
  profile,
  passportNext
) => {
  try {
    const acc_id = await isExistentOAuthAccount(profile.id, 'google_id')
    if (acc_id) {
      passportNext(null, acc_id)
    } else {
      const acc_id = await createGoogleAccount(profile)
      await createUser(acc_id, profile)
      passportNext(null, acc_id)
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
