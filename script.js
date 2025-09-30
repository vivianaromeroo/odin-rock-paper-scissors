let humanScore = 0
let computerScore = 0
let round = 1

const ROCK = "rock"
const PAPER = "paper"
const SCISSORS = "scissors"

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

    if (humanChoice == computerChoice) {
        console.log("Draw!")
    } else if (humanChoice == ROCK) {
        if (computerChoice == PAPER) {
            computerScore += 1
            console.log("You lose! Paper beats rock.")
        } else if (computerChoice == SCISSORS) {
            humanScore += 1
            console.log("You win! Rock beats scissors.")
        }
    } else if (humanChoice == PAPER) {
        if (computerChoice == ROCK) {
            humanScore += 1
            console.log("You win! Paper beats rock.")
        } else if (computerChoice == SCISSORS) {
            computerScore += 1
            console.log("You lose! Scissors beats paper.")
        }
    } else if (humanChoice == SCISSORS) {
        if (computerChoice == ROCK) {
            computerScore += 1
            console.log("You lose! Rock beats scissors.")
        } else if (computerChoice == PAPER) {
            humanScore += 1
            console.log("You win! Scissors beats paper.")
        }
    }
    console.log("Current Score: " + humanScore + " - " + computerScore)

    if (round < 5) {
        round++
    } else {
        document.querySelectorAll(".button").forEach(button => {
            button.disabled = true;
        })
        endGame()
    }
}

function endGame() {
    if (humanScore > computerScore) {
        console.log("You win the game!")
    } else if (computerScore > humanScore) {
        console.log("You lose the game!")
    } else {
        console.log("Draw game!")
    }
}

document.addEventListener("DOMContentLoaded", () => {
  const parentContainer = document.querySelector('.buttons');
    parentContainer.addEventListener('click', function(event) {
        const clickedButton = event.target.closest("button");
        if (!clickedButton) return; // clicked outside a button
        playRound(clickedButton.id);
    })
})