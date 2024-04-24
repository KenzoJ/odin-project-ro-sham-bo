let playerScore = 0
let computerScore = 0
let currentRound = 0
let playerCounter = document.querySelector("#player")
let computerCounter = document.querySelector("#computer")
let currentComputerChoice = document.querySelector("#computer-choice-round")


const btn = document.querySelectorAll(".buttons")
//button is clicked and gets the computer choice
//then uses Round to mark the score and update the standings
btn.forEach((button) =>{
    button.addEventListener("click", function(e) {
        let playerSelection = e.target.innerText
        console.log("Player choice: " + playerSelection)
        let computerSelection = getComputerChoice();
        console.log("Computer choice: " + computerSelection)
        Round(playerSelection, computerSelection)
    })})

function getComputerChoice() {
    let computerHand = Math.floor(Math.random() * 3);
    switch (computerHand) {
        case 0:
            currentComputerChoice.innerText = "Rock"
            return "rock";
        case 1:
            currentComputerChoice.innerText = "Scissors"
            return "scissors"
        case 2: 
            currentComputerChoice.innerText = "Paper"
            return "paper"
    }
}

//checks the winner and updates the standings
function Round(playerSelection, computerSelection) {
    currentRound++
    if (currentRound === 3) {
        checkWinner()
    }
        document.querySelector("#current-rounds").innerHTML = currentRound
        if (playerSelection === "Rock") {
            if (computerSelection === "rock") {
                tie();
            } else if (computerSelection === "scissors") {
                lost();    
            } else {
            won();
            }
        } else if (playerSelection === "Paper") {
            if (computerSelection === "paper") {
                tie();
            } else if (computerSelection === "rock") {
                won();     
            } else {
                lost();
            }
        } else if (playerSelection === "Scissors") {
            if (computerSelection === "scissors") {
                tie();
            } else if (computerSelection === "paper") {
                won();     
            } else {
                lost();
            }
        
        }}

function won() {
    playerScore++
    document.querySelector("#player").innerHTML = playerScore
}

function lost() {
    computerScore++
    document.querySelector("#computer").innerHTML = computerScore
}

function tie() {
}

function checkWinner() {
    if (playerScore > computerScore) {
        console.log("you win!");
    } else if (playerScore < computerScore) {
        console.log("you lose!")
    } else {
        console.log("Tied!")
    } 
}


/* 



playGame() */