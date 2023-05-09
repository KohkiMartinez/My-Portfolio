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

// For cors error
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

// Get a data from geoname API ////////////////////////////

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

// Get data from weatherbit API /////////////////////////////////

// 1. Current weather Data

const currentWeatherbitURL = "http://api.weatherbit.io/v2.0/current?";
const apiKey = "10be76c5e28e462994481591aeccf533";

app.get("/postCurrentWeatherData", getCurrentWeatherData);

async function getCurrentWeatherData (req, res) {
    const lng_data = lnglatData.lngVal;
    const lat_data = lnglatData.latVal;

    const response = await fetch (`${currentWeatherbitURL}lat=${lat_data}&lon=${lng_data}&key=${apiKey}`)

    .then(function(response) {
        return response.json();
    })
    .then(function (d) {

        let currentWeatherData = {
            city_name: d.data[0].city_name,
            date: d.data[0].valid_date,
            weather: d.data[0].weather.description,
            temp: d.data[0].temp
        };

        projectData = currentWeatherData;
        res.send(projectData);
    })
    .catch (function (error) {
        console.warn("Something went wrong", error)
    });
};

// 2. Forecast weather Data

const forecastWeatherbitURL = "http://api.weatherbit.io/v2.0/forecast/daily?";

app.get("/getForecastData", getForecastData);

async function getForecastData (req, res) {
    const lng_data = lnglatData.lngVal;
    const lat_data = lnglatData.latVal;

    const response = await fetch (`${forecastWeatherbitURL}lat=${lat_data}&lon=${lng_data}&key=${apiKey}`)
    
    .then(function (response) {
        return response.json();
    })
    .then(function (d) {

        let forecastWeatherData = {
            day2:{
                date: d.data[1].valid_date,
                high_temp: d.data[1].high_temp,
                low_temp: d.data[1].low_temp,
                weather: d.data[1].weather.description
            },
            day3:{
                date: d.data[2].valid_date,
                high_temp: d.data[2].high_temp,
                low_temp: d.data[2].low_temp,
                weather: d.data[2].weather.description
            },
            day4:{
                date: d.data[3].valid_date,
                high_temp: d.data[3].high_temp,
                low_temp: d.data[3].low_temp,
                weather: d.data[3].weather.description
            },
            day5:{
                date: d.data[4].valid_date,
                high_temp: d.data[4].high_temp,
                low_temp: d.data[4].low_temp,
                weather: d.data[4].weather.description
            },
            day6:{
                date: d.data[5].valid_date,
                high_temp: d.data[5].high_temp,
                low_temp: d.data[5].low_temp,
                weather: d.data[5].weather.description
            },
            day7:{
                date: d.data[6].valid_date,
                high_temp: d.data[6].high_temp,
                low_temp: d.data[6].low_temp,
                weather: d.data[6].weather.description
            },
            day8:{
                date: d.data[7].valid_date,
                high_temp: d.data[7].high_temp,
                low_temp: d.data[7].low_temp,
                weather: d.data[7].weather.description
            },
            day9:{
                date: d.data[8].valid_date,
                high_temp: d.data[8].high_temp,
                low_temp: d.data[8].low_temp,
                weather: d.data[8].weather.description
            },
            day10: {
                date: d.data[9].valid_date,
                high_temp: d.data[9].high_temp,
                low_temp: d.data[9].low_temp,
                weather: d.data[9].weather.description
            },
            day11:{
                date: d.data[10].valid_date,
                high_temp: d.data[10].high_temp,
                low_temp: d.data[10].low_temp,
                weather: d.data[10].weather.description
            },
            day12:{
                date: d.data[11].valid_date,
                high_temp: d.data[11].high_temp,
                low_temp: d.data[11].low_temp,
                weather: d.data[11].weather.description
            },
            day13:{
                date: d.data[12].valid_date,
                high_temp: d.data[12].high_temp,
                low_temp: d.data[12].low_temp,
                weather: d.data[12].weather.description
            },
            day14:{
                date: d.data[13].valid_date,
                high_temp: d.data[13].high_temp,
                low_temp: d.data[13].low_temp,
                weather: d.data[13].weather.description
            },
            day15:{
                date: d.data[14].valid_date,
                high_temp: d.data[14].high_temp,
                low_temp: d.data[14].low_temp,
                weather: d.data[14].weather.description
            },
            day16:{
                date: d.data[15].valid_date,
                high_temp: d.data[15].high_temp,
                low_temp: d.data[15].low_temp,
                weather: d.data[15].weather.description
            }
        };
        projectData3 = forecastWeatherData;
        res.send(projectData3);
    })
    .catch (function (error) {
        console.warn("Something went wrong", error)
    });
}

// Get data from pixabay API /////////////////////////////////

const pixabayURL = "https://pixabay.com/api/?key=";
const pixabayApiKey = "34569091-a16776fa6fc990a42ea60427c";

app.post("/postPixabayData", getPixabayData);

async function getPixabayData (req, res) {
    const inputCity2 = req.body.city_name;

    const response = await fetch (`${pixabayURL}${pixabayApiKey}&q=${inputCity2}`)

    .then(function(response) {
        return response.json();
    })
    .then(function (data) {
        let imageData = {
            totalHits: data.totalHits,
            image1: data.hits[0].largeImageURL,
            image2: data.hits[1].largeImageURL,
            image3: data.hits[2].largeImageURL,
            image4: data.hits[3].largeImageURL
        };

        projectData2 = imageData;
        res.send(imageData);
    })
    .catch (function(error) {
        console.warn("Something went wrong", error);
    });
};

// GET route returns the projectData and projectData2 objects

app.get("/allData", sendData);

function sendData (req, res) {
    let allProjectData = Object.assign(projectData, projectData2, projectData3);
    res.send(allProjectData);
    allProjectData = [];
    lnglatData = {};
};

// I need to use "export" to test function with jest,
// but If I includ it, "npm run start" won't work.
// So I created a file "serverForTesting.js" in server folder for test with jest.
// export {
//     getGeoData
// };
