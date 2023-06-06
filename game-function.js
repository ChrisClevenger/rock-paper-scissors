const choices = ["rock", "paper", "scissors"];
let userWins = 0; 
let computerWins = 0; 

function computerSelection(choices) {
  return choices[Math.floor(Math.random() * choices.length)];
}

const win = "You WIN this round!";
const tie = "This round is a TIE!";
const lose = "You LOSE this round!";

function playRound(computerSelection, userSelection) {

  const winLog = document.createElement('p');
  winLog.style.cssText = "color: red;"; 
  winLog.textContent = `Your ${userSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}. You won this round!`; 

  const lossLog = document.createElement('p');
  lossLog.style.cssText = "color: red;"; 
  lossLog.textContent = `The CPU's ${computerSelection.toUpperCase()} beats your ${userSelection.toUpperCase()}. You lost this round!`; 

  const tieLog = document.createElement('p');
  tieLog.style.cssText = "color: red;"; 
  tieLog.textContent = `Evenly matched! ${userSelection.toUpperCase()} vs. ${computerSelection.toUpperCase()}!`; 

  if (userSelection === computerSelection) {
    console.log(tie);
    scoreboard.appendChild(tieLog); 
    checkGameResult(); 
    return "tie";
  } else if (
    (userSelection === "rock" && computerSelection === "scissors") ||
    (userSelection === "paper" && computerSelection === "rock") ||
    (userSelection === "scissors" && computerSelection === "paper")
  ) {
    console.log(win);
    scoreboard.appendChild(winLog);
    userWins++;
    checkGameResult(); 
    return "win";
  } else {
    console.log(lose);
    scoreboard.appendChild(lossLog);
    computerWins++; 
    checkGameResult(); 
    return "lose";
  }
}

function checkGameResult() {
  if (userWins === 3) {
    console.log("You won the game!");
    disableButtons(); 
    reset.appendChild(resetButton); 
  } else if (computerWins === 3) {
    console.log("You lost the game!"); 
    disableButtons(); 
    reset.appendChild(resetButton); 
  }
  updateScoreDisplay();
}

function updateScoreDisplay() {
  const userScore = document.querySelector(".user-score");
  const computerScore = document.querySelector(".computer-score");

  userScore.textContent = `User: ${userWins}`;
  computerScore.textContent = `Computer: ${computerWins}`;
}

function resetGame() {
  userWins = 0;
  computerWins = 0;
}

const rockButton = document.querySelector("#rockButton");
const paperButton = document.querySelector("#paperButton"); 
const scissorsButton = document.querySelector("#scissorsButton"); 

const scoreboard = document.querySelector(".results"); 
const bestOf = document.querySelector(".bestOf"); 
const reset = document.querySelector(".reset"); 

const resetButton = document.createElement('button'); 
resetButton.textContent = "Reset the Game"; 
resetButton.addEventListener("click", () => {
  location.reload(); 
})

function disableButtons() {
  rockButton.disabled = true; 
  paperButton.disabled = true; 
  scissorsButton.disabled = true; 
}


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


