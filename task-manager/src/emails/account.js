
const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = ''

sgMail.setApiKey(sendgridAPIKey)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'rlarbska3824@gmail.com',
        subject: 'Thanks for joining in!',
        text: 'Welcome to the app, ${name}. Let me know how you get along with the app'
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'rlarbska3824@gmail.com',
        subject: 'Sorry to see you go',
        text: 'Goodbye, ${name}. I hope to see you back soon'
    })
}

module.exports = { sendWelcomeEmail }
