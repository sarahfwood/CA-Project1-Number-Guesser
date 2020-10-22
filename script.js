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
  } else if ((humanGuess - secretNumber) > compareGuesses - secretNumber) {
    return false;
  } else {
    return 'Invalid';
  }
};

console.log(compareGuesses(2, 2, 2));
console.log(compareGuesses(1, 8, 2));
console.log(compareGuesses(1, 8, 8));