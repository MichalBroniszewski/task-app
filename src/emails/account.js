const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = async (email, name) => {
    await sgMail.send({
        to: email,
        from: 'mi.broniszewski@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}!`
    })
}

const sendCancellationEmail = async (email, name) => {
    await sgMail.send({
        to: email,
        from: 'mi.broniszewski@gmail.com',
        subject: 'We are sorry to see you go.',
        text: `Hope to see you again, ${name}!`
    }).then(() => {
        console.log('Email sent')
    }).catch((error) => {
        console.error(error)
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}
