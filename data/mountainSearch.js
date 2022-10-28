"use strict";

const mountainsField = document.getElementById("mountainsField");
const cardSection = document.getElementById("card-section");
const allMountains = document.getElementById("allMountains");

function loadAllMountains() {
    mountainsArray.forEach((mountain) => {
        buildMountainCard(cardSection, mountain)

    })
}

function loadMountains() {
    mountainsField.innerHTML = "";
    let option = new Option("Search For A Mountain", "");
    mountainsField.appendChild(option);

    mountainsArray.forEach((mountain) => {
        let option = new Option(mountain.name, mountain.name);
        mountainsField.appendChild(option)
    })
}


function loadMountainInfo() {
    let selectedValue = mountainsField.value;
    mountainsArray.forEach((mountain) => {
        if (selectedValue == mountain.name) {
            buildMountainCard(cardSection, mountain)
        }
    })

}


function buildMountainCard(section, mountain) {
    //created the card
    const div = document.createElement("div");
    div.className = "card mb-3";
    div.style = "width: 20rem;"
    //put inside the document 
    section.appendChild(div);
    //create the title
    let cardTitle = document.createElement("h3");
    cardTitle.className = "card-title text-center";
    cardTitle.innerText = mountain.name;

    let cardImage = document.createElement("img");
    cardImage.className = "card-img-top"
    cardImage.src = "images/" + mountain.img;
    cardImage.alt = mountain.name;
    // cardImage.style = "width: fluid;"

    //add the description
    let description = document.createElement("p");
    description.innerText = mountain.desc;
    //add the elevation
    let elevation = document.createElement("h6");
    elevation.innerText = `Mountain Elevation: ${mountain.elevation}`;

    let effort = document.createElement("h6");
    effort.innerText = `Hiking Difficulty: ${mountain.effort}`;

    // let sunRise = document.createElement("h6");
    // effort.innerText = `Sunrise: ${lat.find(sunrise)}`;

    // let sunSet = document.createElement("h6");
    // effort.innerText = `Hiking Difficulty: ${mountain.effort}`;

    let clearCardButton = document.createElement("button");
    clearCardButton.className = "btn-close";
    // clearCardButton.style = "text-end;"

    function clearCard() {
        section.removeChild(div)
    }

    clearCardButton.onclick = clearCard;

    const divBody = document.createElement("div");
    // divBody.className = "text-center";
    // divBody.style = "row row-col-4 ";
    div.appendChild(cardImage);
    div.appendChild(divBody);
    divBody.append(cardTitle, description, elevation, effort, clearCardButton);

}

function clearCards() {
    let cardSection = document.querySelector("#card-section");

    let cards = document.querySelectorAll("#card-section divBody");
    cards.forEach((card) => cardSection.removeChild(card));
}



window.onload = () => {
    allMountains.onclick = loadAllMountains;

    loadMountains();
    mountainsField.onchange = loadMountainInfo;

    const clearCardsButton = document.getElementById("clearCardsButton");
    clearCardsButton.onclick = clearCards;


}