let humanScore = 0
let computerScore = 0

const ROCK = "rock"
const PAPER = "paper"
const SCISSORS = "scissors"

function getComputerChoice() {
    let num = Math.random()

    if (num < 0.33) {
        return ROCK
    } else if (num < 0.66) {
        return PAPER
    } else if (num < 0.99) {
        return SCISSORS
    } else {
        console.log("rerolling...")
        return getComputerChoice()
    }
}

function getHumanChoice() {
    let answer = prompt("Enter rock, paper, or scissors: ").toLowerCase()

    if (answer == ROCK) {
        return ROCK
    } else if (answer == PAPER) {
        return PAPER
    } else if (answer == SCISSORS) {
        return SCISSORS
    }
}

function playRound(humanChoice, computerChoice) {
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
}

function playGame() {
    for (let i = 0; i <= 4; i++) {
        let humanSelection = getHumanChoice()
        let computerSelection = getComputerChoice()
        console.log("Round " + (i + 1))
        playRound(humanSelection, computerSelection)
    }

    if (humanScore > computerScore) {
        console.log("You win the game!")
    } else if (computerScore > humanScore) {
        console.log("You lose the game!")
    } else {
        console.log("Draw game!")
    }
}

playGame()