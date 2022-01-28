import sgMail from '@sendgrid/mail'
import globalVariables from '../../config/globalVariables/index.js'

const { SENDGRID_API_KEY } = globalVariables

sgMail.setApiKey(SENDGRID_API_KEY)

const sendEmail = async (msg) => {
  try {
    await sgMail.send(msg)

    return true
  } catch (error) {
    throw Error(error + 'from sendEmail sendGrid')
  }
}

export default sendEmail
