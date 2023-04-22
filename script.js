// getComputerChoice function that will randomly return either 'Rock, Paper or Scissors'
        
function getComputerChoice()    {
    let randomChoice = Math.floor(Math.random() * 3 );
    
       switch(randomChoice)    {
        case 0 : 
            return 'rock';
            break;
        case 1 : 
            return 'paper';
            break;
        case 2 :
            return 'scissors';
        }   
}

let playerScore = 0;
let computerScore = 0;

function game() {
    while (playerScore < 3 && computerScore < 3)    {
        const playerSelection = prompt("Choose your weapon: Rock, Paper or Scissors!", '').toLowerCase();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }

    function playRound(playerSelection, computerSelection) {

        if (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
            computerScore += 0;
            playerScore += 0;
            return console.log('Invalid Selection, choose again.');

            } else if ( playerSelection == computerSelection) {
                computerScore += 0;
                playerScore += 0;
                return console.log('It\'s a draw!');
            } else if (playerSelection === 'rock' && computerSelection === 'scissors')  {
                ++playerScore;
                return console.log('You win! Rock beats Scissors.');
            } else if (playerSelection === 'rock' && computerSelection === 'paper')  {
                ++computerScore;
                return console.log('You lose! Paper beats Rock.');
            } else if (playerSelection === 'paper' && computerSelection === 'rock')  {
                ++computerScore;
                return console.log('You lose! Rock beats Paper.');            
            } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
                ++computerScore;
                return console.log('You lose! Scissors beat Paper.');
            } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
                ++playerScore;
                return console.log('You win! Scissors beats Paper');
            }
            
            
    }
}

        game();
        //console.log(winGame());
        console.log('Player Score: '+ playerScore);
        console.log('Computer Score: '+ computerScore);


