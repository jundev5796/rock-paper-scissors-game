humanScore = 0;
computerScore = 0;

// computer choice
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

// human choice
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

// play round
function playRound(humanChoice, computerChoice) {
  if (humanChoice === "Rock") {
    if (computerChoice === "Rock") {
      console.log("It is a Draw!");
    } else if (computerChoice === "Paper") {
      console.log("You Lose!");
    } else if (computerChoice === "Scissors") {
      console.log("You Win!");
    }
  }
  if (humanChoice === "Paper") {
    if (computerChoice === "Rock") {
      console.log("You Win!");
    } else if (computerChoice === "Paper") {
      console.log("It is a Draw!");
    } else if (computerChoice === "Scissors") {
      console.log("You Lose!");
    }
  }
  if (humanChoice === "Scissors") {
    if (computerChoice === "Rock") {
      console.log("You Lose!");
    } else if (computerChoice === "Paper") {
      console.log("You Win!");
    } else if (computerChoice === "Scissors") {
      console.log("It is a Draw!");
    }
  }
}

const humanSelection = getHumanChoice();
console.log(`Player: ${humanSelection}`);
const computerSelection = getComputerChoice();
console.log(`Computer: ${computerSelection}`);

playRound(humanSelection, computerSelection);

// play game
