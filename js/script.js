const computerChoices = [
    'Rock',
    'Paper',
    'Scissors',
]


function computerPlay() {
    return computerChoices[Math.floor(Math.random() * computerChoices.length)]
}

function playRound(playerSelection, computerSelection) {
    if (computerSelection === 'Paper' && playerSelection === 'rock') {
        return 'You Lose! Paper beats Rock!'
    } else if (computerSelection === 'Scissors' && playerSelection === 'rock') { 
        return 'You Won! good job'
    } else if (computerSelection === 'Rock' && playerSelection === 'rock') {
        return 'It\'s a draw!'
    }
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));