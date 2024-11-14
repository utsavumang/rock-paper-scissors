// console.log("Hiyaa")

// function getComputerChoice() {
//     let val = Math.floor(Math.random()*3);
//     return val;
// }

// function getHumanChoice() {
//     let val = parseInt(prompt("Enter Your Choice: \n0. Rock\n1. Paper\n2. Scissors"));
//     return val;
// }

// let humanScore = 0;
// let computerScore = 0;

// let rounds = parseInt(prompt("Enter the Number of Rounds you wish to play: "));

// function playRound(humanChoice, computerChoice) {
    

//     if (computerChoice == 0 && humanChoice == 2){
//         computerScore++;
//         console.log("\nComputer won the Round")
//         return;
//     }

//     else if (humanChoice == 0 && computerChoice == 2){
//         humanScore++;
//         console.log("\nYou won the Round")
//         return;
//     }

//     else if (computerChoice > humanChoice) {
//         computerScore++;
//         console.log("\nComputer won the Round")
//         return;
//     }
//     else if (humanChoice > computerChoice){
//         humanScore++;
//         console.log("\nYou won the Round")
//         return;
//     }

//     else {
//         console.log("\nRound Tie")
//     }
// }

// function displayScores() {
//     console.log("\nComputer Score: " + computerScore+ "\nHuman Score: " + humanScore);
// }


// for (let i = 0; i < rounds; i++){
//     console.log("\nRound "+(i+1) + "\n")

//     let computerChoice = getComputerChoice();
//     let humanChoice = getHumanChoice();



//     console.log("\nYou Chose " + humanChoice);
//     console.log("\nComputer Chose " + computerChoice);
//     playRound(humanChoice, computerChoice);
//     displayScores();
// }

// if (computerScore > humanScore){
//     alert(":/ The Computer Won");
// }

// else if (computerScore == humanScore) {
//     alert("It is a Tie!");
// }


// else {
//     alert(":) You Won");
// }