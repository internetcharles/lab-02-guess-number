// Get elements
const button = document.getElementById('button');
let tries = document.getElementById('tries');
const input = document.getElementById('user-input');
const tooHigh = document.getElementById('tooHigh');
const result = document.getElementById('result');
const gameContainer = document.getElementById('game-container');
const guessRandom = document.getElementById('guess-random');
const hiddenContainer = document.getElementById('hidden-container');
const resetButton = document.getElementById('reset');

let tryCounter = 5;
tries.textContent = tryCounter;
let randomNumber = Math.random() * 100;

function generateRandom() {
    let randomInput = Math.random() * 100;
    input.value = Math.round(randomInput);
}

function resetGame() {
    gameContainer.style.display = 'block';
    hiddenContainer.style.display = 'none';
    input.value = 1;
    result.textContent = '';
    tooHigh.textContent = '';
    randomNumber = Math.random() * 100;
    tryCounter = 5;
}


function compareNumbers() {

    let g = input.value;
    const c = Math.round(randomNumber);

    if (c > g) {
        tooHigh.textContent = 'Your number is too low!';
        tryCounter--;
        tries.textContent = tryCounter;
    }
    else if (c < g) {
        tooHigh.textContent = 'Your number is too high!';
        tryCounter--;
        tries.textContent = tryCounter;
    }
    else {
        tooHigh.textContent = 'You\'re correct, congratulations!';
        result.textContent = 'YOU WIN!';
        gameContainer.style.display = 'none';
        hiddenContainer.style.display = 'block';
    }

    if (tryCounter === 0) {
        result.textContent = 'YOU LOSE! THE CORRECT NUMBER WAS ' + c;
        gameContainer.style.display = 'none';
        hiddenContainer.style.display = 'block';
    }



}

button.addEventListener('click', compareNumbers);
guessRandom.addEventListener('click', generateRandom); 
resetButton.addEventListener('click', resetGame); 
