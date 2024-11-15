// 0. Rock
// 1. Paper
// 2. Scissors

function getComputerChoice() {
    let val = Math.floor(Math.random()*3);
    return val;
}


let humanScore = 0;
let computerScore = 0;

function chosezero() {
    playRound(0);
}

function choseone() {
    playRound(1);
}

function chosetwo() {
    playRound(2);
}

userScoreBox = document.querySelector('#user-score');
computerScoreBox = document.querySelector('#computer-score');

function displayScore() {


    userScoreBox.textContent = humanScore;
    computerScoreBox.textContent = computerScore;

    userChoiceBox.replaceWith(userChoiceBox);

}


function playRound(humanChoice) {
    
    let computerChoice = getComputerChoice();
    
    const choiceArr = ['Rock', 'Paper', 'Scissors']

    // Displaying the choices of user
    userChoiceBox = document.querySelector('#user-choice');
    userChoiceBox.textContent = 'You Chose: '+ choiceArr[humanChoice];
    
    roundBox = document.querySelector('.round-box');
    roundBox.prepend(userChoiceBox);

    // Displaying the choices of computer
    compChoiceBox = document.querySelector('#computer-choice');
    compChoiceBox.textContent = 'The Computer Chose: ' + choiceArr[computerChoice];
    
    roundBox = document.querySelector('.round-box');
    userChoiceBox.after(userChoiceBox);

    // Displaying Round Result
    roundResult = document.querySelector('#round-result');


    // Round Logic
    if (computerChoice == 0 && humanChoice == 2){
        computerScore++;
        roundResult.textContent = "\nComputer won the Round";
    }

    else if (humanChoice == 0 && computerChoice == 2){
        humanScore++;
        roundResult.textContent = "\nYou won the Round";
    }

    else if (computerChoice > humanChoice) {
        computerScore++;
        roundResult.textContent = "\nComputer won the Round";
        
    }
    else if (humanChoice > computerChoice){
        humanScore++;
        roundResult.textContent = "\nYou won the Round";
        
    }

    else {
        roundResult.textContent = "\nRound Tie";
    }

    compChoiceBox.after(roundResult);
    displayScore();


    gameResult = document.querySelector('#game-result');

    if (humanScore >=5 || computerScore >=5) {

        const rock = document.querySelector('#rock-btn');
        const choicePanel = rock.parentElement;
        choicePanel.removeChild(rock);
        choicePanel.removeChild(paper);
        choicePanel.removeChild(scissor);
        choicePanel.replaceWith(choicePanel);

    
    
        if (humanScore >= 5) {
            gameResult.textContent = 'You Won the Game';
            gameResult.classList.toggle("winner");
            userScoreBox.classList.toggle("winner");
            computerScoreBox.classList.toggle("loser");
        }
    
        else if (computerScore >= 5) {
            gameResult.textContent = 'You Lost the Game';
            gameResult.classList.toggle("loser");
            userScoreBox.classList.toggle("loser");
            computerScoreBox.classList.toggle("winner");
        }
    
        gameResult.replaceWith(gameResult);
    }


}



const rock = document.querySelector('#rock-btn');
rock.addEventListener("click", chosezero);


const paper = document.querySelector('#paper-btn');
paper.addEventListener("click", choseone);

const scissor = document.querySelector('#scissor-btn'); 
scissor.addEventListener("click", chosetwo);



