const nodemailer = require('Nodemailer')

const transporter=nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"***@gmail.com",
        pass:"****",
    },
});

let mailOptions ={
    to: "***",
    from :"***@gmail.com",
    subject:"My First NodeJs",
    html:`<h1>Hello</h1>`,
};


transporter.sendMail(mailOptions,(err) => {
    if (err) throw err;
    console.log("Succesful mail sent")
})