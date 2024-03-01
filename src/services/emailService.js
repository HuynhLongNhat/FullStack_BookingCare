require("dotenv").config;
const nodemailer = require("nodemailer");

let sendSimpleEmail = async (dataSend) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: process.env.EMAIL_APP,
      pass: process.env.EMAIL_APP_PASSWORD,
    },
  });

  // async..await is not allowed in global scope, must use a wrapper

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Huỳnh Long Nhật 👻 <nhathuynh227@gmail.com>" ', // sender address
    to: dataSend.receiverEmail, // list of receivers
    subject: "Thông tin đặt lịch khám bệnh", // Subject line
    text: "Hello world?", // plain text body
    html: getBodyHTMLEmail(dataSend),
  });
};

let getBodyHTMLEmail = (dataSend) => {
  let result = "";
  if (dataSend.language === "vi") {
    result = `
    <h3>Xin chào ${dataSend.patientName}</h3>
    <p>Bạn nhận được email này vì đã đặt lệnh khám bệnh online trên Booking Care</p>
   <p>Thông tin đặt lịch khám bệnh :</p>
   <div><b>Thời gian  : ${dataSend.time}</b></div>
   <div><b>Bác sĩ  : ${dataSend.doctorName}</b></div>
   <p>Nếu các thông tin trên là đúng sự thật, vui lòng click vào đường link bên dưới để xác
    nhận và hoàn tất thủ tục đặt lịch khám bệnh</p>
  <div>
  <a href=${dataSend.redirectLink} target="_blank" >Click here</a>
  </div>
  <div>Xin chân thành cảm ơn!</div>
    `;
  }
  if (dataSend.language === "en") {
    result = `
    <h3>Dear ${dataSend.patientName}</h3>
    <p>
    You have received this email because you have set up your online treatment on Booking Care</p>
   <p>Information for scheduling medical examination:</p>
   <div><b>Time  : ${dataSend.time}</b></div>
   <div><b>Doctor : ${dataSend.doctorName}</b></div>
   <p>If the above information is true, please click on the link below to confirm
   receive and complete medical appointment scheduling procedures</p>
  <div>
  <a href=${dataSend.redirectLink} target="_blank" >Click here</a>
  </div>
  <div>Sincerely thank!</div>
    `;
  }
  return result;
};
module.exports = {
  sendSimpleEmail: sendSimpleEmail,
};
