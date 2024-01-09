// // const mailjet = require("node-mailjet").connect(
// //   "089764095b84270ee7f4852758efe838",
// //   "cb22fc0be20f3c2bfa32467d9086e477"
// // );

// export const signUp = (users, email, username, password) => {
//   // check if the username or email already exist
//   // if already exists send "already exists"  message
//   // if not then send the updated user object
// };

// // // Send SMS
// // export const request = mailjet.post("send", { version: "v3.1" }).request({
// //   Messages: [
// //     {
// //       From: {
// //         Email: "vishalam3636@gmail.com",
// //         Name: "Vishal Chauhan",
// //       },
// //       To: [
// //         {
// //           Email: "vishalam36@gmail.com",
// //           Name: "Vidshal",
// //         },
// //       ],
// //       Subject: "Subject of the Email",
// //       TextPart: "Plain text content of the email",
// //       HTMLPart: "<h3>HTML content of the email</h3>",
// //     },
// //   ],
// // });

// // using nodemailer
// const nodemailer = require("nodemailer");

// export const sendMail = async (req, res) => {
//   // connect with the smtp
//   let transporter = await nodemailer.createTransport({
//     host: "smtp.ethereal.email",
//     port: 587,
//     auth: {
//       user: "darren.dickinson@ethereal.email",
//       pass: "dBs6Z9YBZ62PyvxhvB",
//     },
//   });

//   let info = await transporter.sendMail({
//     from: '"Vishal 👻" <darren.dickinson@ethereal.email>', // sender address
//     to: "chandu36@yopmail.com", // list of receivers
//     subject: "Hello Vishal", // Subject line
//     text: "Hello Vishal Developer", // plain text body
//     html: "<b>Hello Vishal Developer</b>", // html body
//   });

//   console.log("Message sent: %s", info.messageId);
//   res.json(info);
//   console.log(info, ">>>>>>info");
// };

// ======================================================== //
// =============== SIGNUP Components Functions ============ //
// ======================================================== //
// Checking For Availability OF Email and Username
export const isUSerAlreadyExists = (email, username, users) => {
  const checkingForEmail = users.find((user) => {
    return user.email === email;
  });

  const checkingForUsername = users.find((user) => {
    return user.username === username;
  });

  if (!checkingForEmail && !checkingForUsername) {
    return {
      status: "0",
      message: "username and email are available...!",
    };
  } else if (!checkingForEmail && checkingForUsername) {
    return {
      status: "1",
      message: "Username is not available...! ",
    };
  } else if (checkingForEmail && !checkingForUsername) {
    return {
      status: "2",
      message: "Email is not available",
    };
  } else if (checkingForEmail && checkingForUsername) {
    return {
      status: "3",
      message: "Username and Email are not available...!",
    };
  }
};

// Generating OTP (four digit)
export const generateOtp = () => {
  const geratedOTP = Math.floor(1000 + Math.random() * 9000);
  console.log(geratedOTP);
  return geratedOTP;
};

// ======================================================== //
// =============== SIGNIN Components Functions ============ //
// ======================================================== //
export const signInReusableFunction = () => {
  console.log("signIn button clicked, function is in reusble compoennts");
};
