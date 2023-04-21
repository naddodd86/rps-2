// getComputerChoice function that will randomly return either 'Rock, Paper or Scissors'

function getComputerChoice()    {
    const randomChoice = Math.floor(Math.random() * 3 );
    
    switch (randomChoice) {
        case 0 :  
            return 'rock';
            break;
        case 1 : 
            return 'paper';
            break;
            return 'scissors';
            break;
        default:
            console.log('Invalid');
            break;

    }

}
console.log(getComputerChoice);

