# Evaluate News App Project

## About this project

This project is to build a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. It is a great experice to learn how to use webpack and plugins, loaders. Also understanding of dev/prod codes, and the merits/demerits of them.


## How to Use the App

You need [node](https://nodejs.org/en/download/ "Node.js download page") to run this app.

If you have node installed in you local machine, 
run ```npm run install``` to install all the packages you need to run this app.

__To run this app in development mode:__

Open two terminals(termina A and terminal B).

Run ```npm run start``` in terminal A,

then run ```npm run build-dev``` in terminal B.

__To run this app in production mode:__

Run ```npm run build-prod``` in terminal.
(You will get a dist folder in your repository)

Open http://localhost:8081 

## Dependencies

    "body-parser": "^1.20.2",
    "cors": "^2.8.5",
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "node-fetch": "^2.6.9",
    "workbox-webpack-plugin": "^6.5.4"

## Dev Dependencies

    "@babel/core": "^7.21.0",
    "@babel/preset-env": "^7.20.2",
    "babel-loader": "^8.3.0",
    "clean-webpack-plugin": "^4.0.0",
    "css-loader": "^6.7.3",
    "html-webpack-plugin": "^5.5.0",
    "jest": "^29.5.0",
    "mini-css-extract-plugin": "^2.7.3",
    "node-sass": "^8.0.0",
    "optimize-css-assets-webpack-plugin": "^6.0.1",
    "sass-loader": "^13.2.0",
    "style-loader": "^3.3.1",
    "terser-webpack-plugin": "^5.3.7",
    "webpack": "^5.76.0",
    "webpack-cli": "^5.0.1",
    "webpack-dev-server": "^4.11.1"
    