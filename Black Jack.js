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
const body = document.body

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
        hasBlackJack = true
        document.getElementById('game-canvas').style.display = 'none'
        const winMessage = document.createElement('div')
        winMessage.classList.add('win-message')
        winMessage.textContent = "Wohoo! You have got Blackjack!"
        winMessage.style.color = "goldenrod"
        winMessage.style.border = "2px solid white"
        winMessage.style.padding = "20px"
        winMessage.style.backgroundColor = "white"
        winMessage.style.fontWeight = "bold"
        body.append(winMessage)

        const playAgain = document.createElement('button')
        playAgain.classList.add('play-again')
        playAgain.textContent = "Play Again"
        playAgain.style.color ="yellow"
        body.append(playAgain)

        playAgain.addEventListener('click', () => {
          document.querySelector('.play-again').addEventListener('click', function(){
            window.location.reload();
            return false; 
        })
      })
        
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

function endGame() {
  clearInterval(renderGame); // Stop the game loop
  document.getElementById('game-canvas').style.display = 'none'; // Hide the game

  const ranOut = document.createElement('div')
  ranOut.classList.add('ran-out')
  ranOut.textContent = "Oops! You lost this game of Black Jack. Better luck next time!";
  ranOut.style.color = "goldenrod"
  ranOut.style.border = "2px solid white"
  ranOut.style.padding = "20px"
  ranOut.style.backgroundColor = "white"
  ranOut.style.fontWeight = "bold"
  body.append(ranOut)

  const reStart = document.createElement('button')
  reStart.classList.add('re-start')
  reStart.textContent = "Re-Start"
  reStart.style.color =  "yellow"
  body.append(reStart)

  reStart.addEventListener('click', () => {
    document.querySelector('.re-start').addEventListener('click', function(){
      window.location.reload();
      return false;
    })
  })
}


const start = document.querySelector('#start-game')
start.addEventListener('click', startGame)

const newC = document.querySelector('#new-card')
newC.addEventListener('click', newCard)