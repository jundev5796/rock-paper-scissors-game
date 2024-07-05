humanScore = 0;
computerScore = 0;

function getComputerChoice() {
  let compRandom = Math.floor(Math.random() * 3) + 1;

  if (compRandom === 1) {
    return "Rock";
  } else if (compRandom === 2) {
    return "Paper";
  } else if (compRandom === 3) {
    return "Scissors";
  }
}

const compFinalChoice = getComputerChoice();
console.log(compFinalChoice);

function getHumanChoice() {
  let humanChoice = prompt("Your Choice:");

  if (humanChoice === "Rock") {
    return "Rock";
  } else if (humanChoice === "Paper") {
    return "Paper";
  } else if (humanChoice === "Scissors") {
    return "Scissors";
  }
}

const humanFinalChoice = getHumanChoice();
console.log(humanFinalChoice);
