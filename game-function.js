/* This is the first iteration of the game. It will be played completely from the console. */
/* The first function will getComputerChoice and will return either "Rock", "Paper", or "Scissors".*/
console.log("Hello world!");

const choices = ["rock", "paper", "scissors"];

function computerSelection(choices) {

return choices[Math.floor(Math.random()*choices.length)];
}

console.log(computerSelection(choices));

/* Prompt user for their selection: rock, paper, or scissors */

let userSelection = prompt("Rock, paper, or scissors?"); 

console.log(userSelection); 

/* Create series of if/else functions that determine win/loss scenarios. */ 

const win = ["You win!"];
const tie = ["It's a tie!"];
const lose = ["You lose!"]; 

function gameResults() {
    if (userSelection == computerSelection) {
        return tie; 
    } else if (userSelection == "rock" && computerSelection == "paper") {
        return lose;
    } else if (userSelection == "rock" && computerSelection == "scissors") {
        return win;
    } else if (userSelection == "paper" && computerSelection == "scissors") {
        return lose;
    } else if (userSelection == "paper" && computerSelection == "rock") {
        return win; 
    } else if (userSelection == "scissors" && computerSelection == "rock") {
        return lose;
    } else if (userSelection == "scissors" && computerSelection == "paper") {
        return win;
    }
} 


/* Make the users input case insensitive */

/* Console log the results playRound */

/* Loop the game so as to create a 'best of five' game cycle using a function called game()*/