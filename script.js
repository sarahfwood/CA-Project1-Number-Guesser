let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
  return Math.floor((Math.random() * 10));
};

const compareGuesses = (humanGuess, computerGuess, secretNumber) => {

  if ((secretNumber - humanGuess) <= (secretNumber - computerGuess)) {
    return true;
  } else if ((secretNumber - humanGuess) > (secretNumber - computerGuess)) {
    return false;
  } else {
    return 'Invalid';
  }

};

const updateScore = (score) => {
  if (score === 'human') {
    humanScore++;
  } else {
    computerScore++;
  }
};

const advancedRound = () => {
  currentRoundNumber++;
};