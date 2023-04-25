import { checkForDate } from "./checkForDate";
import { addWeatherData } from "./addWeatherDarta";
import { addImages } from "./addImages";


// Date
let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

if (month < 10) {
    month = "0" + month;
};
if (day < 10) {
    day = "0" + day;
};

let today = year + "-" + month + "-" + day;

const start = document.getElementById("startDate");
start.value = today;
start.min = today;

const end = document.getElementById("endDate");
end.value = today;
end.min = today;

const spinner = document.getElementById("loading");
spinner.classList.add("loaded");

// TabChange
const tabMenus = document.querySelectorAll('.tab_menu-item');

for (const tabMenu of tabMenus) {
    tabMenu.addEventListener('click', tabSwitch);
};

function tabSwitch(event) {
    const tabTargetData = event.target.dataset.tab;

    const tabList = event.target.closest('.tab_menu');

    const tabItems = tabList.getElementsByClassName('tab_menu-item');

    const tabPanelItems = tabList.nextElementSibling.querySelectorAll('.tab_panel-box');
    
    for (const tabItem of tabItems) {
        tabItem.classList.remove('is-active');
    };
    
    for (const tabPanelItem of tabPanelItems) {
        tabPanelItem.classList.remove('is-shown');
    };

    event.target.classList.add('is-active');

    for (const tabPanelItem of tabPanelItems) {
        if (tabPanelItem.dataset.panel === tabTargetData) {
            tabPanelItem.classList.add('is-shown');
        };
    };
};
 

function handleSubmit(e) {
    e.preventDefault();

    spinner.classList.remove("loaded");

    const city = document.getElementById("city").value;
    const sDate = document.getElementById("startDate").value;
    const eDate = document.getElementById("endDate").value;

    const startDate = new Date(sDate);
    const endDate = new Date(eDate);
    const nowDate = new Date(today)
    
    const sMilliS = startDate.getTime();
    const eMilliS = endDate.getTime();
    const tMilliS = nowDate.getTime();

    if (city !== "" && checkForDate(sMilliS, eMilliS)) {
        console.log("::: Form Submitted :::", city);
        postGeoNameData("http://localhost:8001/postGeoNameData", city)
        .then(async function() {
            await postCurrentWeatherData("http://localhost:8001/postCurrentWeatherData");
            await postForecastWeatherData("http://localhost:8001/getForecastData");
        })
        .then(async function(res) {
            await postPixabayData("http://localhost:8001/postPixabayData", city);
        })
        .then(async function() {
            await updateUI();
        })
        .then(function() {
            document.getElementById("myTrip").innerHTML = `My Trip to: <strong>${city}</strong> is ${(sMilliS - tMilliS)/ 86400000} Days Away!!`;
            document.getElementById("departing").innerHTML = `Departing: <strong>${sDate}</strong>`;
            document.getElementById("totalDay").innerHTML = `My Total Trip is: ${(eMilliS - sMilliS)/ 86400000} Days`;
        })
        .then(function() {
            spinner.classList.add("loaded");
        })
    } else {
        window.location.reload();
        alert("Please Enter City Name!!");
    };  
}

const postGeoNameData = async (url, city) => {
    const response = await fetch (url, {
        method: "POST",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ city_name: city }),
    });

    try {
        const geoNameData = await response.json();
        return geoNameData;
    } catch (error) {
        console.log("ERROR", error);
    };
};

const postCurrentWeatherData = async (url) => {
    const response = await fetch (url)

    try {
        const weatherData = await response.json();
        return weatherData;
    } catch (error) {
        console.log("ERROR(weatherbit)", error);
    };
};

const postForecastWeatherData = async (url) => {
    const response = await fetch (url)

    try {
        const forecastData = await response.json();
        return forecastData;
    } catch (error) {
        console.log("ERROR", error);
    };
};

const postPixabayData = async (url, city) => {
    const response = await fetch (url, {
        method: "POST",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ city_name: city }),
    });

    try {
        const pixabayData = await response.json();
        return pixabayData;
    } catch (error) {
        console.log("ERROR", error);
    };
};

const updateUI = async () => {
    const request = await fetch("./allData");

    try {
        const allData = await request.json();

        addWeatherData(allData);

        const totalHits = allData.totalHits;
    
        addImages(allData, totalHits);
    } catch (error) {
        console.log("ERROR", error);
    };
};

export {
    tabSwitch,
    handleSubmit, 
    postGeoNameData, 
    postCurrentWeatherData, 
    postForecastWeatherData,
    postPixabayData, 
    updateUI
};
