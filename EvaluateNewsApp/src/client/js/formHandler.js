import { checkForUrl } from "./urlChecker";

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value;

    if (checkForUrl(formText)) {
        console.log("::: Form Submitted :::", formText);
        postData("http://localhost:8081/postData", formText)
        .then(function(res) {
            updateUI(res);
        });
    } else {
        alert("Invalid URL!! Please Enter Valid URL");
    };
}


const postData = async (url, formText) => {
    const response = await fetch(url, {
        method: "POST",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ Url: formText }),
    });

    try {
        const request = await response.json();
        return request;
    } catch(error) {
        console.log("ERROR", error);
    }
};

const updateUI = async(res) => {

    const model = document.getElementById("model")
    const agreement = document.getElementById("agreement")
    const cofidence = document.getElementById("confidence")
    const irony = document.getElementById("irony")
    const scoreTag = document.getElementById("score_tag")

    if (Number(res.status.code) == 0) {
        model.innerHTML = `Model: ${res.model}`;
        agreement.innerHTML = `Agreement: ${res.agreement}`;
        cofidence.innerHTML = `Confidence: ${res.confidence}`;
        irony.innerHTML = `Irony: ${res.irony}`;

        if (res.score_tag == "P+") {
            scoreTag.innerText = "Score Tag: Strong Positive";
        } else if (res.score_tag == "P") {
            scoreTag.innerText = "Score Tag: Positive";
        } else if (res.score_tag == "NEU") {
            scoreTag.innerText = "Score Tag: Neutral";
        } else if (res.score_tag == "N") {
            scoreTag.innerText = "Score Tag: Negative";
        } else if (res.score_tag == "N+") {
            scoreTag.innerText = "Score Tag: Strong Negative";
        } else if (res.score_tag == "NONE") {
            scoreTag.innerText = "Score Tag: without Polarity";
        }

    } 
    else {
        alert(`Something went wrong!! Please go to 
        "https://www.meaningcloud.com/developer/documentation/error-codes" for more information.
        ERROR CODE: ${res.status.code}`);
    }

};  

export { handleSubmit, postData, updateUI };
