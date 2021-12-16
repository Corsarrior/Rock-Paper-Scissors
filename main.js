// Create function that generate the selection of the computer
function computerPlay(){
    //Create an array with the selection options
    const gameOption = ['rock', 'paper', 'scissor'];
    //Randomly choose between the options
    let computerSelection = gameOption[randomIntFromInterval(0, 2)];
    //Return the result in console
    console.log("computer selection: " + computerSelection);
    return computerSelection;

}

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

// function titleCase(str) {
//     return str.toLowerCase().split(' ').map(function(word) {
//       return word.replace(word[0], word[0].toUpperCase());
//     }).join(' ');
//   }
  
function playRound(playerSelection, computerSelection){
    // Function that receive the selection of the player and the computer to return
    // the winner of the round.

    //Make case insensitive playerSelection
    playerSelection = playerSelection.toLowerCase();
    console.log("Player Selection: ", playerSelection);

    // Evaluate if both values are equal
    if (playerSelection === computerSelection){
        return 0;
    }
     // Else, evaluate if the values are paper or scissor, scissor or stone, or paper and stone
        // Return in each case the winner selection after a evaluation
     else if ((playerSelection == "paper" || playerSelection == "scissor") && (computerSelection == "paper" || computerSelection == "scissor")){
       return (playerSelection == "scissor" ? 1 : 2);
    }
    else if ((playerSelection == "rock" || playerSelection == "scissor") && (computerSelection == "rock" || computerSelection == "scissor")){
        return (playerSelection == "rock" ? 1 : 2);
     }

     else if ((playerSelection == "paper" || playerSelection == "rock") && (computerSelection == "paper" || computerSelection == "rock")){
        return (playerSelection == "paper" ? 1 : 2);
     } 

     else{
        console.log("Error: No comparation found it, there is no winner")
        return null;
     }
   
}
 
function game(){

    let playerSelection;
    let playerScore = 0;
    let computerScore = 0;
    // 5 round to define the winner
    for (let i = 0; i < 5; i++){
        //promt to the player its selection
        playerSelection = prompt("What is your selection?: ");
        computerSelection = computerPlay();
        roundWinner = playRound(playerSelection, computerSelection);
        console.log("roundWinner: " + roundWinner)
        //Keep score of the winner
        //Show in console the winner of the round
        if (roundWinner == 1){
            playerScore++;
            console.log(`You Win! ${playerSelection} beats ${computerSelection}`)
        }
        else if(roundWinner == 2){
            computerScore++;
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)
        }
        else if (roundWinner == 0){
            console.log(`${playerSelection} is equal to ${computerSelection}`)
        }

        console.log("playerScore: " + playerScore + " computerScore: " + computerScore);
    }
    //Show in console the winner of the game
    console.log(playerScore > computerScore ? "Congratulations! You wins": 
        playerScore < computerScore ? "Sorry, you loose" : "Tie");
}

game();