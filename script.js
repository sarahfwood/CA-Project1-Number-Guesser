let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
  return Math.floor((Math.random() * 10));
};

console.log(generateTarget());

const compareGuesses = (humanGuess, computerGuess, secretNumber) => {
  if ((humanGuess - secretNumber) <= (computerGuess - secretNumber)) {
    return true;
  } else {
    return false;
  }
};

console.log(compareGuesses(2, 8, 3));