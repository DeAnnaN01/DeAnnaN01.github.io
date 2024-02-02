function runGame() {
    const randomNumber = Math.random() * 100;
    const randomInteger = Math.floor(randomNumber);
    const target = randomInteger + 1;
    //  const target = Math.floor (Math.random () * 100) + 1;
    
    let guessString = '';
    let guessNumber = 0;
    let correct = false; /* This is storing the Boolean value for the variable correct as false. This is done cuz once the value changes to true, the game will be over and the loop stops. */
    let numTries = 0;

    do {
        guessString = prompt( 'I am thinking of a number in the range of  1 to 100.\n\nWhat is the number?' );
        if (guessString === null) {
            return;
        }
        numTries += 1;
        guessNumber = +guessString; //Changes a string to a number
        correct = checkGuess(guessNumber, target);
    } while (!correct);

    alert( "You have guessed correctly! The number was " + target + "! \n\nIt took you " + numTries + " tries to guess the number." );
}

function checkGuess(guessNumber, target) {
    let correct = false;

    if (isNaN(guessNumber)) {
        alert( 'You did not guess a number.\n\nPlease enter a number in the 1-100 range.' );
    } else if ((guessNumber < 1) || (guessNumber > 100)) {
        alert( 'Please enter an integer within the 1-100 range.' );   
    } else if (guessNumber > target) {
        alert( 'Your guess is too large!' );
    } else if (guessNumber < target) {
        alert( 'Your guess is too small!' );
    } else {
        correct = true;
    }
    return correct;
}

