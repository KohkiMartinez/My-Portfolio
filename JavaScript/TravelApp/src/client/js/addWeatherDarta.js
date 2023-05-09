function addWeatherData(allData) {

    let weather_data = document.getElementById("weather_data");

    if (document.getElementById("cityName")) {
        for (let i = 0; i <16; i++) {
            weather_data.removeChild(weather_data.firstChild);
        };
    };

    let weather1 = document.createElement("div");
    weather1.style = "padding: 10px; margin: 10px; background-color: rgb(231, 164, 230);";
    weather1.innerHTML = `<p id="date1"></p><p id="cityName"></p><p id="weather1"></p><p id="temp1" style="font-size:30px;"></p>`;
    weather_data.appendChild(weather1);

    let weather2 = document.createElement("div");
    weather2.style = "padding: 10px; margin: 10px; background-color: rgb(219, 234, 221);";
    weather2.innerHTML = `<p id="date2"></p><p id="weather2"></p><p id="high_temp2" style="color:red;"></p><p id="low_temp2" style="color:blue;"></p>`;
    weather_data.appendChild(weather2);

    let weather3 = document.createElement("div");
    weather3.style = "padding: 10px; margin: 10px; background-color: rgb(219, 234, 221);";
    weather3.innerHTML = `<p id="date3"></p><p id="weather3"></p><p id="high_temp3" style="color:red;"></p><p id="low_temp3" style="color:blue;"></p>`;
    weather_data.appendChild(weather3);

    let weather4 = document.createElement("div");
    weather4.style = "padding: 10px; margin: 10px; background-color: rgb(219, 234, 221);";
    weather4.innerHTML = `<p id="date4"></p><p id="weather4"></p><p id="high_temp4" style="color:red;"></p><p id="low_temp4" style="color:blue;"></p>`;
    weather_data.appendChild(weather4);

    let weather5 = document.createElement("div");
    weather5.style = "padding: 10px; margin: 10px; background-color: rgb(219, 234, 221);";
    weather5.innerHTML = `<p id="date5"></p><p id="weather5"></p><p id="high_temp5" style="color:red;"></p><p id="low_temp5" style="color:blue;"></p>`;
    weather_data.appendChild(weather5);

    let weather6 = document.createElement("div");
    weather6.style = "padding: 10px; margin: 10px; background-color: rgb(219, 234, 221);";
    weather6.innerHTML = `<p id="date6"></p><p id="weather6"></p><p id="high_temp6" style="color:red;"></p><p id="low_temp6" style="color:blue;"></p>`;
    weather_data.appendChild(weather6);

    let weather7 = document.createElement("div");
    weather7.style = "padding: 10px; margin: 10px; background-color: rgb(219, 234, 221);";
    weather7.innerHTML = `<p id="date7"></p><p id="weather7"></p><p id="high_temp7" style="color:red;"></p><p id="low_temp7" style="color:blue;"></p>`;
    weather_data.appendChild(weather7);

    let weather8 = document.createElement("div");
    weather8.style = "padding: 10px; margin: 10px; background-color: rgb(219, 234, 221);";
    weather8.innerHTML = `<p id="date8"></p><p id="weather8"></p><p id="high_temp8" style="color:red;"></p><p id="low_temp8" style="color:blue;"></p>`;
    weather_data.appendChild(weather8);

    let weather9 = document.createElement("div");
    weather9.style = "padding: 10px; margin: 10px; background-color: rgb(219, 234, 221);";
    weather9.innerHTML = `<p id="date9"></p><p id="weather9"></p><p id="high_temp9" style="color:red;"></p><p id="low_temp9" style="color:blue;"></p>`;
    weather_data.appendChild(weather9);

    let weather10 = document.createElement("div");
    weather10.style = "padding: 10px; margin: 10px; background-color: rgb(219, 234, 221);";
    weather10.innerHTML = `<p id="date10"></p><p id="weather10"></p><p id="high_temp10" style="color:red;"></p><p id="low_temp10" style="color:blue;"></p>`;
    weather_data.appendChild(weather10);
    
    let weather11 = document.createElement("div");
    weather11.style = "padding: 10px; margin: 10px; background-color: rgb(219, 234, 221);";
    weather11.innerHTML = `<p id="date11"></p><p id="weather11"></p><p id="high_temp11" style="color:red;"></p><p id="low_temp11" style="color:blue;"></p>`;
    weather_data.appendChild(weather11);

    let weather12 = document.createElement("div");
    weather12.style = "padding: 10px; margin: 10px; background-color: rgb(219, 234, 221);";
    weather12.innerHTML = `<p id="date12"></p><p id="weather12"></p><p id="high_temp12" style="color:red;"></p><p id="low_temp12" style="color:blue;"></p>`;
    weather_data.appendChild(weather12);

    let weather13 = document.createElement("div");
    weather13.style = "padding: 10px; margin: 10px; background-color: rgb(219, 234, 221);";
    weather13.innerHTML = `<p id="date13"></p><p id="weather13"></p><p id="high_temp13" style="color:red;"></p><p id="low_temp13" style="color:blue;"></p>`;
    weather_data.appendChild(weather13);

    let weather14 = document.createElement("div");
    weather14.style = "padding: 10px; margin: 10px; background-color: rgb(219, 234, 221);"; 
    weather14.innerHTML = `<p id="date14"></p><p id="weather14"></p><p id="high_temp14" style="color:red;"></p><p id="low_temp14" style="color:blue;"></p>`;
    weather_data.appendChild(weather14);

    let weather15 = document.createElement("div");
    weather15.style = "padding: 10px; margin: 10px; background-color: rgb(219, 234, 221);";
    weather15.innerHTML = `<p id="date15"></p><p id="weather15"></p><p id="high_temp15" style="color:red;"></p><p id="low_temp15" style="color:blue;"></p>`;
    weather_data.appendChild(weather15);

    let weather16 = document.createElement("div");
    weather16.style = "padding: 10px; margin: 10px; background-color: rgb(219, 234, 221);";
    weather16.innerHTML = `<p id="date16"></p><p id="weather16"></p><p id="high_temp16" style="color:red;"></p><p id="low_temp16" style="color:blue;"></p>`;
    weather_data.appendChild(weather16);

    try {
        
        document.getElementById("cityName").innerHTML = `<strong>Today's Weather in ${allData.city_name} is:</strong>`;
        document.getElementById("weather1").innerHTML = allData.weather;
        document.getElementById("temp1").innerHTML = `${allData.temp} ℃`;

        document.getElementById("date2").innerHTML = `<strong>${allData.day2.date}</strong>`;
        document.getElementById("weather2").innerHTML = allData.day2.weather;
        document.getElementById("high_temp2").innerHTML = `${allData.day2.high_temp} ℃`;
        document.getElementById("low_temp2").innerHTML = `${allData.day2.low_temp} ℃`;

        document.getElementById("date3").innerHTML = `<strong>${allData.day3.date}</strong>`;
        document.getElementById("weather3").innerHTML = allData.day3.weather;
        document.getElementById("high_temp3").innerHTML = `${allData.day3.high_temp} ℃`;
        document.getElementById("low_temp3").innerHTML = `${allData.day3.low_temp} ℃`;

        document.getElementById("date4").innerHTML = `<strong>${allData.day4.date}</strong>`;
        document.getElementById("weather4").innerHTML = allData.day4.weather;
        document.getElementById("high_temp4").innerHTML = `${allData.day4.high_temp} ℃`;
        document.getElementById("low_temp4").innerHTML = `${allData.day4.low_temp} ℃`;

        document.getElementById("date5").innerHTML = `<strong>${allData.day5.date}</strong>`;
        document.getElementById("weather5").innerHTML = allData.day5.weather;
        document.getElementById("high_temp5").innerHTML = `${allData.day5.high_temp} ℃`;
        document.getElementById("low_temp5").innerHTML = `${allData.day5.low_temp} ℃`;

        document.getElementById("date6").innerHTML = `<strong>${allData.day6.date}</strong>`;
        document.getElementById("weather6").innerHTML = allData.day6.weather;
        document.getElementById("high_temp6").innerHTML = `${allData.day6.high_temp} ℃`;
        document.getElementById("low_temp6").innerHTML = `${allData.day6.low_temp} ℃`;

        document.getElementById("date7").innerHTML = `<strong>${allData.day7.date}</strong>`;
        document.getElementById("weather7").innerHTML = allData.day7.weather;
        document.getElementById("high_temp7").innerHTML = `${allData.day7.high_temp} ℃`;
        document.getElementById("low_temp7").innerHTML = `${allData.day7.low_temp} ℃`;

        document.getElementById("date8").innerHTML = `<strong>${allData.day8.date}</strong>`;
        document.getElementById("weather8").innerHTML = allData.day8.weather;
        document.getElementById("high_temp8").innerHTML = `${allData.day8.high_temp} ℃`;
        document.getElementById("low_temp8").innerHTML = `${allData.day8.low_temp} ℃`;

        document.getElementById("date9").innerHTML = `<strong>${allData.day9.date}</strong>`;
        document.getElementById("weather9").innerHTML = allData.day9.weather;
        document.getElementById("high_temp9").innerHTML = `${allData.day9.high_temp} ℃`;
        document.getElementById("low_temp9").innerHTML = `${allData.day9.low_temp} ℃`;

        document.getElementById("date10").innerHTML = `<strong>${allData.day10.date}</strong>`;
        document.getElementById("weather10").innerHTML = allData.day10.weather;
        document.getElementById("high_temp10").innerHTML = `${allData.day10.high_temp} ℃`;
        document.getElementById("low_temp10").innerHTML = `${allData.day10.low_temp} ℃`;

        document.getElementById("date11").innerHTML = `<strong>${allData.day11.date}</strong>`;
        document.getElementById("weather11").innerHTML = allData.day11.weather;
        document.getElementById("high_temp11").innerHTML = `${allData.day11.high_temp} ℃`;
        document.getElementById("low_temp11").innerHTML = `${allData.day11.low_temp} ℃`;

        document.getElementById("date12").innerHTML = `<strong>${allData.day12.date}</strong>`;
        document.getElementById("weather12").innerHTML = allData.day12.weather;
        document.getElementById("high_temp12").innerHTML = `${allData.day12.high_temp} ℃`;
        document.getElementById("low_temp12").innerHTML = `${allData.day12.low_temp} ℃`;

        document.getElementById("date13").innerHTML = `<strong>${allData.day13.date}</strong>`;
        document.getElementById("weather13").innerHTML = allData.day13.weather;
        document.getElementById("high_temp13").innerHTML = `${allData.day13.high_temp} ℃`;
        document.getElementById("low_temp13").innerHTML = `${allData.day13.low_temp} ℃`;

        document.getElementById("date14").innerHTML = `<strong>${allData.day14.date}</strong>`;
        document.getElementById("weather14").innerHTML = allData.day14.weather;
        document.getElementById("high_temp14").innerHTML = `${allData.day14.high_temp} ℃`;
        document.getElementById("low_temp14").innerHTML = `${allData.day14.low_temp} ℃`;

        document.getElementById("date15").innerHTML = `<strong>${allData.day15.date}</strong>`;
        document.getElementById("weather15").innerHTML = allData.day15.weather;
        document.getElementById("high_temp15").innerHTML = `${allData.day15.high_temp} ℃`;
        document.getElementById("low_temp15").innerHTML = `${allData.day15.low_temp} ℃`;

        document.getElementById("date16").innerHTML = `<strong>${allData.day16.date}</strong>`;
        document.getElementById("weather16").innerHTML = allData.day16.weather;
        document.getElementById("high_temp16").innerHTML = `${allData.day16.high_temp} ℃`;
        document.getElementById("low_temp16").innerHTML = `${allData.day16.low_temp} ℃`;
        
    } catch (error) {
        console.log("ERROR", error);
    }
};

export {
    addWeatherData
};
