// utils/database
require("dotenv").config();

const mongoose = require("mongoose");

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.mongooseURL);
        console.log("Success: Connected to MongoDB");
    } catch(err) {
        console.log("Failure: Unable to connect to MongoDB");
        throw new Error();
    }

}

module.exports = connectDB
