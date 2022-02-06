import GitHubStrategy from 'passport-github2'
import passport from 'passport'
import globalOAuthValues from '../global_Oauth_values.js'
import authUtils from '../auth_utils.js'
import accountHandlers from '../../server/services/account/account_handlers.js'

const {
  GITHUB_OAUTH_CLIENT_ID,
  GITHUB_OAUTH_CLIENT_SECRET,
  URL_REDIRECT_GITHUB_OAUTH,
} = globalOAuthValues

const gitHubStrategyConfig = {
  clientID: GITHUB_OAUTH_CLIENT_ID,
  clientSecret: GITHUB_OAUTH_CLIENT_SECRET,
  callbackURL: URL_REDIRECT_GITHUB_OAUTH,
}

const { createUser } = accountHandlers

const { isExistentOAuthAccount, createGitHubAccount, generateTokens } =
  authUtils

const gitHubStrategyCb = async (
  accessToken,
  refreshToken,
  profile,
  passportNext
) => {
  try {
    const res = await isExistentOAuthAccount(profile.id, 'github_id')
    if (res?.acc_id) {
      const { acc_id } = res
      const tokens = await generateTokens(acc_id)

      passportNext(null, tokens)
    } else {
      const { acc_id } = await createGitHubAccount(profile)

      const normalizedProfile = {
        first_name: profile.displayName.split(' ')[0],
        last_name: profile.displayName.split(' ')[1],
        avatar: profile.photos[0].value,
        website_1: profile._json.html_url,
        website_2: profile._json.blog,
      }
      await createUser(acc_id, normalizedProfile)

      const tokens = await generateTokens(acc_id)

      passportNext(null, tokens)
    }
  } catch (error) {
    console.log(error, 'from gitHubStrategy')
    passportNext(null, error)
  }
}

const gitHubStrategy = new GitHubStrategy(
  gitHubStrategyConfig,
  gitHubStrategyCb
)

passport.serializeUser(function (user, passportNext) {
  passportNext(null, user)
})

export default gitHubStrategy
