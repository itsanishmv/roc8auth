const nodemailer = require("nodemailer")

var transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: process.env.MAILTRAP_USER,
      pass: process.env.MAILTRAP_PASSWORD 
    }
  });
  
export async function sendmail(email : String, otp : String) {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: '"Maddison Foo Koch 👻" aanishmv@gmail.com ', // sender address
      to: email, // list of receivers
      subject: "OTP VERIFICATION", // Subject line
      text: `Hello world this is your otp ${otp}`, // plain text body
      html: "<b>Hello world?</b>", // html body
    });
  
    console.log("Message sent: %s", info.messageId);
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
  }
  
  sendmail().catch(console.error);