"use strict";

require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 2000;

const puppeteer = require("puppeteer");
const nodeMailer = require("nodemailer");
const ejs = require("ejs");

let prevPrice = null;

const getProductInfo = async () => {
    console.log("start");
    const url = process.env.AmazonURL;

    const browser = await puppeteer.launch({
        headless: "new",
        args: ["--no-sandbox", "--disable-setuid-sandbox"]
    });

    const page = await browser.newPage();

    await page.goto(url);

    // Scrolls down to bottom of the wishlist (until get an element of endOfListMarker)
    // Cannot use this code anymore because Amazon eliminated id name called "endOfListMarker"
    // await page.evaluate(async () => {
    //     const distance = 500;
    //     const delay = 100;

    //     while (!document.querySelector("#endOfListMarker")) {
    //         document.scrollingElement.scrollBy(0, distance);
    //         await new Promise(resolve => {
    //             setTimeout(resolve, delay);
    //         });
    //     };
    // });

    // await page.waitForSelector("#endOfListMarker");

    // instead of scrollign down until "endOfListMarker", just scroll down to bottom of the page
    async function autoScroll(page) {
      await page.evaluate(async () => {
        await new Promise((resolve) => {
          let totalHeight = 0;
          const distance = 10;
          const timer = setInterval(() => {
            const scrollHeight = document.body.scrollHeight;
            window.scrollBy(0, distance);
            totalHeight += distance;

            if (totalHeight >= scrollHeight - window.innerHeight) {
              clearInteval(timer);
              resolve();
            }
          }, 100);
        });
      });
    };


    // Scrapes webpage with puppeteer
    const getData = await page.evaluate(() => {
        const itemList = [];
        
        document.querySelectorAll('[id^="itemInfo_"]').forEach(el => {
            const name = el.querySelector('[id^="itemName_"]').textContent.trim();
            const price = el.querySelector(".a-offscreen");

            if (price && el.querySelector('[id^="itemPriceDrop_"]')) {
                price.textContent = price.textContent.trim();

                const sale = el.querySelector('[id^="itemPriceDrop_"]').textContent.trim();
                const diff = el.querySelector(".a-row.itemPriceDrop span:last-child").textContent.trim();
                itemList.push ({
                    name: name,
                    price: price.textContent,
                    sale: sale,
                    diff: diff
                });
            }
        });
        return itemList;
    });

    if (prevPrice !== null && getData.length !== 0) {
        const result = getData.filter(itemA => {
            return !prevPrice.some(itemB => itemA.name === itemB.name);
        });

        if (result.length !== 0) {
            const output = ejs.render(HTML_TEMPLATE, {allData: result});
            goMail(output);
        } else {
            console.log("No New Items are on Sale");
        }
    } else {
        const output = ejs.render(HTML_TEMPLATE, {allData: getData});
        goMail(output);
    }

    prevPrice = getData;

    await browser.close();

    // Reapeat getProductInfo every 12 hours
    const time = 1000 * 60 * 60 * 12
    setTimeout(getProductInfo, time);
};

getProductInfo();

// nodeMailer setting
const transporter = nodeMailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.nodeMailerUser,
        pass: process.env.nodeMailerPass
    }
});

function goMail(output) {
    const mailOptions = {
        from: process.env.mailFrom,
        to: process.env.mailTo,
        subject: "Amazon Sale Notification!!",
        html: output
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent :" + info.response);
        }
    });
}

// Mail template with ejs format
const HTML_TEMPLATE = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>NodeMailer Email Template</title>
        <style>
          .container {
            width: 100%;
            height: 100%;
            background-color: #f4f4f4;
          }
          .email {
            width: 80%;
            margin: 0 auto;
            background-color: #fff;
            padding: 20px;
          }
          .email-header {
            background-color: #333;
            color: #fff;
            padding: 20px;
            text-align: center;
          }
          .email-body {
            padding: 20px;
          }
          .email-footer {
            background-color: #333;
            color: #fff;
            padding: 20px;
            text-align: center;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="email">
            <div class="email-header">
              <h1>Your Item is onSale NOW!!</h1>
            </div>
            <div class="email-body">
              <% for (let i = 0; i < allData.length; i++) { %>
                <h3><%= allData[i].name %>: <%= allData[i].price %></h3>
                <p><%= allData[i].sale %> <%= allData[i].diff %></p>
              <% } %>
            </div>
            <div class="email-footer">
              <p>WebScraper</p>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;

  app.listen(port, () => {
    console.log(`Listening on ${port}`)
  });
