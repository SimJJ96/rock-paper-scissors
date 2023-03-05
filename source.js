// Randomly select from 3 string
const CHOICE = ['Rock', 'Paper', 'Scissor'];

function getComputerChoice() {
    return CHOICE[Math.floor(Math.random() * (3-0))+0];
}
function roundOutcome(playerSelection, computerSelection) {
    let outCome = 2;
    // Winning Condition
    if ((playerSelection === 'rock' && computerSelection === 'scissor') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissor' && computerSelection === 'paper')) {
        outCome = 1;
    // Lose
    } else if ((playerSelection === 'rock' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'scissor') ||
        (playerSelection === 'scissor' && computerSelection === 'rock')) {
        outCome = 0;
    }
    return outCome;
}

function printMessage(outCome, playerSelection, computerSelection) {
    if (outCome === 1) {
        console.log("You Win! " + playerSelection + " beats " + computerSelection);
    } else if (outCome === 0) {
        console.log("You Lose! " + playerSelection + " defeated by " + computerSelection);
    } else {
        console.log("Draw ! " + playerSelection + " Drawed with " + computerSelection);
    }
    return;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    const outCome = roundOutcome(playerSelection, computerSelection);
    printMessage(outCome, playerSelection, computerSelection);
    return outCome;
}

function getPlayerChoice() {
    return prompt("Please choose a type: rock, paper or scissor");
}

function game() {
    let playerWinCount = 0;
    let computerWinCount = 0;
    let outCome;

    for (let i=0; i<5; i++) {
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        outCome = playRound(playerSelection, computerSelection);
        if (outCome === 1) {
            playerWinCount++;
        } else if (outCome === 0) {
            computerWinCount++;
        }
    }

    if (playerWinCount > computerWinCount) {
        return "Player Wins!";
    } else if (computerWinCount > playerWinCount) {
        return "Computer Wins!";
    } else {
        return "Draw!"
    }
}
