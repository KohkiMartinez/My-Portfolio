// utils/database.js

const mongoose = require('mongoose');

const MongdbEndpoint = process.env.MongoDB_Endpoint;

const connectDB = async() => {
    try {
        await mongoose.connect(`${MongdbEndpoint}`)
        console.log('Success: Connected to MongoDB1');
    } catch(err) {
        console.log('Failed: Failed to Connect to MongoDB');
        throw new Error();
    }
};

const connectDBForExVideos = async() => {
    try {
        await mongoose.connect(`${MongdbEndpoint}`)
        console.log('Success: Connected to MongoDB2');
    } catch(err) {
        console.log('Failed: Failed to Connect to MongoDB');
        throw new Error();
    }
};


module.exports = {
    connectDBForExVideos,
    connectDB
};