let playerScore = 0;

let computerScore = 0;


const choices = document.querySelectorAll('.choices button');

const computerChoiceElement = document.getElementById('computer-choice');

const winnerElement = document.getElementById('winner');

const scoreElement = document.getElementById('score');

const resetButton = document.getElementById('reset');


choices.forEach((choice) => {

    choice.addEventListener('click', (e) => {

        const playerChoice = e.target.id;

        const computerChoice = getComputerChoice();

        computerChoiceElement.textContent = `Computer's choice: ${computerChoice}`;

        const winner = determineWinner(playerChoice, computerChoice);

        winnerElement.textContent = `Winner: ${winner}`;

        updateScore(winner);

    });

});


resetButton.addEventListener('click', () => {

    playerScore = 0;

    computerScore = 0;

    scoreElement.textContent = `Score: Player - 0, Computer - 0`;

    winnerElement.textContent = `Winner: `;

    computerChoiceElement.textContent = `Computer's choice: `;

});


function getComputerChoice() {

    const choices = ['rock', 'paper', 'scissors'];

    return choices[Math.floor(Math.random() * choices.length)];

}


function determineWinner(playerChoice, computerChoice) {

    if (playerChoice === computerChoice) {

        return 'Tie';

    } else if ((playerChoice === 'rock' && computerChoice === 'scissors') ||

               (playerChoice === 'paper' && computerChoice === 'rock') ||

               (playerChoice === 'scissors' && computerChoice === 'paper')) {

        return 'Player';

    } else {

        return 'Computer';

    }

}


function updateScore(winner) {

    if (winner === 'Player') {

        playerScore++;

    } else if (winner === 'Computer') {

        computerScore++;

    }

    scoreElement.textContent = `Score: Player - ${playerScore}, Computer - ${computerScore}`;

}