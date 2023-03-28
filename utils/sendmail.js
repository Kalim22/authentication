const nodemailer = require("nodemailer");

const mailsend = async (email, url, pageurl) => {
  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "kalimali2295@gmail.com",
        pass: "qbubbiazjufyruza",
      },
    });

    let details = {
      from: "kalimali2295@gmail.com",
      to: email,
      subject: "verify your email",
      text: "Hello user \n We are hereby to confirm your email is valid. Please click on mentioned below link to activate your account.\n Thank you for joining us",
      html: `<a href=${pageurl}>${url}</a>`,
    };

    transporter.sendMail(details, (err) => {
      if (err) {
        console.log(err);
      }
      console.log("email has sent");
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  mailsend,
};
