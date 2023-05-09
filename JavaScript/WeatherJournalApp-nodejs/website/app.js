/* Global Variables */

// http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={API key}
let baseURL = "http://api.openweathermap.org/data/2.5/forecast?zip=";
const apiKey = "&appid=0ee2af5239cf498257559ec0af3b8d3e&units=imperial";

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+ 1 +'.'+ d.getDate()+'.'+ d.getFullYear();

document.getElementById("generate").addEventListener("click", performAction);

function performAction(e) {
    const zip = document.getElementById("zip").value;
    const feeling = document.getElementById("feelings").value;
    getData(baseURL, zip, apiKey)

    .then(function(data) {
        console.log(data);
        postData("addData", { date: newDate, temp: data.list[0].main.temp, content: feeling});
    })
    .then(
        updateUI()
    )
};

// GET request to the OpenWeatherMap API
const getData = async (baseURL, zipcode, key) => {
    const res = await fetch(baseURL + zipcode + key)

    try {
        const data = await res.json();
        return data;
    } catch(error) {
            console.log("error", error);
    };
};

// Fucntion of update the UI dynamically
const updateUI = async () => {
    const request = await fetch("/all");

    try {
        const allData = await request.json();
        console.log(allData);
        document.getElementById("temp").innerHTML = Math.round(allData.temp);
        document.getElementById("date").innerHTML = allData.date;
        document.getElementById("content").innerHTML = allData.content;
    }catch(error) {
        console.log("error", error);
    }
}

// POST request to add the API data
const postData = async (url = "", data = {}) => {
    console.log(data);
    const response = await fetch(url, {
        method: "POST",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });

    try {
        const newData = await response.json();
        return newData;
    } catch(error) {
        console.log("error", error);
        console.log(data);
    }
};
