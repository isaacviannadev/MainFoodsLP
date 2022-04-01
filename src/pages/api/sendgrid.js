import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    console.log('REQ.BODY', req.body);
    await sendgrid.send({
      to: 'isaacsvianna@gmail.com', // Your email where you'll receive emails
      from: 'isaacsvianna@hotmail.com', // your website email address here
      subject: 'Lead recebido pela landing page da Main Foods',
      html: `<div>${
        req.body.fullname + ' ' + req.body.email + ' ' + req.body.telefone
      }</div>`,
    });
  } catch (error) {
    console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: '' });
}

export default sendEmail;
