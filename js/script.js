// COMPUTERS CHOICE ARRAY
const computerChoices = [
    'Rock',
    'Paper',
    'Scissors'
]

// WIN LOSE MESSAGES
let win = 'You Won! ';
let lose = 'You Lose! ';
let tie = 'It\'s a draw! ';

// SCORES
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;


// FUNCTION TO DETERMINE CHOICE FROM ARRAY
function computerPlay() {
    return computerChoices[Math.floor(Math.random() * computerChoices.length)]
}

// FUNCTION TO DETERMINE WINNER BETWEEN COMPUTER AND HUMAN
function playRound(playerSelection, computerSelection) {
    if (computerSelection === 'Rock' && playerSelection === 'rock' || computerSelection === 'Paper' && playerSelection === 'paper' ||
        computerSelection === 'Scissors' && playerSelection === 'scissors') {
        console.log('The Machine chose ' + computerSelection);
        return console.warn(tie);
    } else if (computerSelection === 'Rock' && playerSelection === 'scissors' || computerSelection === 'Paper' && playerSelection === 'rock' ||
        computerSelection === 'Scissors' && playerSelection === 'paper') {
        console.log('The Machine chose ' + computerSelection);
        return console.warn(lose);
    } else if (computerSelection === 'Rock' && playerSelection === 'paper' || computerSelection === 'Paper' && playerSelection === 'scissors' ||
        computerSelection === 'Scissors' && playerSelection === 'rock') {
        console.log('The Machine chose ' + computerSelection)
        return console.warn(win);
    } else {
        'You need to select either Rock, Paper or Scissors!'
    }

}

// VARIABLES TO START GAME
let playerChoice = prompt('Choose a weapon (Rock, Paper or Scissors)', '');
let playerSelection = playerChoice.toLowerCase();
console.log(playerSelection);
let computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

//FUNCTION TO RUN GAME AND LOOP ROUNDS UNTIL WINNER
function game() { 
    for (let i = 0; i < 5; i++) {
        playerChoice = prompt('Choose a weapon (Rock, Paper or Scissors)', '');
        const computerChoices = [
            'Rock',
            'Paper',
            'Scissors'
        ];
        computerPlay = computerChoices[Math.floor(Math.random() * computerChoices.length)];

        console.log(playerSelection);
        console.log(playRound(playerSelection, computerSelection));

        // even though it loops 5 times now. it doesnt matter what i enter after round 1
        // it still logs as my first rounds choice. and also the computers choice still remains the same
        // remember the if statement. find out if it should be nested in this one or?
        // if (computer = win) { computerscore++ }
        // else if (player = win) {playerscore++ }
        // else {tiescore++ }
    }
}

game();