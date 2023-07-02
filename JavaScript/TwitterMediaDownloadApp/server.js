const express = require("express");
const axios = require("axios");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const puppeteer = require("puppeteer");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static("website"));

mongoose.connect("mongodb+srv://")
    .then(() => {
        console.log("Success: Connected to MongoDB")
    }).catch((err) => {
        console.error(`Failure: Unconnedted to MongoDB: ${err.message}`);
    })
const Schema = mongoose.Schema;
const UrlSchema = new Schema({
    url: String,
    directUrl: String,
    date: { type: Date, default: Date.now },
});

const UrlModel = mongoose.model("Url", UrlSchema);

app.post("/download", getVideo);
app.post("/downloadNoOne", getNoOne);
app.post("/downloadNoTwo", getNoTwo);
app.post("/downloadNoThree", getNoThree);

async function getVideo(req, res) {
    const userInput = req.body.url;

    console.log(userInput);

    const targetDirectUrl = await UrlModel.findOne({ url: userInput });

    if (targetDirectUrl) {
        const hrefValue = targetDirectUrl.directUrl;
        
        await noPuppeteer(hrefValue, userInput, res);
    } else {
        puppeteer_mongoose(userInput, res);
    }
};

async function puppeteer_mongoose(userInput, res) {
    const browser = await puppeteer.launch({
        headless: false,
        args: [
            "--no-sandbox", 
            "--disable-setuid-sandbox"
        ],
        executablePath:
            process.env.NODE_ENV === "production"
                ? process.env.PUPPETEER_EXECUTABLE_PATH
                : puppeteer.executablePath(),
    });
    
    const page = await browser.newPage();

    try {
        await page.goto("https://ssstwitter.com/");

        await page.type("#main_page_text", userInput);

        await page.click("#submit");

        await page.waitForSelector("#result");

        // After clicking the #submit button, there will be several options.
        // The "number" represents the different qualities(such as 600 x 500, 480 x 270 etc).
        // These quality options are collected and stored in the "results" array.
        const hrefValue = await page.evaluate(() => {
            const anchorElement = document.querySelectorAll("a.pure-button.pure-button-primary.is-center.u-bl.dl-button.download_link.without_watermark.vignette_active");

            let results = [];
            for (let i = 0; i < anchorElement.length; i++) {
                const url = anchorElement[i].href;
                const number = anchorElement[i].innerHTML;
                const result = {number, url};
                results.push(result);
                
            }
            return results;
        });
       
        // In order to find the best quality video, I calculate the sum of the dimensions
        // by adding the width and height of each option.
        // For example, if the quality is 600 x 500, the sum would be 1100(600 + 500).
        // This porocess is repeated for all available qualities, 
        // and the option with the highest sum is chosen along with its corresponding direct URL.
        let maxSum = 0;
        let maxUrl = "";
        const regex = /\d+/g;
        
        for (let i = 0; i < hrefValue.length; i++) {
            const targetNumber = hrefValue[i].number;
            const targetUrl = hrefValue[i].url;
            
            const matches = targetNumber.match(regex);
            const sum = parseInt(matches[0]) + parseInt(matches[1]);

            if (sum > maxSum) {
                maxSum = sum;
                maxUrl = targetUrl;
            }
        }

        console.log(maxUrl);

        await downloadVideo(res, maxUrl);
      
        try {
            const inputUrl = { 
                url: userInput,
                directUrl: maxUrl
            };
            UrlModel.create(inputUrl)
        } catch(err) {
            console.error(`Download Error: ${err.message}`);
            res.status(500).send("Something went wrong");
        };

    } catch(err) {
        console.error(`Download Error: ${err.message}`);
        res.status(500).send("Internal Server Error");
        
    } finally {
        await browser.close();
    }
};

async function noPuppeteer(hrefValue, userInput, res) {

    await downloadVideo(res, hrefValue);    
    try {
        const inputUrl = { 
            url: userInput,
            directUrl: hrefValue 
        };
        UrlModel.create(inputUrl)
    } catch(err) {
        console.error(`Download Error: ${err.message}`);
        res.status(500).send("Something went wrong");
    };
};

function generateUniqueFileName(originalFileName) {
    const timestamp = Date.now();
    const randomString = Math.random().toString(36).substring(2, 8);
    const extension = path.extname(originalFileName);
    const uniqueFileName = `${timestamp}_${randomString}${extension}`;
    return uniqueFileName;
};

async function getLambda(logMessage, urlNumber, res) {
    const endpoint = "https://j3xk14n56b.execute-api.ap-southeast-2.amazonaws.com/test/videourlstotwitterdownloaderapp"
    const responseFromAws = await axios.get(endpoint);
    const responseData = responseFromAws.data[urlNumber];
    console.log(responseData);
    console.log(logMessage);

    downloadVideo(res, responseData);
};

async function getNoOne(req, res) {
    try {
        const urlNumber = "No1.Url"

        await getLambda("No.1 Video", urlNumber, res );
        
    } catch(err) {
        console.error(`Download Error: ${err.message}`);
        res.status(500).send("Internal Server Error");
    };
};

async function getNoTwo(req, res) {
    try {
        const urlNumber = "No2.Url";

        await getLambda("No.2 Video", urlNumber, res);

    } catch(err) {
        console.error(`Download Error: ${err.message}`);
        res.status(500).send("Internal Server Error");
    };
}

async function getNoThree(req, res) {
    try {
        const urlNumber = "No3.Url";

        await getLambda("No.3 Video", urlNumber, res);

    } catch(err) {
        console.error(`Download Error: ${err.message}`);
        res.status(500).send("Internal Server Error");
    };
};

async function downloadVideo(res, url) {
    const originalFIleName = "testVideo.mp4";
    const uniqueFileName = generateUniqueFileName(originalFIleName);
    const filePath = path.join(__dirname, uniqueFileName);
    const writer = fs.createWriteStream(filePath);

    const response = await axios({
        method: "GET",
        url: url,
        responseType: "stream"
    })

    response.data.pipe(writer);
    writer.on("finish", () => {
        res.download(filePath, uniqueFileName, (err) => {
            if (err) {
                console.log(`Download Error: ${err.message}`);
            } else {
                console.log("Download Complete");
            }
            fs.unlinkSync(filePath);
        });
    });
    writer.on("error", (err) => {
        console.error(`File write error: ${err.message}`);
        res.status(500).send("Internal Server Error");
    });
}

app.listen(port, () => {
    console.log(`Listening on ${port}`);
});
