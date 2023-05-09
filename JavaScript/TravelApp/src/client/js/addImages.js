function addImages (allData, totalHits) {
    
    let photo_data = document.getElementById("photo_data");

    if (document.getElementById("model1")) {
        // let content_area1 = document.getElementById("model1");
        // let content_area2 = document.getElementById("model2");
        // let content_area3 = document.getElementById("model3");
        // let content_area4 = document.getElementById("model4");

        // content_area1.innerHTML = "";
        // content_area2.innerHTML = "";
        // content_area3.innerHTML = "";
        // content_area4.innerHTML = "";
        for (let i = 0; i < 4; i++) {
            photo_data.removeChild(photo_data.firstElementChild);
        };
        
        // photo_data.removeChild(photo_data.firstElementChild);
        // photo_data.removeChild(photo_data.firstElementChild);
        // photo_data.removeChild(photo_data.firstElementChild);

        // photo_data.removeChild(img_element2);
        // photo_data.removeChild(img_element3);
        // photo_data.removeChild(img_element4);
    };


    

    

    
    let img_element1 = document.createElement("div");
    let img_element2 = document.createElement("div");
    let img_element3 = document.createElement("div");
    let img_element4 = document.createElement("div");

    switch (true) {
        case totalHits>=4:
            img_element1.innerHTML = `<img src="${allData.image1}" id="model1" alt="picture1" width="300" height="300">`
            img_element2.innerHTML = `<img src="${allData.image2}" id="model2" alt="picture2" width="300" height="300">`
            img_element3.innerHTML = `<img src="${allData.image3}" id="model3" alt="picture3" width="300" height="300">`
            img_element4.innerHTML = `<img src="${allData.image4}" id="model4" alt="picture4" width="300" height="300">`
            // img_element1.src = allData.image1;
            // img_element2.src = allData.image2;
            // img_element3.src = allData.image3;
            // img_element4.src = allData.image4;
            // img_element1.alt = "picture1";
            // img_element2.alt = "picture2";
            // img_element3.alt = "picture3";
            // img_element4.alt = "picture4";
            // img_element1.width = 400;
            // img_element2.width = 400;
            // img_element3.width = 400;
            // img_element4.width = 400;
            // img_element1.height = 400;
            // img_element2.height = 400;
            // img_element3.height = 400;
            // img_element4.height = 400;
            photo_data.appendChild(img_element1);
            photo_data.appendChild(img_element2);
            photo_data.appendChild(img_element3);
            photo_data.appendChild(img_element4);
            break;

        case totalHits>=3:
            img_element1.src = allData.image1;
            img_element2.src = allData.image2;
            img_element3.src = allData.image3;
            img_element1.alt = "picture1";
            img_element2.alt = "picture2";
            img_element3.alt = "picture3";
            img_element1.width = 400;
            img_element2.width = 400;
            img_element3.width = 400;
            img_element1.height = 400;
            img_element2.height = 400;
            img_element3.height = 400;
            content_area1.appendChild(img_element1);
            content_area2.appendChild(img_element2);
            content_area3.appendChild(img_element3);

            break;
        
        case totalHits>=2:
            img_element1.src = allData.image1;
            img_element2.src = allData.image2;
            img_element1.alt = "picture1";
            img_element2.alt = "picture2";
            img_element1.width = 400;
            img_element2.width = 400;
            img_element1.height = 400;
            img_element2.height = 400;
            content_area1.appendChild(img_element1);
            content_area2.appendChild(img_element2);

            break;
        
        case totalHits>=1:
            img_element1.src = allData.image1;
            img_element1.alt = "picture1";
            img_element1.width = 400;
            img_element1.height = 400;
            content_area1.appendChild(img_element1);

            break;
        
        default:
            alert("No result!! Please Input the Valid City Name!!");
    }
}

export { addImages };
