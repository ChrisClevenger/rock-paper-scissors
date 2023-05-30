const choices = ["rock", "paper", "scissors"];

function computerSelection(choices) {
  return choices[Math.floor(Math.random() * choices.length)];
  console.log("The computer has chosen!"); 
}

const win = "You WIN this round!";
const tie = "This round is a TIE!";
const lose = "You LOSE this round!";

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

const rockButton = document.querySelector("#rockButton");
const paperButton = document.querySelector("#paperButton"); 
const scissorsButton = document.querySelector("#scissorsButton"); 

rockButton.addEventListener("click", () => {
  console.log("User has chosen ROCK!"); 
  return userSelection = "rock";
})

paperButton.addEventListener("click", () => {
  return userSelection = "paper";  
})

scissorsButton.addEventListener("click", () => {
  return userSelection = "scissors";
})