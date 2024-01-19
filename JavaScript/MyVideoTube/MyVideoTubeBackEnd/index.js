const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.urlencoded({ extended:true }));
app.use(express.json());
const port = process.env.PORT || 5000;
const jwt = require('jsonwebtoken');
const { connectDB, connectDBForExVideos } = require('./utils/database');
const { ContactFormModel, ExVideosUsersModel, ExVideosVIPUserModel, ExVideosVipUserRequestModel } 
    = require('./utils/schemaModel');
const { goMail, ExVideosVipRequest } = require('./utils/sendMail');
const auth = require('./utils/auth');

app.get('/', async(req, res) => {
    res.send('Hi');
});

// Send contact form and save that form to MongoDB
app.post('/contactform', async(req, res) => {
    try {
        await connectDB();
        await ContactFormModel.create(req.body);
        await goMail(req.body);
        return res.status(200).json({message: 'Send your mail successfully!!'});
    } catch(err) {
        return res.status(400).json({message: 'Failed to send your email.'});
    };
});
// Recieve vip user request from Extra Videos
// app.post('/Exvideos/viprequest', async(req, res) => {
//     try {
//         await connectDBForExVideos();
//         await ExVideosVipUserRequestModel.create(req.body);
//         await ExVideosVipRequest(req.body);
//         return res.status(200).json({ message: 'Paypayユーザー名を送信しました。反映されるまで今しばらくお待ちください。' });
//     } catch(err) {
//         return res.status(400).json({ message: '送信に失敗しました。お問い合わせフォームから問題を報告してください。'});
//     }
// });
// Register to Ex videos
app.post('/ExVideos/register', async(req, res) => {
    try {
        await connectDBForExVideos();
        await ExVideosUsersModel.create(req.body);
        return res.status(200).json({ message: 'Your account is registered Successfully!!'})
    } catch(err) {
        return res.status(400).json({ message: 'Something went to wrong. Failed to Register your account.'})
    }
});

// Login to Ex Videos
const secret_key = 'ExVideosUser'

app.post('/ExVideos/login', async(req, res) => {
    try {
        await connectDBForExVideos();
        const savedExUserData = await ExVideosUsersModel.findOne({name: req.body.name});
        if (savedExUserData) {
            if (req.body.password === savedExUserData.password) {
                const payload = {
                    password: req.body.password,
                    name: req.body.name
                }
                // Token expires in 10minutes
                const token = jwt.sign(payload, secret_key, {expiresIn: '10m'});
                return res.status(200).json({message: 'Login Success!!', token: token});
            } else {
                return res.status(400).json({message: 'Failed to login. Wrong username or password.'});
            }
        } else {
            return res.status(400).json({message: 'Failed to login. Please create an account.'});
        }
    } catch(err) {
        return res.status(400).json({message: `Failed to login. ${err}` });
    }
});

// Check User's token
app.post('/ExVideos/user', auth, async(req, res) => {
    try {
        await connectDBForExVideos();
        const userData = await ExVideosUsersModel.findOne({ name: req.body.name });
        const vipUserData = await ExVideosVIPUserModel.findOne({ name: req.body.name });
        if (userData) {
            if (req.body.password === userData.password) {
                return res.status(200).json({message: 'おかえりなさい', userData: userData, vipUserData: vipUserData});
            } else {
                return res.status(400).json({ message: 'ログインし直してください。'})
            }
        } else {
            return res.status(400).json({ message: 'ログインし直してください。'});
        }
    } catch(err) {
        return res.status(400).json({ message: `エラーが起きました。${err}`});
    };
});

app.listen(port, () => {
    console.log(`Listening on localhost port ${port}`)
});
