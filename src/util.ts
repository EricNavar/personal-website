// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
import sgMail from '@sendgrid/mail';

function sendEmail(name:string, text:string, email:string) {
  sgMail.setApiKey(process.env.REACT_APP_SENDGRID_API_KEY!);
  console.log(process.env.REACT_APP_SENDGRID_API_KEY);

  const msg = {
    to: 'ericn2413@gmail.com',
    from: 'ericn2413@gmail.com',
    subject: name + ' has sent you a message from ericnavar.com. Sender email: ' + email,
    text: text,
  };

  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent');
    })
    .catch((error) => {
      console.log('caught error in sendEmail()');
      console.error(error);
    });
}

export { sendEmail };
