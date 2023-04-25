let lnglatData = {};
let projectData = {};
let projectData2 = {};
let projectData3 = {};
let allProjectData = [];

const express = require("express"),
    app = express(),
    path = require("path"),
    bodyParser = require("body-parser"),
    cors = require("cors"),
    fetch = require("node-fetch"),
    port = process.env.PORT || 8001

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());

app.use(cors());

// for cors error
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

app.use(express.static("dist"));

app.get("/", function(req, res) {
    res.sendfile("dist/index.html")
});

app.listen(port, () => {
    console.log(`Your app listening on port ${port}!`);
});

// get a data from geoname API ////////////////////////////

const geoNamesURL = "http://api.geonames.org/searchJSON";

app.post("/postGeoNameData", getGeoData);

async function getGeoData (req, res) {
    const inputCity = req.body.city_name;
    const response = await fetch (`${geoNamesURL}?q=${inputCity}&username=kohkim`, {
    })

    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        const lng = data.geonames[0].lng;
        const lat = data.geonames[0].lat;

        const lng_lat = {
            lngVal: lng,
            latVal: lat
        };

        lnglatData = lng_lat;
        res.send(lnglatData);
    })
    .catch (function (error) {
        console.warn("Something went wrong", error)
    });
};

export {
    getGeoData
};
