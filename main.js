
// Create function that generate the selection of the computer
function computerPlay() {
    //Create an array with the selection options
    const gameOption = ['rock', 'paper', 'scissor'];
    //Randomly choose between the options
    let computerSelection = gameOption[randomIntFromInterval(0, 2)];
    //Return the result in console
    let buttonSelection = document.querySelector(`#${computerSelection}`);
    return computerSelection;

}

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function playRound(playerSelection, computerSelection) {
    // Function that receive the selection of the player and the computer to return
    // the winner of the round.

    //Make case insensitive playerSelection
    console.log("Player Selection: ", playerSelection);

    // Evaluate if both values are equal
    if (playerSelection === computerSelection) {
        return 0;
    }
    // Else, evaluate if the values are paper or scissor, scissor or stone, or paper and stone
    // Return in each case the winner selection after a evaluation
    else if ((playerSelection == "paper" || playerSelection == "scissor") && (computerSelection == "paper" || computerSelection == "scissor")) {
        return (playerSelection == "scissor" ? 1 : 2);
    }
    else if ((playerSelection == "rock" || playerSelection == "scissor") && (computerSelection == "rock" || computerSelection == "scissor")) {
        return (playerSelection == "rock" ? 1 : 2);
    }

    else if ((playerSelection == "paper" || playerSelection == "rock") && (computerSelection == "paper" || computerSelection == "rock")) {
        return (playerSelection == "paper" ? 1 : 2);
    }

    else {
        ;
        return 0;
    }

}

function game(playerSelection) {

    //promt to the player its selection
    let computerSelection = computerPlay();
    let roundWinner = playRound(playerSelection, computerSelection);
    console.log("round winner: " + roundWinner);
    firstText.textContent = (roundWinner == 1) ? ("round winner: player") : (roundWinner == 2) ? ("round winner: computer") : ("round winner: nobody");
    //Keep score of the winner
    //Show in console the winner of the round
    if (roundWinner == 1) {
        playerScore++;
        textPlayerScore.textContent = playerScore.toString();
        secondText.textContent = (`${playerSelection} beats ${computerSelection}`);
    }
    else if (roundWinner == 2) {
        computerScore++;
        textComputerScore.textContent = computerScore.toString();
        secondText.textContent = (`${computerSelection} beats ${playerSelection}`);
    }
    else if (roundWinner == 0) {
        secondText.textContent = (`${playerSelection} is equal to ${computerSelection}`)
    }

}

let playerSelection;
let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('#buttons-player');
let firstText = document.querySelector('#first-text');
let secondText = document.querySelector('#second-text');
let textPlayerScore = document.querySelector('#playerScore');
let textComputerScore = document.querySelector('#computerScore');

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        if (playerScore < 5 && computerScore < 5) {
            playerSelection = e.target.value;
            game(playerSelection);
            console.log("player score: " + playerScore + " computer score: " + computerScore);
            if (playerScore == 5 || computerScore == 5) {
                //Show in console the winner of the game
                firstText.textContent = (playerScore > computerScore) ? "Congratulations! You wins" :
                    (playerScore < computerScore) ? "Sorry, you loose" : "Tie";

            }
        }

    })
});
