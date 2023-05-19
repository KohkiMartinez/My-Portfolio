const express = require("express");
const app = express();
const port = process.env.PORT || 1001;

app.get("/", (req, res) => res.type("html").send(html));

app.listen(port, () => console.log(`myResume listening on port ${port}`));

const html = `
<!doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Kohki Martinez Resume</title>
        <link rel="icon" type="image/png" href="images/resume.jpg">

        <!-- CSS -->
        <!-- <link rel="stylesheet" href="https://unpkg.com/ress/dist/ress.min.css">
        <link href="https//fonts.googleapis.com/css?family=Philosopher" rel="stylesheet">
        <link href="css/style.css" rel="stylesheet"> -->
        <style>
            html {
    font-size: 100%;
}


body {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    line-height: 1.7;
    color: #432;
}


body a:hover {
    color: #0bd;
}


.introduction {
    font-size: 22px;
}


.resume {
    margin: 2em 2em;
    /* padding: 0.5em 1em; */
    width: 1230px;
    border: rgb(9, 6, 162) solid ;
    border-radius: 10px;
}


#page-header {
    color: aliceblue;
    background-color: rgb(9, 6, 162);
    height: 260px;
    /* margin: 1% 0; */
    margin-bottom: 5%;
    padding: .5% 4%;
    border-radius: 5px 5px 0 0;
}


.contents {
    display: flex;
    padding: 0 4%;
    justify-content: space-between;
}


.subject {
    font-size: 18px;
    font-weight: bold
}


.place {
    font-size: 18px;
}


.duration {
    font-size: small;
    font-weight: 100;
    color: rgb(218, 27, 27);
}


main {
    width: 60%;
    order: 2;
}


.certificate-logo {
    position: absolute;
    left: 370px;

    width: 80px;
    margin-right: 5px;
}


aside {
    width: 35%;
    order: 1;
}


aside li {
    list-style: none;
}


.sub-title {
    color: rgb(9, 6, 162);
    font-size: 2rem;
    border-bottom: 2px rgb(9, 6, 162) solid;
    margin-bottom: 5px;
}


.information {
    font-size: 18px;
}


.logo {
    width: 15px;
    margin-right: 5px;
}


.skills span{
    background-color: rgb(154, 255, 255);
    border-radius: 5px;
    margin: 5px;
    padding: 3px 3px;
}


.skills {
    font-size: 24px;
    width: 400px;
    display: flex;
    flex-wrap: wrap;
}


.projects {
    font-size: 18px;
}


.udacity,
.work{
    font-size: 15px;
}


/* CERTIFICATE.HTML */
.udacity-certificate {
    width: 1500px;
}


.back:hover {
    color: #0bd;
}
        </style>
    </head>

    <body>
        <div class="resume">
            <header id="page-header">
                <h1 class="my-name">KOHKI MARTINEZ</h1>
                <p class="introduction">
                    I am a passionate programmer who enjoys writing code, particularly in web development (front end and back end).<br>
                    I have completed programming courses at RMIT, including "Intro to Programming Nanodegree" and "Front End Web Developer".<br> 
                    I am seeking a role where I can continue to learn from experienced team members and grow my skills in full stack web development.<br>
                </p> 
            </header>
            <div class="contents">
                <main>
                    <h3 class="sub-title">PROJECTS</h3><br>
                    <div class="projects">
                        <b>Node.js, webpack, babel projects:</b><br>
                        ・<a href="https://github.com/KohkiMartinez/My-Portfolio/tree/master/JavaScript/EvaluateNewsApp-webpack" target="_blank" rel="noopener noreferrer">
                            EvaluateNewsApp-webpack: 
                        </a>  I developed a web application that uses Node.js, webpack, and Babel to analyze the sentiment of news articles.
                        The app extracts news articles from a provided URL and uses the MeaningCloud natural language processing library to determine whether the articles are positive or negative.<br>
                        ・<a href="https://github.com/KohkiMartinez/My-Portfolio/tree/master/JavaScript/TravelApp" target="_blank" rel="noopener noreferrer">
                            TravelApp: 
                        </a>  Using Node.js, webpack, and Babel, I created a web application that extracts images of cities based on user input. 
                        The app fetches weather information and images of the user's desired city from three APIs - Geoname, Weatherbit, and Pixabay - and displays them on the screen.<br>
                        <b>React.js projects:</b><br>
                        ・<a href="https://github.com/KohkiMartinez/My-Portfolio/tree/master/JavaScript/React(CoronaTrackerApp)" target="_blank" rel="noopener noreferrer">
                            React(CoronaTrackerApp): 
                        </a> This web application displays Corona data for the country selected by the user. 
                        It is built using React and fetches data from an external API.<br>
                        ・<a href="https://github.com/KohkiMartinez/My-Portfolio/tree/master/JavaScript/React%26Typescript(WeatherApp)" target="_blank" rel="noopener noreferrer">
                            React&Typescript(WeatherApp): 
                        </a>I built a simple weather application that displays weather information based on user input. 
                        The app is built using React and Typescript, which helps ensure the type safety of the application and reduces the likelihood of errors.<br>
                        <b>MongoDB, Express, React.js, Node.js project:</b><br>
                        ・<a href="https://github.com/KohkiMartinez/My-Portfolio/tree/master/JavaScript/fullstack(mern)" target="_blank" rel="noopener noreferrer">
                            fullstack(mern): 
                        </a>I developed an e-commerce website using MongoDB, Node.js, React.js, and Express. 
                        The app requires users to create an account and post items for sale. 
                        Both the front-end and back-end code are included, and the back-end code connects to MongoDB to extract and upload data to the database.
                        However, the website is not publicly available yet.
                    </div><br>
                    
                    <h3 class="sub-title">WORK EXPERIENCE</h3><br>
                    <div class="work-experience">
                        <p class="subject">Hotel housekeeping supervisor </p>    
                        <p class="place">Oaks Hotels, Resort and Suites (Australia)</p> 
                        <p class="duration"><i>02/2022 - 11/2022</i></p>
                        <p class="work">
                            ・Supervised housekeeping staff and ensured high standards of cleanliness and maintenance for hotel rooms.<br>
                            ・Managed inventory, ordered supplies, and maintained budget for the department.<br>
                            ・Worked more than 10 hours per day, and 5 or 6 days per week.
                        </p> <br> 
                        <p class="subject">Restaurant Waitperson</p>    
                        <p class="place">Hotel & Resorts SAGA-KARATSU (Japan)</p>   
                        <p class="duration"><i>06/2017 - 01/2020</i></p>
                        <p class="work">
                            ・Provided exceptional service to guests in a high-end hotel restaurant, ensuring an enjoyable dining experience.<br>
                            ・Took orders, served food and beverages, and handled cash transactions.<br>
                            ・Maintained clean and organized dining areas and assisted with special events.
                        </p><br>
                    </div>
                </main>
                
                <aside>
                    <!-- information -->
                    <ul class="information">
                        <li><img class="logo" src="images/email.png" alt="email logo">kohki.martinez@gmail.com</li>
                        <!-- <li><img class="logo" src="images/phone.png" alt="phone logo">0406-258-715</li> -->
                        <li><img class="logo" src="images/map-pin.png" alt="map pin logo">Taylors Hill, Melbourne, VIC</li>
                        <li>
                            <a href="https://github.com/KohkiMartinez/My-Portfolio" target="_blank" rel="noopener noreferrer">
                            <img class="logo" src="images/github.png" alt="github logo">github.com</a></li>
                        <li>
                            <a href="https://www.linkedin.com/in/martinez-kohki-5b5396219/" target="_blank" rel="noopener noreferrer">
                            <img class="logo" src="images/linkedin-black.png" alt="linkedin logo">linkedin.com</a></li>
                    </ul><br>
                    <h3 class="sub-title">SKILLS</h3><br>
                    <ul class="skills">
                        <li><span>JavaScript</span></li>
                        <li><span>Node.js</span></li>
                        <li><span>React.js</span></li>
                        <li><span>Webpack</span></li>
                        <li><span>MongoDB</span></li>
                        <li><span>Python</span></li>
                        <li><span>Git</span></li>
                    </ul><br>
                    <h3 class="sub-title">EDUCATION</h3><br>
                    <div class="education">
                        <a href="certificate.html">
                            <img class="certificate-logo" src="images/Udacity Certificate  logo.jpg" alt="certificate"></a>
                        <p class="subject">Front End Web Developer</p>
                        <p class="place">RMIT University</p>
                        <p class="duration"><i>12/2022 - 04/2023</i></p>
                        <p class="udacity">
                            ・Focused on JavaScript, Node.js, and Webpack for front-end web development.<br>
                        </p><br>
                        <!-- <a href="certificate.html">
                            <img class="certificate-logo" src="images/Udacity Certificate  logo.jpg" alt="certificate"></a> -->
                        <p class="subject">Intro to Programming Nanodegree</p>
                        <p class="place">RMIT University</p>
                        <p class="duration"><i>05/2022 - 09/2022</i></p>
                        <p class="udacity">
                            ・Covered the basics of programming including JavaScript, Python, HTML, and CSS.<br>
                        </p><br>
                        <p class="subject">Bachelor of Science</p>
                        <p class="place">Monash University</p>
                        <p class="duration"><i>03/2014 - 05/2017</i></p>
                        <p class="udacity">
                            ・Completed a Bachelor of Science degree with a major in Development Biology.
                        </p>
                    </div><br>
                    <h3 class="sub-title">INTEREST</h3><br>
                    <ul class="interest">
                        <li>Exercise</li>
                        <li>Reading books</li>
                        <li>Meditation</li>
                    </ul><br>
                    <h3 class="sub-title">LANGUAGES</h3><br>
                    <ul class="languages">
                        <li>English</li>
                        <li>Japanese</li>
                    </ul>
                </aside>
            </div>
        </div>
    </body>
</html>
`