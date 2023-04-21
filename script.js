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
        default : 
            return 'Something went so so wrong!';
    }   

}
console.log(getComputerChoice());

// Write a function that plays a single round of RPS. (Should use two parameters: playerSelection and computerSelection) and 
// return a string that declares the winner. ( make the function's playerSelection case insensitive)
// Return the results of this function.

function playRound( playerSelection, computerSelection) {


}

const playerSelection = prompt("Choose your weapon: Rock, Paper or Scissors!", ' ').toLowerCase();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
