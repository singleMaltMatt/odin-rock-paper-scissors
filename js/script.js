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
    const computerChoices = [
        'Rock',
        'Paper',
        'Scissors'
    ];
    return computerChoices[Math.floor(Math.random() * computerChoices.length)]
}

// FUNCTION TO DETERMINE WINNER BETWEEN COMPUTER AND HUMAN
function playRound(playerSelection, computerSelection) {
    if (computerSelection === 'Rock' && playerSelection === 'rock' || computerSelection === 'Paper' && playerSelection === 'paper' ||
        computerSelection === 'Scissors' && playerSelection === 'scissors') {
        console.log('The Machine chose ' + computerSelection);
        tieScore++;
        return console.warn(tie);
    } else if (computerSelection === 'Rock' && playerSelection === 'scissors' || computerSelection === 'Paper' && playerSelection === 'rock' ||
        computerSelection === 'Scissors' && playerSelection === 'paper') {
        console.log('The Machine chose ' + computerSelection);
        computerScore++;
        return console.warn(lose);
    } else if (computerSelection === 'Rock' && playerSelection === 'paper' || computerSelection === 'Paper' && playerSelection === 'scissors' ||
        computerSelection === 'Scissors' && playerSelection === 'rock') {
        console.log('The Machine chose ' + computerSelection);
        playerScore++;
        return console.warn(win);
    } else {
        return 'You need to select either Rock, Paper or Scissors! (Refresh page, let\'s try again)'
    }

}

// VARIABLES TO START GAME
// let playerChoice = prompt('Choose a weapon (Rock, Paper or Scissors)', '');
// let playerSelection = playerChoice.toLowerCase();
// console.log(playerSelection);
// let computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));

//FUNCTION TO RUN GAME AND LOOP ROUNDS UNTIL WINNER
function game() {
    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt('Choose a weapon (Rock, Paper or Scissors)', '');
        let playerSelection = playerChoice.toLowerCase();
        console.log('You Chose ' + playerSelection);
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        console.log('SCORES: YOU: ' + playerScore + ' || '
            + ' MACHINE: ' + computerScore + ' || '
            + ' DRAWS: ' + tieScore);
    } if (playerScore > computerScore) {
        console.log('Congrats, you won this epic battle!')
    } else if (computerScore > playerScore) {
        console.log('The world is doomed, the Machine won! Better luck next life...')
    } else if (tieScore > computerScore && tieScore > playerScore) {
        console.log('No winner this time... it\'s a draw.')
    }
}

game();























        // even though it loops 5 times now. it doesnt matter what i enter after round 1
        // it still logs as my first rounds choice. and also the computers choice still remains the same
        // remember the if statement. find out if it should be nested in this one or? > most probably right. as the function needs to loop it.
        // if (computer = win) { computerscore++ }
        // else if (player = win) {playerscore++ }
        // else {tiescore++ }
