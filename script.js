let humanScore = 0
let computerScore = 0
let options = ["rock", "paper", "scissors"]

function getComputerChoice() {
    let num = Math.random()

    if (num < 0.33) {
        return options[0]
    } else if (num < 0.66) {
        return options[1]
    } else if (num < 0.99) {
        return options[2]
    } else {
        console.log("rerolling...")
        return getComputerChoice()
    }
}

function getHumanChoice() {
    let answer = prompt("Enter rock, paper, or scissors: ").toLowerCase()

    if (answer == "rock") {
        return options[0]
    } else if (answer == "paper") {
        return options[1]
    } else if (answer == "scissors") {
        return options[2]
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log("Draw!")
    } else if (humanChoice == options[0]) {
        if (computerChoice == options[1]) {
            computerScore += 1
            console.log("You lose! Paper beats rock.")
        } else if (computerChoice == options[2]) {
            humanScore += 1
            console.log("You win! Rock beats scissors.")
        }
    } else if (humanChoice == options[1]) {
        if (computerChoice == options[0]) {
            humanScore += 1
            console.log("You win! Paper beats rock.")
        } else if (computerChoice == options[2]) {
            computerScore += 1
            console.log("You lose! Scissors beats paper.")
        }
    } else if (humanChoice == options[2]) {
        if (computerChoice == options[0]) {
            computerScore += 1
            console.log("You lose! Rock beats scissors.")
        } else if (computerChoice == options[1]) {
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