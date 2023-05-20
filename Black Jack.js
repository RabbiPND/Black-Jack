let firstCard = 11
let secondCard = 9

let hasBlackJack = false
let isAlive = true
let message = ""

let sum = firstCard + secondCard
console.log(sum)

if (sum <= 20) {
    message = ("Do you want to draw a new card?")
} else if (sum === 21) {
    message = ("Wohoo! You have got Blackjack!")
    hasBlackJack = true
} else {
    message = ("You are out of the game")
    isAlive = false
}

// Cash-Out:
// console.log(hasBlackJack)
// console.log(isAlive)

console.log(message)