// utils/schemaModels.js

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Blog Schema
const BlogItemSchema = new Schema({
    title: String,
    image: String,
    price: String,
    description: String,
    email: String,
});

// Blog Image Schema
const BlogImageSchema = new Schema({
    title: String,
    color: String,
    amazonImageUrls: String,
});

// 'blogItem' will become its collection name on MongoDB
exports.BlogItemModel = mongoose.model('blogItem', BlogItemSchema);
exports.AdminUserModel = mongoose.model('adminUser', UserSchema);
exports.BlogImageModel = mongoose.model('imageUrl', BlogImageSchema);
