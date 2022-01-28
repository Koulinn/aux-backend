import globalVariables from '../../config/globalVariables/index.js'

const { AUX_SEO_EMAIL, DEV_URL } = globalVariables

const passwordResetEmail = (acc_email, reset_code) => {
  return {
    to: acc_email, // Change to your recipient
    from: AUX_SEO_EMAIL,
    subject: 'SEO AUX Password reset',
    text: 'To reset click on or copy paste to your browser link',
    html: `
            <html>
              <head>
                  <title></title>
              </head>
                <body>
                  <a href="${DEV_URL}/accounts/recovery/${reset_code}">${DEV_URL}/accounts/recovery/${reset_code}</a>
                </body>
            </html>
          `,
  }
}

export default passwordResetEmail
