const choices = ["rock", "paper", "scissors"];

function computerSelection(choices) {
  return choices[Math.floor(Math.random() * choices.length)];
}

const win = "You WIN this round!";
const tie = "This round is a TIE!";
const lose = "You LOSE this round!";

function playRound(computerSelection, userSelection) {
  if (userSelection === computerSelection) {
    console.log(tie);
    scoreboard.appendChild(tieLog); 
    return "tie";
  } else if (
    (userSelection === "rock" && computerSelection === "scissors") ||
    (userSelection === "paper" && computerSelection === "rock") ||
    (userSelection === "scissors" && computerSelection === "paper")
  ) {
    console.log(win);
    scoreboard.appendChild(winLog); 
    return "win";
  } else {
    console.log(lose);
    scoreboard.appendChild(lossLog); 
    return "lose";
  }
}

const rockButton = document.querySelector("#rockButton");
const paperButton = document.querySelector("#paperButton"); 
const scissorsButton = document.querySelector("#scissorsButton"); 

rockButton.addEventListener("click", () => {
  console.log("User has chosen ROCK!"); 
  const userSelection = "rock";
  const computerChoice = computerSelection(choices);
  console.log(`The CPU has chosen ${computerChoice}!`); 
  playRound(computerChoice, userSelection);
})

paperButton.addEventListener("click", () => {
  console.log("User has chosen PAPER!"); 
  const userSelection = "paper";
  const computerChoice = computerSelection(choices);
  console.log(`The CPU has chosen ${computerChoice}!`); 
  playRound(computerChoice, userSelection);
})

scissorsButton.addEventListener("click", () => {
  console.log("User has chosen SCISSORS!"); 
  const userSelection = "scissors";
  const computerChoice = computerSelection(choices);
  console.log(`The CPU has chosen ${computerChoice}!`); 
  playRound(computerChoice, userSelection);
})

const scoreboard = document.querySelector(".results"); 

const winLog = document.createElement('p');
winLog.style.cssText = "color: red;"; 
winLog.textContent = "You fucking won this round!"; 

const lossLog = document.createElement('p');
lossLog.style.cssText = "color: red;"; 
lossLog.textContent = "Doofus! You lost this round!"; 

const tieLog = document.createElement('p');
tieLog.style.cssText = "color: red;"; 
tieLog.textContent = "Evenly matched! This round is a tie!"; 
