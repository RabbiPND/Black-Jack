let player = {
    name : "Rabbi",
    chips : 100 
}

let cards = [] // Array challenge 1
let sum = 0

let hasBlackJack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el")
let cardsEl = document.querySelector("#cards-el")
let sumEl =document.getElementById("sum-el")
let playerEl = document.querySelector("#player-el")

console.log(cards)

function getRandomCard (){
    let randomNumber = Math.floor((Math.random() * 13) + 1);
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}



// console.log(sum)

function startGame () {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {

    console.log(cards) // Array challenge 2
    cardsEl.textContent = "Cards:" + " "
    for (let i = 0 ; i < cards.length ; i ++ ) {
    cardsEl.textContent += cards[i] + " "  
    }
    
    sumEl.textContent = "Sum:" + " " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You have got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You are out of the game"
        isAlive = false
    }

    messageEl.textContent = message
    
    // Cash-Out:
    // console.log(hasBlackJack)
    // console.log(isAlive)
    
    // console.log(message)
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        console.log("Drawing a new card from the deck")
        let add = getRandomCard()
        cards.push(add)
        sum += add
        renderGame()
    }
}

playerEl.textContent = player.name + ": R" + player.chips

// let playerEl = document.querySelector("#player-el")