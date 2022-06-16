const computerChoices = [
    'Rock',
    'Paper',
    'Scissors',
]

function computerPlay() {
    return computerChoices[Math.floor(Math.random() * computerChoices.length)]
}

function playRound(playerSelection, computerSelection) {
    if (computerSelection === 'Rock' && playerSelection === 'rock') {
        console.log('The Machine chose ' + computerSelection)
        return console.warn('It\'s a draw!');
    } else if (computerSelection === 'Paper' && playerSelection === 'rock') {
        console.log('The Machine chose ' + computerSelection)
        return console.warn('You Lose! Paper beats Rock!');
    } else if (computerSelection === 'Scissors' && playerSelection === 'rock') {
        console.log('The Machine chose ' + computerSelection)
        return console.warn('You Won! Rock beats Scissors');
    } else if (computerSelection === 'Rock' && playerSelection === 'paper') {
        console.log('The Machine chose ' + computerSelection)
        return console.warn('You Won! Paper beats Rock!');
    } else if (computerSelection === 'Paper' && playerSelection === 'paper') {
        console.log('The Machine chose ' + computerSelection)
        return console.warn('It\'s a draw!');
    } else if (computerSelection === 'Scissors' && playerSelection === 'paper') {
        console.log('The Machine chose ' + computerSelection)
        return console.warn('You Lose! Scissors beats Paper!');
    }

    
}

const playerChoice = prompt('Choose a weapon (Rock, Paper or Scissors)', '');
const playerSelection = playerChoice.toLowerCase();
console.log(playerSelection);
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));