const container = document.querySelector("#container");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", () => {
  playRound("Rock", getComputerChoice());
});

paper.addEventListener("click", () => {
  playRound("Paper", getComputerChoice());
});

scissors.addEventListener("click", () => {
  playRound("Scissors", getComputerChoice());
});

let humanScore = 0;
let computerScore = 0;

// Create elements for displaying scores and results
const displayHumanScore = document.createElement("div");
container.appendChild(displayHumanScore);
const displayComputerScore = document.createElement("div");
container.appendChild(displayComputerScore);
const resultDisplay = document.createElement("div");
container.appendChild(resultDisplay);
const winnerDisplay = document.createElement("div");
container.appendChild(winnerDisplay);

// computer choice
function getComputerChoice() {
  let compRandom = Math.floor(Math.random() * 3);
  if (compRandom === 0) {
    return "Rock";
  } else if (compRandom === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

// play round
function playRound(humanChoice, computerChoice) {
  let result = "";

  if (humanChoice === computerChoice) {
    result = "It is a Draw!";
  } else if (
    (humanChoice === "Rock" && computerChoice === "Scissors") ||
    (humanChoice === "Paper" && computerChoice === "Rock") ||
    (humanChoice === "Scissors" && computerChoice === "Paper")
  ) {
    humanScore++;
    result = "You Win!";
  } else {
    computerScore++;
    result = "You Lose!";
  }

  resultDisplay.textContent = `Player: ${humanChoice}, Computer: ${computerChoice}. ${result}`;
  updateScores();

  if (humanScore === 5 || computerScore === 5) {
    announceWinner();
    resetGame();
  }
}

function updateScores() {
  displayHumanScore.textContent = `Human Score: ${humanScore}`;
  displayComputerScore.textContent = `Computer Score: ${computerScore}`;
}

function announceWinner() {
  if (humanScore > computerScore) {
    winnerDisplay.textContent = "You are the Winner!";
  } else {
    winnerDisplay.textContent = "Better Luck Next Time :(";
  }
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  updateScores();
  resultDisplay.textContent = "";
}

// const container = document.querySelector("#container");
// const rock = document.querySelector("#rock");
// const paper = document.querySelector("#paper");
// const scissors = document.querySelector("#scissors");

// rock.addEventListener("click", () => {
//   playRound(getHumanChoice("Rock"), getComputerChoice());
// });

// paper.addEventListener("click", () => {
//   playRound(getHumanChoice("Paper"), getComputerChoice());
// });

// scissors.addEventListener("click", () => {
//   playRound(getHumanChoice("Scissors"), getComputerChoice());
// });

// let humanScore = 0;
// let computerScore = 0;

// // computer choice
// function getComputerChoice() {
//   let compRandom = Math.floor(Math.random() * 3) + 1;

//   if (compRandom === 1) {
//     return "Rock";
//   } else if (compRandom === 2) {
//     return "Paper";
//   } else if (compRandom === 3) {
//     return "Scissors";
//   }
// }

// // human choice
// function getHumanChoice(button) {
//   let humanChoice = button;

//   if (humanChoice === "Rock") {
//     return "Rock";
//   } else if (humanChoice === "Paper") {
//     return "Paper";
//   } else if (humanChoice === "Scissors") {
//     return "Scissors";
//   }
// }

// // play round
// function playRound(humanChoice, computerChoice) {
//   const result = document.createElement("div");
//   container.appendChild(result);

//   if (humanChoice === "Rock") {
//     if (computerChoice === "Rock") {
//       result.textContent = "It is a Draw!";
//     } else if (computerChoice === "Paper") {
//       computerScore++;
//       result.textContent = "You Lose!";
//     } else if (computerChoice === "Scissors") {
//       humanScore++;
//       result.textContent = "You Win!";
//     }
//   }
//   if (humanChoice === "Paper") {
//     if (computerChoice === "Rock") {
//       humanScore++;
//       result.textContent = "You Win!";
//     } else if (computerChoice === "Paper") {
//       result.textContent = "It is a Draw!";
//     } else if (computerChoice === "Scissors") {
//       computerScore++;
//       result.textContent = "You Lose!";
//     }
//   }
//   if (humanChoice === "Scissors") {
//     if (computerChoice === "Rock") {
//       computerScore++;
//       result.textContent = "You Lose!";
//     } else if (computerChoice === "Paper") {
//       humanScore++;
//       result.textContent = "You Win!";
//     } else if (computerChoice === "Scissors") {
//       result.textContent = "It is a Draw!";
//     }
//   }
// }

// playRound();

// // play game
// function playGame() {
//   let roundNum = 1;
//   while (roundNum <= 5) {
//     console.log(roundNum);

//     const humanSelection = getHumanChoice();
//     console.log(`Player: ${humanSelection}`);
//     const computerSelection = getComputerChoice();
//     console.log(`Computer: ${computerSelection}`);

//     playRound(humanSelection, computerSelection);

//     roundNum++;
//   }
// }

// playGame();

// const displayHumanScore = document.createElement("div");
// container.appendChild(displayHumanScore);
// const displayComputerScore = document.createElement("div");
// container.appendChild(displayComputerScore);
// const winnerScore = document.createElement("div");
// container.appendChild(winnerScore);

// displayHumanScore.textContent = `Human Score: ${humanScore}`;
// displayComputerScore.textContent = `Computer Score: ${computerScore}`;

// if (humanScore > computerScore) {
//   winnerScore.textContent = "You are the Winner!";
// } else if (humanScore < computerScore) {
//   winnerScore.textContent = "Better Luck Next Time :(";
// } else {
//   winnerScore.textContent = "The Game is a Draw!";
// }
