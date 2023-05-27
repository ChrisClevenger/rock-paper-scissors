/* This is the first iteration of the game. It will be played completely from the console. */
/* The first function will getComputerChoice and will return either "Rock", "Paper", or "Scissors".*/
console.log("Hello world!");

const choices = ["rock", "paper", "scissors"];

function computerSelection(choices) {

return choices[Math.floor(Math.random()*choices.length)];
}

/* Prompt user for their selection: rock, paper, or scissors */

let userInput = prompt("Rock, paper, or scissors?"); 

/* Make the users input case insensitive */

const userSelection = userInput.toLowerCase(); 

console.log("User choice is " + userSelection + "!"); 

/* Create series of if/else functions that determine win/loss scenarios. */ 

const win = ["You win!"];
const tie = ["It's a tie!"];
const lose = ["You lose!"]; 

function gameResults(computerSelection, userSelection) {
    if (userSelection === computerSelection) {
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

const computerChoice = computerSelection(choices); 

console.log("Computer choice is " + computerChoice + "!"); 

console.log(gameResults(computerChoice, userSelection)) 

/* Console log the results playRound */

/* Loop the game so as to create a 'best of five' game cycle using a function called game()*/