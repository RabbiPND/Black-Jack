let firstCard = 11
let secondCard = 9
let sum = firstCard + secondCard

let hasBlackJack = false
let isAlive = true
let message = ""

let messageEl = document.getElementById("message-el")
let cardsEl = document.querySelector("#cards-el")
let sumEl =document.getElementById("sum-el")


// console.log(sum)

function startGame () {
    console.log(renderGame())
}

function renderGame() {

    cardsEl.textContent = "Cards:" + " " + firstCard + " " + secondCard 
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
    console.log("Drawing a new card from the deck")
    let add = 8
    sum = firstCard + secondCard + add
    console.log(renderGame())

}