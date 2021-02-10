const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const gmailEmail = functions.config().gmail.login;
const gmailPassword = functions.config().gmail.pass;

admin.initializeApp();

exports.sendEmail = functions.firestore
  .document("messages/{messagesId}")
  .onCreate(function(snapshot) {
    const document = snapshot.data();
    const name = document.name;
    const email = document.email;
    const message = document.message;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      auth: {
        type: "login",
        user: gmailEmail,
        pass: gmailPassword,
      },
    });

    const mailOptions = {
      from: "salva.mi.vida.honduras.web@gmail.com",
      to: "jocvegar@gmail.com",
      subject: "Mensaje de Observatorio",
      text: `nombre: ${name}, email: ${email}, message: ${message}`,
      html: `<h4>Nuevo mensaje</h4>
            <p style="font-size: 16px;">${name}</p>
            <p style="font-size: 12px;">${email}</p>
            <p style="font-size: 12px;">${message}</p>
            `,
    };

    const getDeliveryStatus = function(error, info) {
      if (error) {
        return console.log(error);
      }
      console.log("Message sent: %s", info.messageId);
    };

    transporter.sendMail(mailOptions, getDeliveryStatus);
  });

// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
