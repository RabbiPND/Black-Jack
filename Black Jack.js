let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [
    firstCard,  // 0
    secondCard, // 1
] // Array challenge 1
let sum = firstCard + secondCard

let hasBlackJack = false
let isAlive = true
let message = ""

let messageEl = document.getElementById("message-el")
let cardsEl = document.querySelector("#cards-el")
let sumEl =document.getElementById("sum-el")

function getRandomCard (){
    if (firstCard, secondCard, add === 1) {
        return 11
    } else if (firstCard, secondCard, add >= 11) {
        return 10
    }
    return Math.floor((Math.random() * 13) + 1);
}



// console.log(sum)

function startGame () {
    console.log(renderGame())
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
    console.log("Drawing a new card from the deck")
    let add = getRandomCard()
    cards.push(add)
    sum = cards[0] + cards[1] + cards[2]
    console.log(renderGame())

}