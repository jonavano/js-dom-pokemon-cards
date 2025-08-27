// import {data } from './src/data.js';

// console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);

const cardsList = document.querySelector(".cards")
createAllCards()


function createAllCards() {
    for (const pokemon of data) {
        createOneCard(pokemon)
    }
}
function createOneCard(pokemon) {
    // console.log("ran ");
    const cardLi = document.createElement("li")
    cardLi.className = "card"
    // console.log("ran 23");
    
    const cardTitle = document.createElement('h2')
    cardTitle.className = "card--title"
    cardTitle.innerText = pokemon.name

    const image = document.createElement('img')
    image.className = "card--img"
    image.width = "256"
    image.src = pokemon.sprites.front_default

    const cardText = document.createElement("ul")
    cardText.className = "card--text"

    for (const stat of pokemon.stats){
        // console.log(stat)
        // console.log(stat.base_stat)
        const cardStat = document.createElement("li")
        cardStat.innerText = (stat.stat.name.toUpperCase()) + ": " + stat.base_stat
        cardText.appendChild(cardStat)
    }

    const gameStat = document.createElement('li')
    gameStat.innerText += "GAMES: "

    for (const games of pokemon.game_indices) {
        gameStat.innerText += games.version.name + ", "
    
    }
    
    cardText.appendChild(gameStat)


    cardLi.appendChild(cardTitle);
    cardLi.appendChild(image)
    cardLi.appendChild(cardText)
    
    cardsList.appendChild(cardLi);


}
