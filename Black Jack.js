let playerName = "";

while (playerName === "") {
  playerName = prompt("Please enter your name:");

  if (playerName === null) {
    break;
  }
}

if (playerName !== "") {
  console.log("Hello, " + playerName.charAt(0).toUpperCase() + playerName.slice(1) + "! Let's start the game.");
} else {
  console.log("No name entered. Game cannot start.");
}


let chipsCount = 100;
let cards = []
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

    
    chipsCount -= 10;

    if (chipsCount >= 10) {
        playerEl.textContent = playerName.charAt(0).toUpperCase() + playerName.slice(1) + " : R" + chipsCount;
        console.log("Starting a new game. Remaining chips: " + chipsCount);
      } else {
        console.log("Not enough chips to start a new game.");
        endGame()
      }    


    renderGame()
}



function renderGame() {

    console.log(cards)
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
        startGame()
    } else {
        message = "You are out of the game"
        isAlive = false
    }

    messageEl.textContent = message
    
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

const body = document.body
function endGame() {
  clearInterval(renderGame); // Stop the game loop
  document.getElementById('game-canvas').style.display = 'none'; // Hide the game

  const ranOut = document.createElement('div')
  ranOut.classList.add('ran-out')
  ranOut.textContent = "You ran out of coins, please insert coins to start";
  body.append(ranOut)

  const reStart = document.createElement('button')
  reStart.classList.add('re-start')
  reStart.textContent = "Re-Start"
  reStart.style.color =  "yellow"
  body.append(reStart)

  reStart.addEventListener('click', () => {
    let chipsCount = parseInt(prompt('Please insert coin(s) to restart the game'))
    
    if(!isNaN(chipsCount) && chipsCount >= 10) {
      console.log(`You entered ${chipsCount}`);
      ranOut.remove()
      reStart.remove()

      document.getElementById('game-canvas').style.display = 'block'
      // startGame()
      
     } 
     else {
        alert('Please insert 10 or more coins')
    }
  })
}


const start = document.querySelector('#start-game')
start.addEventListener('click', startGame)

const newC = document.querySelector('#new-card')
newC.addEventListener('click', newCard)