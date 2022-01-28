import sgMail from '@sendgrid/mail'
import globalVariables from '../../config/globalVariables/index.js'

const { SENDGRID_API_KEY } = globalVariables

sgMail.setApiKey(SENDGRID_API_KEY)

export default sgMail
