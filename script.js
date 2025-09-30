let humanScore = 0
let computerScore = 0
let round = 1

const ROCK = "rock"
const PAPER = "paper"
const SCISSORS = "scissors"

const rules = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper"
}

const resultEl = document.querySelector(".result")
const outcomeEl = document.querySelector(".explanation")
const numbersEl = document.querySelector(".numbers")
const roundEl = document.querySelector(".Round")

function getComputerChoice() {
    let num = Math.random()

    if (num < 0.33) {
        return ROCK
    } else if (num < 0.66) {
        return PAPER
    } else {
        return SCISSORS
    }
}

function playRound(humanChoice) {
    let computerChoice = getComputerChoice()
    displayResults(humanChoice, computerChoice)

    if (round < 5) {
        round++
        roundEl.textContent = "Round " + round
    } else {
        endGame()
    }
}

function displayResults(hChoice, cChoice) {
    if (hChoice === cChoice) {
        resultEl.textContent = "Draw!"
        outcomeEl.textContent = ''
    } else if (rules[hChoice] === cChoice) {
        humanScore++
        resultEl.textContent = "You win!"
        outcomeEl.textContent = `${hChoice} beats ${cChoice}.`
    } else {
        computerScore++
        resultEl.textContent = "You lose!"
        outcomeEl.textContent = `${cChoice} beats ${hChoice}.`
    }

    numbersEl.textContent = `${humanScore} - ${computerScore}`
}

function endGame() {
    document.querySelectorAll(".button").forEach(button => {
        button.disabled = true
    })

    const outcome = document.querySelector(".final")

    if (humanScore > computerScore) {
        outcome.textContent = "You won the game!"
    } else if (computerScore > humanScore) {
        outcome.textContent = "You lost the game!"
    } else {
        outcome.textContent = "Draw game!"
    }
}

const parentContainer = document.querySelector('.buttons')
parentContainer.addEventListener('click', function(event) {
    const clickedButton = event.target.closest("button")
    if (!clickedButton) return // clicked outside a button
    playRound(clickedButton.id)
})