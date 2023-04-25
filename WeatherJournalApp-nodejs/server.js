// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require Express to run server and routes
const express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    cors = require("cors"),
    port = process.env.PORT || 2000


/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));



// Setup Server
app.listen(port, () => {
    console.log(`Listening on ${port}`);
});

// Start up an instance of app

// GET route returns the projectData object
app.get("/all", sendData);

function sendData(req, res) {
    res.send(projectData);
};

// POST route (add data to projectData)

app.post("/addData", addData);

function addData (req, res) {

    console.log(req.body);
    newEntry = {
        date: req.body.date,
        temp: req.body.temp,
        content: req.body.content
    }
    projectData = newEntry;
};
