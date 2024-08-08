const container = document.querySelector("#container");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", () => {
  playRound(getHumanChoice("Rock"), getComputerChoice());
});

paper.addEventListener("click", () => {
  playRound(getHumanChoice("Paper"), getComputerChoice());
});

scissors.addEventListener("click", () => {
  playRound(getHumanChoice("Scissors"), getComputerChoice());
});

let humanScore = 0;
let computerScore = 0;

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
function getHumanChoice(button) {
  let humanChoice = button;

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
  const result = document.createElement("div");
  container.appendChild(result);

  if (humanChoice === "Rock") {
    if (computerChoice === "Rock") {
      result.textContent = "It is a Draw!";
    } else if (computerChoice === "Paper") {
      computerScore++;
      result.textContent = "You Lose!";
    } else if (computerChoice === "Scissors") {
      humanScore++;
      result.textContent = "You Win!";
    }
  }
  if (humanChoice === "Paper") {
    if (computerChoice === "Rock") {
      humanScore++;
      result.textContent = "You Win!";
    } else if (computerChoice === "Paper") {
      result.textContent = "It is a Draw!";
    } else if (computerChoice === "Scissors") {
      computerScore++;
      result.textContent = "You Lose!";
    }
  }
  if (humanChoice === "Scissors") {
    if (computerChoice === "Rock") {
      computerScore++;
      result.textContent = "You Lose!";
    } else if (computerChoice === "Paper") {
      humanScore++;
      result.textContent = "You Win!";
    } else if (computerChoice === "Scissors") {
      result.textContent = "It is a Draw!";
    }
  }
}

playRound();

// play game
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

if (humanScore > computerScore) {
  console.log("You are the Winner!");
} else if (humanScore < computerScore) {
  console.log("Better Luck Next Time :(");
} else {
  console.log("The Game is a Draw!");
}
