import globalVariables from '../../config/globalVariables/index.js'

const { AUX_SEO_EMAIL, DEV_URL } = globalVariables

const confirmAccount = (acc_email, tempToken) => {
  return {
    to: acc_email, // Change to your recipient
    from: AUX_SEO_EMAIL,
    subject: 'SEO AUX Password reset',
    text: 'To confirm your account click on the link provided or copy paste it to your browser',
    html: `
            <html>
              <head>
                  <title></title>
              </head>
                <body>
                  <a href="${DEV_URL}/accounts/confirmation/${tempToken}">${DEV_URL}/accounts/confirmation/${tempToken}</a>
                </body>
            </html>
          `,
  }
}

export default confirmAccount
