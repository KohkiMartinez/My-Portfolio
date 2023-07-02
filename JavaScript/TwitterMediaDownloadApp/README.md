# Twitter Media Download App
----------------------------------------

[Software Name] Twitter Media Download App  
[System Requirement] Windows 10  
[Version] 1.00  
[Last updated] 29/06/2023

----------------------------------------
## About this project
This app let you download any videos on Twitter.
What you need to do is just copy the url of video that you want to download and paste it and hit Download.
There are top three most downloaded videos.
You can find top three videos [here](https://github.com/KohkiMartinez/My-Portfolio/tree/master/AWS_lambda/VideoUrlsToTwitterDownloadApp/ "AWS lambda function")
You can get them by just clicking the each button.
Open [Twitter Media Download App](https://twittermediadownloadapp.onrender.com) 

Because the App is deployed to render.com free plan which has low cpu and low ram, so it will take about 40 - 50 seconds to get your videos.
By deploying it to standard, download will finish in just 5 seconds!!

![Twitter Media Download App](images/2023-07-02_19h32_40.png)

## Skills
- node.js
- express
- MongoDB
- puppeteer
- [AWS lambda](https://github.com/KohkiMartinez/My-Portfolio/tree/master/AWS_lambda)
- render.com

## Dependencies

    "axios": "^1.4.0",
    "body-parser": "^1.20.2",
    "dotenv": "^16.2.0",
    "express": "^4.18.2",
    "mongoose": "^7.3.0",
    "puppeteer": "^20.7.2"