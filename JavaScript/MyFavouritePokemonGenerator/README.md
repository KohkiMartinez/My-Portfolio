# My Favourite Pokemon Generator  

----------------------------------------

[Software Name] My Favourite Pokemon Generator   
[System Requirement] Windows 10 or later  
[Version] 2.02  
[Last updated] 15/04/2024                                           

----------------------------------------

# Overview

This web app allows users to generate images of their favorite Pokemon!

![MyFavouritePokemonGenerator Image 1](images/MyFavouritePokemonGenerator01.png)

# URL
※ The web app is not supported on iOS Google Chrome Ver 121.0.6167.66 (Images cannot be saved). There are no issues with iOS Safari or any Android phones.  
https://portfolio-myfavourite-pokemongenerator.pages.dev/

# About this project
## What is 'My Favourite Pokemon Generator'
All Pokemon lovers can create images of their favorite Pokemon. It includes all Pokemon, up to Pokemon No. 1017. Users can also choose Mega Pokemon, G Max Pokemon, or Pokemon from different regions from the list. Shiny buttons are available, allowing users to change Pokemon into shiny looks just by pressing them. This web app is targeted at people in Japan. This is because they post a 'Pokemon resume' on X to introduce their favorite Pokemon to their followers. If you search #ポケモン履歴書 on X, you will see many people posting images of their favorite Pokemon.

## Why did you make it
There are other Pokemon image generators; however, I felt that none of them are user-friendly. For instance, users are required to select 18 favorite Pokemon, one for each Pokemon type. This might be easy for hardcore Pokemon fans but not for beginners. Another reason is that adding text to the image doesn't feel right. Saying 'My' favorite Pokemon sounds much better compared to 'your' favorite Pokemon. Including Mega, G-max, and Pokemon from different regions is what users wished for, so I've included them all in the dropdown list.
  
## Features
* Users can choose their number of favorite Pokemon.
  * Not all users have the same number of favorite Pokemon. Some of them have only 3, while some have 14. Anyone can create their image with their favorite Pokemon.

* Mega, g-max, and different region forms are all included.
  * Some of the mega pokemons, g-max pokemons and different region pokemons are in the "user's most favourite pokemon rankings". 

* Users can choose shiny Pokemon by pressing each 'Shiny button' in each box.
  * Some shiny Pokemon look cooler than their original looks, and it could be the user's most favorite Pokemon.

* Users can change pokemon image frame colour.  
  * When the user chooses 18 Pokemon from each Pokemon type, each frame color could become their each Pokemon type (fire type => red, orange, or yellow). Or if their 18 Pokemon are from the water type, its frame could be blue (By changing the top left 'color', users can choose the same color for all the image frames).

* Users can change phrase and its color.  
  * Emoji can be also included, and users can choose to not have any words too.
  
## What I struggled with
This app uses pokeAPI to fetch data. However, pokeAPI only supports English. Therefore, I had to figure out how to translate Japanese into English. To overcome this problem, I decided to use a JSON file. Although I scraped Pokemon data from other websites, not all the data I wanted was included. So, I had to manually input the remaining data, making it the longest and most challenging aspect of this project.

Another hurdle in this project is marketing. Even though I created an account on X and introduced my web app to followers, none of them have used the service yet. It's only been three months since I started managing X, so I plan to keep promoting this web app to a broader audience through tweets. According to Cloudflare web analysis, an average of 10 people access this web app per day.

## Future Update
1. let users to choose its background image.  
The default background image is from Pokemon SV; however, there are people playing other Pokemon series such as 'Pokemon X Y', 'Pokemon Diamond Pearl,' etc. So, I want to add more Pokemon background images or let users upload their images as a background image in future updates.

1. Add a Pokemon icon in the box after users choose their Pokemon.  
This way, users can easily see whether they have chosen a Pokemon or not. Currently, the color of the box changes from pink to green after users choose their Pokemon.

1. Add other versions of pokemon Images.  
Currently, users can only choose official Pokemon Images. As I mentioned, there are people playing old Pokemon series, and I want to add other versions of Pokemon images for those players.

1. I want add blogs, articles, and news.  
I want many Pokemon fans to visit this web app. Instead of just creating their Pokemon image, I want them to visit my web app consistently. To achieve this, I need to write blogs about Pokemon.


# Frameworks, Skills, Libraries
## Dependencies
    "@fortawesome/fontawesome-svg-core": "^6.5.1",
    "@fortawesome/free-solid-svg-icons": "^6.5.1",
    "@fortawesome/react-fontawesome": "^0.2.0",
    "dom-to-image": "^2.6.0",
    "html2canvas": "^1.4.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.20.0"
    "typescript": "^5.4.4"
## Dev Dependencies
    "@types/react": "^18.2.37",
    "@types/react-dom": "^18.2.15",
    "@vitejs/plugin-react": "^4.2.0",
    "eslint": "^8.53.0",
    "eslint-plugin-react": "^7.33.2",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.4",
    "vite": "^5.0.0"

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
