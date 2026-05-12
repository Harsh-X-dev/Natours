const nodemailer = require('nodemailer');

const sendEmail = async options => {
  // create a transposrter
  const transporter = nodemailer.createTransporter({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT, 
    auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD
    }
  });

  // define email options
  const mailOptions = {
    from:'harsh saini <harsh@example.com>',
    to: options.email,
    subject: options.subject,
    text: options.message
  }

  // Actually send Eamail
  await transporter.sendMail(mailOptions)
};

module.exports = sendEmail;