// utils/database

const mongoose = require("mongoose");

const connectDB = async () => {
    try{
        await mongoose.connect("mongodb+srv://mongodb2:MPprbHyEFsYfiPWm@cluster0.vb5hnrk.mongodb.net/?retryWrites=true&w=majority");
        console.log("Success: Connected to MongoDB");
    } catch(err) {
        console.log("Failure: Unable to connect to MongoDB");
        throw new Error();
    }

}

module.exports = connectDB
