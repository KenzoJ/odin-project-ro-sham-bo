//begin with a function called getComputerChoice
    //Which will randomly return Rock, paper, or scissors
//Write another function that plays one round called Round()
    //takes two parameters
        //playerSelection (case )
        //computerSelection
    //returns "You Lose! _____ beats ____"
//write a new function called playGame()
//put the Round() function inside
    //limit the rounds to five
    //check to see who is the winner and loser
    //returns "You win" or "You lose"
    //

let playerScore = 0
let computerScore = 0

function getComputerChoice() {
    let computerHand = Math.floor(Math.random() * 3);
    switch (computerHand) {
        case 0:
            return "rock";
        case 1:
            return "scissors"
        case 2: 
            return "paper"
    }
}

function Round() {
    let playerSelection = prompt("what's your choice?").toLowerCase();
    let computerSelection = getComputerChoice();
    console.log("computer chose " + computerSelection)
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            return "Tie";
        } else if (computerSelection === "scissors") {
            winner("player");
            return "You Won!";     
        } else {
            winner("computer");
            return "You Lost!";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "paper") {
            return "Tie";
        } else if (computerSelection === "rock") {
            winner("player");
            return "You Won!";     
        } else {
            winner("computer");
            return "You Lost!";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "scissors") {
            return "Tie";
        } else if (computerSelection === "paper") {
            winner("player");
            return "You Won!";     
        } else {
            winner("computer");
            return "You Lost!";
        }
    
    } else {
        return "Try again" };
    }

function winner(entity) {
    if (entity === "player") {
        playerScore++;
    } else {
        computerScore++;
    }
    console.log(`current score:
    computer with ${computerScore} 
    player with ${playerScore} `);
}


function playGame() {
    console.log(Round())
    console.log(Round())
    console.log(Round())
    console.log(Round())
    console.log(Round())
    checkWinner()
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

playGame()