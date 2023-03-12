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
        return ("You Win! " + playerSelection + " beats " + computerSelection);
    } else if (outCome === 0) {
        return ("You Lose! " + playerSelection + " defeated by " + computerSelection);
    } else {
        return ("Draw ! " + playerSelection + " Drawed with " + computerSelection);
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
    let playerHealthPoint = 5;
    let computerHealthPoint = 5;
    let outCome;

    const playerHp = document.querySelector('#player-hp')
    const computerHp = document.querySelector('#computer-hp')

    const options = document.querySelectorAll('.option');
    const gameContent = document.querySelector('#game-content');

    const gameOver = document.createElement('h1');

    options.forEach(option => option.addEventListener('click', function(e) {

        let computerChoice = getComputerChoice();
        let playerChoice = e.target.value;

        outCome = playRound(playerChoice, computerChoice);
        let message = printMessage(outCome, playerChoice, computerChoice);

        if (outCome === 1) {
            computerHealthPoint--;
            computerHp.textContent = "Computer HP: " + computerHealthPoint;
        } else if (outCome === 0) {
            playerHealthPoint--;
            playerHp.textContent = "Your HP: " + playerHealthPoint;
        }
        const result = document.createElement('div');
        result.classList.add('result');
        result.textContent = message;
        gameContent.appendChild(result);

        if (computerHealthPoint === 0) {
            gameOver.textContent = "You Win! You have slain the dragon!" 
            gameContent.appendChild(gameOver);
            return;
        } else if (playerHealthPoint === 0) {
            gameOver.textContent = "You Lose! you have been slain!"
            gameContent.appendChild(gameOver);
            return;
        }

    }));
}

game();




