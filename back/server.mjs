import express from'express';
import nodemailer from 'nodemailer';
import crypto from 'crypto';
import bodyParser from 'body-parser';
const app = express();
app.use(bodyParser.json());
app.use(express.json());
const port = process.env.PORT || 3000;
const corsOption = { origin: 'http://localhost:3001',
credentials: true, methods: ["GET", "POST", "PUT", "DELETE"], } 
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3001'); 
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });
app.use(bodyParser.urlencoded({ extended: false }));

let randomCode1;
let randomCode2;
function sendEmail(to) {
    const verificationCode = crypto.randomBytes(2).toString('hex');
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'fawziaissa2002@gmail.com',
            pass: '***************'
        }
    });
    var mailOptions = {
        from: 'fawziaissa2002@gmail.com',
        to: to,
        subject: 'Sending Email using Node.js',
        text: `That was easy! ${verificationCode}`
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' +  'Random code: ', verificationCode);
        }
    });

    return verificationCode;
}

app.post('/api/send-email1', (req, res) => {
    const email1 = req.body.email1; 
    randomCode1 = sendEmail(email1);
    res.json({});
});

app.post('/api/send-email2', (req, res) => {
    const email2 = req.body.email2;
    randomCode2 = sendEmail(email2);
    res.json({});
});

app.get('/randomCode1', (req, res) => {
    res.json({randomCode1});
});
app.get('/randomCode2', (req, res) => {
    res.json({randomCode2});
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
  });
// app.post('/sendCod1', (req, res) => {
//     randomCode1 = req.body.randomCode1;
//     res.json(randomCode1);
//   });
//    app.post('/sendCod2', (req, res) => {
//     randomCode2 = req.body.randomCode2;
//     res.json(randomCode2);
//   });



// app.use(bodyParser.urlencoded({ extended: false }));
// const randomCode1 = crypto.randomBytes(2).toString('hex');
// const randomCode2 = crypto.randomBytes(2).toString('hex');
// const email1 = 'fawziaissa2002@gmail.com';
// sendEmail(email1,randomCode1);
// const email2 ='rawdanahhas999@gmail.com'; 
// sendEmail(email2,randomCode2);









    // تقديم رسالة استجابة بناءً على نجاح أو فشل التحقق
    // const Code1 = req.body.testCode1;
    //  const Code2 = req.body.testCode2;
    // if (Code1 === randomCode1 && Code2 === randomCode2) {
        
    //  } else {
   
    // //     res.send('فشل التحقق. الرجاء المحاولة مرة أخرى.');
    // }
