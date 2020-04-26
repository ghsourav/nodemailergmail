const nodemailer = require('Nodemailer')

const transporter=nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"sujata.enterprise@gmail.com",
        pass:"9230506334",
    },
});

let mailOptions ={
    to: "ssspl2012@gmail.com",
    from :"sujata.enterprise@gmail.com",
    subject:"My First NodeJs",
    html:`<h1>Hello</h1>`,
};


transporter.sendMail(mailOptions,(err) => {
    if (err) throw err;
    console.log("Succesful mail sent")
})