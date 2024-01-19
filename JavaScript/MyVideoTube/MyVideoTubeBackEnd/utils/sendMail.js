// nodeMailer setting
const nodeMailer = require('nodemailer');

const SendMailHost = process.env.SendMail_Host;
const SendMailUser = process.env.SendMail_User;
const SendMailPass = process.env.SendMail_Pass;
const SendMailEmail1 = process.env.SendMail_Email1;
const SendMailEmail2 = process.env.SendMail_Email2;

const transporter = nodeMailer.createTransport({
    service: "gmail",
    host: SendMailHost,
    port: 587,
    secure: false,
    auth: {
        user: SendMailUser,
        pass: SendMailPass
    }
});

const goMail = async(message) => {
    const mailOptions = {
        from: SendMailEmail1,
        to: SendMailEmail2,
        subject: `${message.name}から、お問い合わせがありました`,
        html: `
            <p>Name: ${message.name}</p>
            <p>Email: ${message.email}</p>
            <p>Message: ${message.message}</P>
        `
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent :" + info.response);
        }
    });
}
const ExVideosVipRequest = async(message) => {
  const mailOptions = {
    from: SendMailEmail1,
        to: SendMailEmail2,
        subject: `${message.ExVideosUserName}から、ExVideosでVIPユーザーリクエストがありました。`,
        html: `
            <p>ExVideos UserName: ${message.ExVideosUserName}</p>
            <p>Paypay UserName: ${message.PaypayUserName}</p>
        `
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent :" + info.response);
        }
    });
}

// Mail template with ejs format
const HTML_TEMPLATE = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>NodeMailer Email Template</title>
        <style>
          .container {
            width: 100%;
            height: 100%;
            background-color: #f4f4f4;
          }
          .email {
            width: 80%;
            margin: 0 auto;
            background-color: #fff;
            padding: 20px;
          }
          .email-header {
            background-color: #333;
            color: #fff;
            padding: 20px;
            text-align: center;
          }
          .email-body {
            padding: 20px;
          }
          .email-footer {
            background-color: #333;
            color: #fff;
            padding: 20px;
            text-align: center;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="email">
            <div class="email-header">
              <h1>Your Item is onSale NOW!!</h1>
            </div>
            <div class="email-body">
              <% for (let i = 0; i < allData.length; i++) { %>
                <h3><%= allData[i].name %>: <%= allData[i].price %></h3>
                <p><%= allData[i].sale %> <%= allData[i].diff %></p>
              <% } %>
            </div>
            <div class="email-footer">
              <p>WebScraper</p>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;

  module.exports = {
    goMail,
    ExVideosVipRequest
  };
