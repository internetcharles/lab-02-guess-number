// Get elements
const submitButton = document.getElementById('button');
const resetButton = document.getElementById('reset');

// Gets state
const input = document.getElementById('user-input');

// Gets derived states
const highOrLow = document.getElementById('high-or-low');
const result = document.getElementById('result');
const guessRandom = document.getElementById('guess-random');
let tries = document.getElementById('tries');

// Gets containers of game info
const gameContainer = document.getElementById('game-container');
const hiddenContainer = document.getElementById('hidden-container');





let tryCounter = 5;
tries.textContent = tryCounter;
let randomNumber = Math.round(Math.random() * 100);

function generateRandom() {
    input.value = Math.round(Math.random() * 100);
}
function resetGame() {
    gameContainer.style.display = 'block';
    hiddenContainer.style.display = 'none';
    input.value = 1;
    result.textContent = '';
    highOrLow.textContent = '';
    randomNumber = Math.round(Math.random() * 100);
    tries.textContent = 5;
    tryCounter = 5;
}
function compareNumbers() {
    let guess = input.value;
    const computerNumber = randomNumber;

    if (computerNumber > guess) {
        highOrLow.textContent = 'Your number is too low!';
        tryCounter--;
        tries.textContent = tryCounter;
    }
    else if (computerNumber < guess) {
        highOrLow.textContent = 'Your number is too high!';
        tryCounter--;
        tries.textContent = tryCounter;
    }
    else {
        highOrLow.textContent = 'You\'re correct, congratulations!';
        result.textContent = 'YOU WIN!';
        gameContainer.style.display = 'none';
        hiddenContainer.style.display = 'block';
    }

    if (tryCounter === 0) {
        result.textContent = 'YOU LOSE! THE CORRECT NUMBER WAS ' + computerNumber;
        gameContainer.style.display = 'none';
        hiddenContainer.style.display = 'block';
    }
}

submitButton.addEventListener('click', compareNumbers);
guessRandom.addEventListener('click', generateRandom); 
resetButton.addEventListener('click', resetGame);