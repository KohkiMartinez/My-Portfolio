// utils/database.js

const mongoose = require('mongoose');

const MongoDBEndpoint = process.env.MongoDB_Endpoint;

const connectDB = async() => {
    try{
        await mongoose.connect(`${MongoDBEndpoint}`)
        console.log('Success: Connected to MongoDB')
    } catch(err) {
        console.log("Failure: Unable to connect to MongoDB");
        throw new Error();
    }
}


module.exports = connectDB;
