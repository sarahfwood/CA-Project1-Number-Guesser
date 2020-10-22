let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
  return Math.floor((Math.random() * 10));
};

const compareGuesses = (humanGuess, computerGuess, secretNumber) => {
  if (secretNumber > humanGuess) {
    humanGuess - secretNumber;
  } else {
    secretNumber - humanGuess;
  }

  if (secretNumber > computerGuess) {
    computerGuess - secretNumber;
  } else {
    secretNumber - computerGuess;
  }



  if ((humanGuess - secretNumber) >= (computerGuess - secretNumber)) {
    return true;
  } else if ((humanGuess - secretNumber) < compareGuesses - secretNumber) {
    return false;
  } else {
    return 'Invalid';
  }
};



console.log(compareGuesses(2, 2, 2));
console.log(compareGuesses(1, 8, 2));
console.log(compareGuesses(1, 8, 8));




//logic: If secrert number is larger than guess 1 then takeaway otherwise just takeway 