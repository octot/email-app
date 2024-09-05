// server.js
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb+srv://user:user@cluster0.syund4p.mongodb.net/Authentication', { useNewUrlParser: true, useUnifiedTopology: true });


// Email sending route
app.post('/send-email', (req, res) => {
    const { description, email } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'aajaykumarr32@gmail.com',
            pass: 'zjpslnqyldqexent',
        },
    });

    const mailOptions = {
        from: '',
        to: email,
        subject: 'Description Submission',
        text: description,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Email sent: ' + info.response);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
