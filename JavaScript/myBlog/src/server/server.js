"use strict";

const express = require("express"),
    app = express(),
    path = require("path"),
    mongoose = require("mongoose"),
    session = require("express-session"),
    port = process.env.PORT || 5000

app.use(express.urlencoded({ extended: true }));

// Connecting to MongoDB
mongoose.connect("mongodb+srv://mynewownecbusiness:rpUzrx1ZKQKDeSIX@cluster0.ohsgxum.mongodb.net/blogUserDatabase?retryWrites=true&w=majority")
    .then(() => {
        console.log("SUCCESS: Connected to MongoDB");
    })
    .catch((error) => {
        console.log("FAILURE: Failed to Connect to MongoDB", error);
    })

// ejs
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "../client/views"));

app.use("/images", express.static(path.join(__dirname, "..", "client", "images")));
app.use("/styles", express.static(path.join(__dirname, "..", "client", "styles")));

// Defining Schema and Model
// Blog Schema

const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    title: String,
    date: String,
    summary: String,
    image: String,
    textBody: String
});

// User Schema

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

// BlogModel and UserModel

const BlogModel = mongoose.model("Blog", BlogSchema);

const UserModel = mongoose.model("User", UserSchema);

// Session

const oneDay = 1000 * 60 * 60 * 24;

app.use(session ({
    secret: "secretKey",
    resave: false,
    saveUninitialized: false,
    cookie: {maxAge: oneDay}
}));

// Blog Functions

// Create Blog
app.get("/blog/create", (req, res) => {
    // Readign HTML file 
    // res.sendFile(path.resolve(__dirname, "../client/views/blogCreate.html"));
    if(req.session.userId) {
        res.render("blogCreate", {session: req.session.userId})
    } else {
        res.redirect("/")
    }
});

app.post("/blog/create", (req, res) => {
    BlogModel.create(req.body)
        .then(() => {
            res.redirect("/");
        })
        .catch(() => {
            res.render("error", {message: "An Error of /blog/create"});
        })
});

// Read All Blogs
app.get("/", async (req, res) => {
    const allBlogs = await BlogModel.find();
    res.render("index", {allBlogs: allBlogs, session: req.session.userId});
});

// Read Single Blog
app.get("/blog/:id", async (req, res) => {
    const singleBlog = await BlogModel.findById(req.params.id);
    res.render("blogRead", {singleBlog: singleBlog, session: req.session.userId});
});

// Update Blog
app.get("/blog/update/:id", async (req, res) => {
    const singleBlog = await BlogModel.findById(req.params.id);
    if(req.session.userId) {
        res.render("blogUpdate", {singleBlog, session: req.session.userId});
    } else {
        res.redirect("/");
    }
});

app.post("/blog/update/:id", (req, res) => {
    BlogModel.updateOne({_id: req.params.id}, req.body)
        .then(() => {
            console.log("Updated Successfully");
            res.redirect("/");
        })
        .catch(() => {
            res.render("error", {message: "An error of /blog/update"});
            console.log("Failed to Update Blog Data");
        })
});

// Delete Blog
app.get("/blog/delete/:id", async(req, res) => {
    const singleBlog = await BlogModel.findById(req.params.id);
    res.render("blogDelete", {singleBlog, session: req.session.userId});
});

app.post("/blog/delete/:id", (req, res) => {
    BlogModel.deleteOne({_id: req.params.id})
        .then(() => {
            res.redirect("/");
            console.log("Successfullly Deleted Blog Post");
            res.send("Successfully Deleted Blog Post");
        })
        .catch(() => {
            res.render("error", {message: "An error of /blog/delete"});
            console.log("Failed to Delete Blog Post");
            res.send("Failed to Delete Blog Post");
        })
});

// User Function
// Create User
app.get("/user/create", (req, res) => {
    res.render("userCreate");
    // if(req.session.userId) {
    //     res.render("blogCreate");
    // } else {
    //     res.redirect("/user/login");
    // }
});

app.post("/user/create", (req, res) => {
    UserModel.create(req.body)
        .then(() => {
            res.redirect("/user/login");
        })
        .catch(() => {
            res.render("error", {message: "An error of /user/create"});
        })
});

// User Login
app.get("/user/login", (req, res) => {
    res.render("login", {session: req.session.userId});
});

app.post("/user/login", (req, res) => {
    UserModel.findOne({email: req.body.email})
        .then((savedUserData) => {
            if(savedUserData) {
                if(req.body.password === savedUserData.password) {
                    req.session.userId = savedUserData._id;
                    res.redirect("/");
                } else {
                    res.render("error", {message: "An error of /user/login"});
                }
            } else {
                res.render("error", {message: "An error of /user/login: No such User Exits"});
            }
        })
        .catch((error) => {
            console.log(error);
        });

});

app.listen(port, () => {
    console.log(`Listening on ${port}`);
});
