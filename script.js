// getComputerChoice function that will randomly return either 'Rock, Paper or Scissors'
        const playerSelection = prompt("Choose your weapon: Rock, Paper or Scissors!", '').toLowerCase();
        const computerSelection = getComputerChoice();


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

function playRound(playerSelection, computerSelection) {
         playerSelection = prompt("Choose your weapon: Rock, Paper or Scissors!", '').toLowerCase();
         computerSelection = getComputerChoice();

        let playerScore = 0;
        let computerScore = 0;
        let roundCount = 1;
        
    if    (playerSelection == computerSelection) {
            roundResult = 'It\'s a Draw!';
            playerScore += 0;
            computerScore += 0;
            roundCount += 0;
            
        } if (playerSelection == 'rock' && computerSelection == 'paper') {
            roundResult = `' You lose. ${computerSelection} beats ${playerSelection}!'`;
            computerScore += 1; 
            roundCount += 1;
        
        } if (playerSelection == 'rock' && computerSelection == 'scissors')  {
            roundResult = `' You win. ${playerSelection} beats ${computerSelection}!'`;
            playerScore += 1;
            roundCount += 1;

        } if (playerSelection == 'scissors' && computerSelection == 'rock')  {
            roundResult = `' You lose. ${computerSelection} beats ${playerSelection}!'`;
             computerScore += 1;
             roundCount += 1;


        } if (playerSelection == 'scissors' && computerSelection == 'paper')    {
            roundResult = `' You win. ${playerSelection} beats ${computerSelection}!'`;
            playerScore += 1;
            roundCount += 1;
            

        } if (playerSelection == 'paper' && computerSelection == 'rock') {
            roundResult = `' You win. ${playerSelection} beats ${computerSelection}!'`;
            playerScore += 1;
            roundCount += 1;
            

        } if (playerSelection == 'paper' && computerSelection == 'scissors') {
            roundResult = `' You lose. ${computerSelection} beats ${playerSelection}!'`;
            computerScore += 1;
            roundCount += 1;
            
    }
   console.log(playerScore);
   console.log(computerScore);
   console.log(roundCount); 
   return roundResult;
          
}

 // New function called game(). Use previous function inside of this one to play 5 round game that 
 // keeps score and reports a winner or loser at the end.



  
        




console.log(playRound(playerSelection, computerSelection));
//console.log(playerScore);
//console.log(computerScore);
//console.log(round);
//console.log(game());


