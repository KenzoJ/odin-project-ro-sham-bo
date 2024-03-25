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
    let won = 0;
    let lost = 0;
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            return "Tie";
        } else if (computerSelection === "scissors") {
            won++
            console.log(won);
            return "You Won!";     
        } else {
            lost++
            console.log(lost);
            return "You Lost!";
        }

    } else {
        return "unsure" };
    }
     


console.log(Round())