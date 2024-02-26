import db from "../models/index";
require("dotenv").config();
import emailService from "./emailService";
let postBookAppointment = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.email || !data.doctorId || !data.timeType || !data.date) {
        resolve({
          errCode: 1,
          errMessage: "Missing parameter",
        });
      } else {
        await emailService.sendSimpleEmail({
          receiverEmail: data.email,
          patientName: "Huỳnh Long Nhật",
          time: "8:00 -9:00 Thứ 2 26/2/2024",
          doctorName: "Eric",
          redirectLink:
            "https://youtu.be/0GL--Adfqhc?list=PLncHg6Kn2JT6E38Z3kit9Hnif1xC_9VqI",
        });

        //upsert patient
        let user = await db.User.findOrCreate({
          where: {
            email: data.email,
          },
          defaults: {
            email: data.email,
            roleId: "R3",
          },
        });

        // create a booking record
        if (user && user[0]) {
          await db.Booking.findOrCreate({
            where: { patientId: user[0].id },
            defaults: {
              statusID: "S1",
              doctorId: data.doctorId,
              patientId: user[0].id,
              date: data.date,
              timeType: data.timeType,
            },
          });
        }
        resolve({
          errCode: 0,
          errMessage: "Save infor patient success!",
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  postBookAppointment: postBookAppointment,
};
