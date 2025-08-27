// import {data } from './src/data.js';

// console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[2]);

const spriteKeys = [
  "front_default",
  "back_default",
  "front_shiny",
  "back_shiny",
//   "front_female",
//   "back_female",
//   "front_shiny_female",
//   "back_shiny_female"
];
const cardsList = document.querySelector(".cards")
createAllCards()


function createAllCards() {
    for (const pokemon of data) {
        createOneCard(pokemon)
    }
}



function createOneCard(pokemon) {
    const cardLi = document.createElement("li")
    cardLi.className = "card"
    
    const cardTitle = document.createElement('h2')
    cardTitle.className = "card--title"
    cardTitle.innerText = pokemon.name

    const image = document.createElement('img')
    image.className = "card--img"
    image.width = 256;
    image.src = pokemon.sprites[spriteKeys[0]]
    image.setAttribute("image-count", 0)

    image.addEventListener('click', () => {
        let count = parseInt(image.getAttribute("image-count"), 10);
        count = (count + 1) % spriteKeys.length;
        image.src = pokemon.sprites[spriteKeys[count]]
        image.setAttribute("image-count", count)
    })

    const cardText = document.createElement("ul")
    cardText.className = "card--text"

    for (const stat of pokemon.stats){
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
