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
