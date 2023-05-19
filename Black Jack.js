let firstCard = 11
let secondCard = 11

let sum = firstCard + secondCard
console.log(sum)

if (sum < 21) {
    console.log("You are still in the game")
} else if (sum === 21) {
    console.log("You have won")
} else if (sum > 21) {
    console.log("You have lost")
}