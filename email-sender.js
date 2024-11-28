// Replace these placeholders with your actual email credentials and recipient address
const senderEmail = 'your_email@example.com';
const senderPassword = 'your_password';
const recipientEmail = 'recipient_email@example.com';

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail', // Replace with your email service provider
  auth: {
    user: senderEmail,
    pass: senderPassword,
  },
});

const mailOptions = {
  from: senderEmail,
  to: recipientEmail,
  subject: 'Test Email from Node.js',
  text: 'This is a test email sent from Node.js.',
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error(error);
  } else {
    console.log('Email sent: %s', info.response);
  }
});