const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

const connectDB = require("../../utils/database");
const { ItemModel, UserModel } = require("../../utils/schemaModels");



app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(cors());
const jwt = require("jsonwebtoken");
const auth = require("../../utils/auth");

// ITEM Function
// Create Item
app.post("/item/create", auth, async (req, res) => {
    try{
        await connectDB();
        await ItemModel.create(req.body);
        return res.status(200).json({message: "Created an Item Successfully"});
    } catch(err) {
        return res.status(400).json({message: "Failed to Create an Item"});
    }

});

// Read All Items
app.get("/", async (req, res) => {
    try{
        await connectDB();
        const allItems = await ItemModel.find();
        res.status(200).json({message: "Read all Items Successfully", allItems: allItems});
    } catch(err) {
        res.status(400).json({message: "Failed to read all Items"});
    }

});

// Read Single Item
app.get("/item/:id", async(req, res) => {
    try{
        await connectDB();
        const singleItem = await ItemModel.findById(req.params.id);
        return res.status(200).json({message: "Success", singleItem:singleItem});
    } catch(err) {
        res.status(400).json({message: "Failed"})
    };
});

// Update Item
app.put("/item/update/:id", auth, async(req, res) => {
    try{
        await connectDB();
        const singleItem = await ItemModel.findById(req.params.id);
        if(singleItem.email === req.body.email) {
            await ItemModel.updateOne({_id:req.params.id}, req.body);
            res.status(200).json({message: "Updated Successfully"})
        } else {
            throw new Error();
        }
        
    } catch(err) {
        res.status(400).json({message: "Failed to Update"})
    };
});

// Delete Item
app.delete("/item/delete/:id", auth, async(req, res) => {
    try{
        await connectDB();
        const singleItem = await ItemModel.findById(req.params.id)
        console.log(singleItem.email);
        console.log(req.body.email);
        if(singleItem.email === req.body.email) {
            await ItemModel.deleteOne({_id:req.params.id});
            res.status(200).json({message: "Deleted Successfully"})
        } else {
            throw new Error();
        }
        
    } catch(err) {
        res.status(400).json({message: "Failed to Delete"})
    }
});

// USER Function
// Register User
app.post("/user/register", async(req, res) => {
    try{
        await connectDB();
        await UserModel.create(req.body);
        return res.status(200).json({message: "Created Your Account Successfully"});
    } catch(err) {
        res.status(400).json({message: "Failed to Create an Account"});
    }
})

// Login User
const secret_key = "mern-market";

app.post("/user/login", async(req, res) => {
    try{
        await connectDB();
        const savedUserData = await UserModel.findOne({email: req.body.email});
        console.log(savedUserData);
        if(savedUserData) {
            if(req.body.password === savedUserData.password) {
                const payload = {
                    email: req.body.email,
                }
                const token = jwt.sign(payload, secret_key, {expiresIn: "23h"});
                return res.status(200).json({message: "Login Successfully", token: token});
            } else {
                return res.status(400).json({message: "Failed to Login. Wrong Password"});
            }
            
        } else {
            return res.status(400).json({message: "Failed to Login. No Such User exists"})
        }
        
    } catch(err) {
        return res.status(400).json({message: "Failed to Login"})
    }
});

app.listen(5000, () => {
    console.log(`Listening on localhost port ${port}`);
});
