const dotenv = require("dotenv");
dotenv.config({ path: "./.env"});

const express = require('express'),
    app = express(),
    path = require('path'),
    mockAPIResponse = require('./mockAPI.js'),
    bodyParser = require("body-parser"),
    cors = require("cors"),
    fetch = require("node-fetch"),
    port = process.env.PORT || 8081
    
// console.log(`Your API key is ${process.env.API_KEY}`);
const apiKey = process.env.API_KEY
const baseURL = "https://api.meaningcloud.com/sentiment-2.1?";

app.use(bodyParser.json());
app.use(bodyParser.text());

app.use(cors());

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile("dist/index.html")
})

// designates what port the app will listen to for incoming requests
app.listen(port, () => {
    console.log(`Your app listening on port ${port}!`);
});

app.get('/test', function (req, res) {
    res.send(mockAPIResponse);
});

// get a result from meaningCloud and pass it to client side in json format
app.post("/postData", getResult);

async function getResult (req, res) {
    const inputURL = req.body.Url;
    const response = await fetch(`${baseURL}&key=${apiKey}&lang=en&url=${inputURL}`, {
        method: "POST",
    })

    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        res.send(data);
    })
    .catch (function (err) {
        console.warn("Something went wrong", err)
    });
};
