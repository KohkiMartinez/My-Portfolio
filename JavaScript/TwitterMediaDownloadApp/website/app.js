const download_botton = document.getElementById("download-button");
const noOne_button = document.getElementById("noOne");
const noTwo_botton = document.getElementById("noTwo");
const noThree_button = document.getElementById("noThree");

const buttons = document.getElementsByTagName("button");

download_botton.addEventListener("click", getVideo);
noOne_button.addEventListener("click", getNoOne);
noTwo_botton.addEventListener("click", getNoTwo);
noThree_button.addEventListener("click", getNoThree);

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

let today = year + month + day;

nowTime = Date.now();

// Button Functions
function disableButtons() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    }
}

function enableButtons() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = false;
    }
}

async function downloadVideo(url) {
    const response = await fetch(url, {
        method: "POST"
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error("Server Error")
        }
        return response.blob();
    })
    .then((blob) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "VID_" + `${today}` + "_" + `${nowTime}` + ".mp4";
        a.click();
        URL.revokeObjectURL(url);
    })
}

async function getVideo() {
    const inputElement = document.getElementById("url");
    const userInput = document.getElementById("url").value;
    const originalText = download_botton.innerText;
    
    try {
        if (!userInput.match(new RegExp(/(twitter).(com)/, "ig"))) {
            alert("Please Enter Twitter URL.");
            inputElement.value = "";
        }

        disableButtons();

        download_botton.innerText ="";
        download_botton.classList.add("loading");
        
        const response = await fetch("/download", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ url: userInput }),
        })
        .then((response) => {
            if(!response.ok) {
                throw new Error("Server Error");
            }
            return response.blob();
        })
        .then((blob) => {
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "VID_" + `${today}` + "_" + `${userInput}`.match(/twitter\.com\/([^/]+)/)[1] + ".mp4";
            a.click();
            URL.revokeObjectURL(url);
        })

        download_botton.classList.remove("loading");
        download_botton.innerText = originalText;
        enableButtons();

        inputElement.value = "";

    }catch(error) {
        console.error("Download Error", error);
        download_botton.classList.remove("loading");
        download_botton.innerText = originalText;
        enableButtons();

        inputElement.value = "";
        alert("エラー: " + error.message);
    };
};

async function getNoOne() {
    const originalText = noOne_button.innerText;

    try {
        disableButtons();

        noOne_button.innerText ="";
        noOne_button.classList.add("loading");
    
        await downloadVideo("/downloadNoOne")

        noOne_button.classList.remove("loading");
        noOne_button.innerText = originalText;
        enableButtons();

    }catch(error) {
        console.error("Download Error", error);
        noOne_button.classList.remove("loading");
        noOne_button.innerText = originalText;
        enableButtons();

        alert("エラー: " + error.message);
    };
};

async function getNoTwo() {
    const originalText = noTwo_botton.innerText;

    try {
        disableButtons();

        noTwo_botton.innerText ="";
        noTwo_botton.classList.add("loading");
    
        await downloadVideo("/downloadNoTwo")

        noTwo_botton.classList.remove("loading");
        noTwo_botton.innerText = originalText;
        enableButtons();

    }catch(error) {
        console.error("Download Error", error);
        noTwo_botton.classList.remove("loading");
        noTwo_botton.innerText = originalText;
        enableButtons();

        alert("エラー: " + error.message);
    };
};

async function getNoThree() {
    const originalText = noThree_button.innerText;

    try {
        disableButtons();

        noThree_button.innerText ="";
        noThree_button.classList.add("loading");
    
        await downloadVideo("/downloadNoThree")

        noThree_button.classList.remove("loading");
        noThree_button.innerText = originalText;
        enableButtons();

    }catch(error) {
        console.error("Download Error", error);
        noThree_button.classList.remove("loading");
        noThree_button.innerText = originalText;
        enableButtons();

        alert("エラー: " + error.message);
    };
};
