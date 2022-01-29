import googleStrategy from './googleStrategy.js'
import gitHubStrategy from './gitHubStrategy.js'
const OauthStrategies = [
  {
    strategy: googleStrategy,
    strategyName: 'google',
  },
  {
    strategy: gitHubStrategy,
    strategyName: 'github',
  },
]

export default OauthStrategies
