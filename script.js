// getComputerChoice function that will randomly return either 'Rock, Paper or Scissors'

function getComputerChoice()    {
    const randomChoice = Math.floor(Math.random() * 3 );
    
   
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
// Write a function that plays a single round of RPS. (Should use two parameters: playerSelection and computerSelection) and 

// Return the results of this function.

function playRound(playerSelection, computerSelection) {
     
    if    (playerSelection == computerSelection)
            roundResult = 'It\'s a Draw!';
    
     else if (playerSelection == 'rock' && computerSelection == 'paper') {
            roundResult = `' You lose. ${computerSelection} beats ${playerSelection}!'`;
    } else if (playerSelection == 'rock' && computerSelection == 'scissors')  {
            roundResult = `' You win. ${playerSelection} beats ${computerSelection}!'`;

    } else if (playerSelection == 'scissors' && computerSelection == 'rock')  {
            roundResult = `' You lose. ${computerSelection} beats ${playerSelection}!'`;
    } else if (playerSelection == 'scissors' && computerSelection == 'paper')    {
            roundResult = `' You win. ${playerSelection} beats ${computerSelection}!'`;

    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
            roundResult = `' You win. ${playerSelection} beats ${computerSelection}!'`;
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
            roundResult = `' You lose. ${computerSelection} beats ${playerSelection}!'`;
    }
    return roundResult;
}
 

const playerSelection = prompt("Choose your weapon: Rock, Paper or Scissors!", '').toLowerCase();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
