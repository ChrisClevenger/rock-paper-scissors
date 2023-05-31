/* This is the first iteration of the game. It will be played completely from the console. */
/* The first function will getComputerChoice and will return either "Rock", "Paper", or "Scissors". */

const choices = ["rock", "paper", "scissors"];

function computerSelection(choices) {
  return choices[Math.floor(Math.random() * choices.length)];
}

const win = "You WIN this round!";
const tie = "This round is a TIE!";
const lose = "You LOSE this round!";

/* Create a series of if else statements to calculate conditions for wins and loses.  */

function playRound(computerSelection, userSelection) {
  if (userSelection === computerSelection) {
    console.log(tie);
    return "tie";
  } else if (
    (userSelection === "rock" && computerSelection === "scissors") ||
    (userSelection === "paper" && computerSelection === "rock") ||
    (userSelection === "scissors" && computerSelection === "paper")
  ) {
    console.log(win);
    return "win";
  } else {
    console.log(lose);
    return "lose";
  }
}

/* Loop the game so as to create a 'best of five' game cycle using a function called game() */

function game() {
  let userWins = 0;
  let computerWins = 0;

  while (userWins < 3 && computerWins < 3) {

    /* Prompt user for their selection: rock, paper, or scissors */

    const userInput = prompt("Rock, paper, or scissors?");

    /* Make the user input case insensitive. */

    const userSelection = userInput.toLowerCase();
    const computerChoice = computerSelection(choices);
    const roundResult = playRound(computerChoice, userSelection);

    if (roundResult === "win") {
      userWins++;
    } else if (roundResult === "lose") {
      computerWins++;
    }
  }

  if (userWins > computerWins) {
    console.log("Congratulations! You win the game!");
  } else {
    console.log("You lost the game. Better luck next time!");
  }
}

game();

