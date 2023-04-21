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
        

function playRound(playerSelection, computerSelection) {
        
         

    if    (playerSelection == computerSelection)
            roundResult = 'It\'s a Draw!';
            
    
     else if (playerSelection == 'rock' && computerSelection == 'paper') {
            roundResult = `' You lose. ${computerSelection} beats ${playerSelection}!'`;
            computerScore++;

            
            
    } else if (playerSelection == 'rock' && computerSelection == 'scissors')  {
            roundResult = `' You win. ${playerSelection} beats ${computerSelection}!'`;
            playerScore++;
            

    } else if (playerSelection == 'scissors' && computerSelection == 'rock')  {
            roundResult = `' You lose. ${computerSelection} beats ${playerSelection}!'`;
             computerScore++;

    } else if (playerSelection == 'scissors' && computerSelection == 'paper')    {
            roundResult = `' You win. ${playerSelection} beats ${computerSelection}!'`;
            playerScore++;
            

    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
            roundResult = `' You win. ${playerSelection} beats ${computerSelection}!'`;
            playerScore++;
            

    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
            roundResult = `' You lose. ${computerSelection} beats ${playerSelection}!'`;
            computerScore++;
            
    }
    return roundResult;
       
   
    
}


 // New function called game(). Use previous function inside of this one to play 5 round game that 
 // keeps score and reports a winner or loser at the end.

 function game()        {
        let roundCount = parseInt(0);
        playRound(playerSelection, computerSelection);
        roundCount++; 
        console.log(roundCount);
        console.log(roundResult);
          
        playRound(playerSelection, computerSelection);
        roundCount++;
        console.log(roundCount); 
        console.log(roundResult); 
        playRound(playerSelection, computerSelection);
        roundCount++; 
        console.log(roundCount);
        console.log(roundResult); 
        playRound(playerSelection, computerSelection);
        roundCount++; 
        console.log(roundCount);
        console.log(roundResult); 
        playRound(playerSelection, computerSelection);
        roundCount++;  
        console.log(roundCount);
        console.log(roundResult);
        

        
           

 }

        const playerSelection = prompt("Choose your weapon: Rock, Paper or Scissors!", '').toLowerCase();
        const computerSelection = getComputerChoice();  
        let playerScore = parseInt(0);
        let computerScore = parseInt(0);



console.log(playRound(playerSelection, computerSelection));
console.log(playerScore);
console.log(computerScore);
//console.log(round);
console.log(game());

