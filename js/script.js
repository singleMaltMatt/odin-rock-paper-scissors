const computerChoices = [
    'Rock',
    'Paper',
    'Scissors',
]

let win = 'You Won! ';
let lose = 'You Lose! ';
let tie = 'It\'s a draw! ';


function computerPlay() {
    return computerChoices[Math.floor(Math.random() * computerChoices.length)]
}

function playRound(playerSelection, computerSelection) {
    if (computerSelection === 'Rock' && playerSelection === 'rock') {
        console.log('The Machine chose ' + computerSelection)
        return console.warn(tie);
    } else if (computerSelection === 'Paper' && playerSelection === 'rock') {
        console.log('The Machine chose ' + computerSelection)
        return console.warn(lose + 'Paper beats Rock!');
    } else if (computerSelection === 'Scissors' && playerSelection === 'rock') {
        console.log('The Machine chose ' + computerSelection)
        return console.warn( win + 'Rock beats Scissors');
    } else if (computerSelection === 'Rock' && playerSelection === 'paper') {
        console.log('The Machine chose ' + computerSelection)
        return console.warn( win + 'Paper beats Rock!');
    } else if (computerSelection === 'Paper' && playerSelection === 'paper') {
        console.log('The Machine chose ' + computerSelection)
        return console.warn(tie);
    } else if (computerSelection === 'Scissors' && playerSelection === 'paper') {
        console.log('The Machine chose ' + computerSelection)
        return console.warn(lose + 'Scissors beats Paper!');
    } else if (computerSelection === 'Rock' && playerSelection === 'scissors') {
        console.log('The Machine chose ' + computerSelection)
        return console.warn(lose + 'Rock beats Scissors!');
    } else if (computerSelection === 'Paper' && playerSelection === 'scissors') {
        console.log('The Machine chose ' + computerSelection)
        return console.warn( win + 'Scissors beats Paper');
    } else if (computerSelection === 'Scissors' && playerSelection === 'scissors') {
        console.log('The Machine chose ' + computerSelection)
        return console.warn(tie);
    } //else {
        //alert('You can only select Rock, Paper or Scissors!')
    //}
}

const playerChoice = prompt('Choose a weapon (Rock, Paper or Scissors)', '');
const playerSelection = playerChoice.toLowerCase();
console.log(playerSelection);
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

function game() { 
    for (let i = 0; i < 5; i++) {
        playRound();
    }
}

game();