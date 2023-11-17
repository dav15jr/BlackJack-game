let player = {
    name: "Davis",
    chips: 369
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
let buttonEl = document.getElementById("btn-el")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber    
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    buttonEl.textContent = "NEW CARD";      //Added to reset button text, color & background
    buttonEl.style.color = "#016f32"
    buttonEl.style.background = "goldenrod"
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
        buttonEl.textContent = "You Won!";   //Added to change button text, color & background
        buttonEl.style.color = "purple"
        buttonEl.style.background = "white"

    } else {
        message = "You're out of the game!"
        isAlive = false
        cards = []
        sum = 0
        buttonEl.textContent = "Game over!";   //Added to change button text, color & background
        buttonEl.style.color = "black"
        buttonEl.style.background = "grey"

    }
    messageEl.textContent = message
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
}
