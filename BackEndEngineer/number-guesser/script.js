let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

function generateTarget() {
    return Math.floor(Math.random() * 10);
}

function getAbsoluteDistance(guess, target) {
    return Math.abs(guess - target);
}

function compareGuesses(userGuess, computerGuess, secretTargetNumber) {
    let userDiff = getAbsoluteDistance(userGuess, secretTargetNumber);
    let computerDiff = getAbsoluteDistance(computerGuess, secretTargetNumber);

    if (userGuess < 0 || userGuess > 9) {
        alert('Please reselect a guess that is between 0 and 9!');
    } else {
        if (userGuess === computerGuess || userDiff < computerDiff) {
            return true;
        } else {
            return false;
        }
    }
}

function updateScore(winner) {
    if (winner === 'human') {
        humanScore += 1;
    } else if (winner === 'computer') {
        computerScore += 1;
    }
}

function advanceRound() {
    currentRoundNumber += 1;
}