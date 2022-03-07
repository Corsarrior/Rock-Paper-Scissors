# The Odin Project - Rock Paper and Scissors

This is a solution to the [Rock Paper and Scissors project](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/revisiting-rock-paper-scissors).

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### Screenshot

![Screenshot](/images/rock-paper-and-scissors.gif)

### Links

- [Solution URL](https://github.com/Corsarrior/Rock-Paper-Scissors)
- [Live Site URL](https://rock-paper-scissors-sable-omega.vercel.app/)

## My process

### Built with

- CSS variables
- Flexbox
- Vainilla JavaScript

### What I learned

I had the opportunity to practice the basic JavaScript syntax, such as:
 
 - Function declarations
 - Logical operators
 - Terneary operator
 - Conditionals

I also used for the first time event listeners with the buttons in the game. I had to iterate over each one after a 
querySelectorAll to add the listener and define the logic of functions that will evaluate the player's selection with the computer's selection. In that last one, I learned to pick a random element from an array of strings.

```js
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
```
```js
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
```
## Author

- Twitter - [@JuanQB94](https://www.twitter.com/yourusername)

# Rock-Paper-Scissors


