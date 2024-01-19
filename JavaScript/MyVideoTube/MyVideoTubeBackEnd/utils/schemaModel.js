// utils/schemaModel.js

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ContactFormSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    message: {
        type: String,
        required: true
    },
});

// const ContactFormSchema = new Schema({
//     name: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     password: {
//         type: String,
//         required: true
//     },
//     paymentStatus: {
//         type: String
//     }
// });

const ExVideosUsersSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    // paymentStatus: {
    //     type: String
    // }
});

const ExVideosVIPUserSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    paymentStatus: {
        type: String
    }
});

const ExVideosVIPUserRequestSchema = new Schema({
    ExVideosUserName: {
        type: String,
        required: true,
    },
    PaypayUserName: {
        type: String,
        required: true,
    }
});

// exports.ContactFormModel = mongoose.model('ContactForm', ContactFormSchema);
// exports.ExVideosUsersModel = mongoose.model('ExVideosUser', ExVideosUsersSchema);
module.exports = {
    ContactFormModel: mongoose.model('ContactForm', ContactFormSchema),
    ExVideosUsersModel: mongoose.model('ExVideosUser', ExVideosUsersSchema),
    ExVideosVIPUserModel: mongoose.model('ExVideosVIPUser', ExVideosVIPUserSchema),
    ExVideosVipUserRequestModel: mongoose.model('ExVideosVipUserRequest', ExVideosVIPUserRequestSchema)
};
