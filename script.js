let gameArea = document.getElementById('game');
let normalCat = document.getElementById('normal');
let tongueCat = document.getElementById('tongue');
let happyCat = document.getElementById('happy');
let angryCat = document.getElementById('angry');
let scoreElement = document.getElementById('score');

let isTongueVisible = false;
let score = 0;

function showTongue() {
    normalCat.classList.add('hidden');
    tongueCat.classList.remove('hidden');
    isTongueVisible = true;

    let randomTime = 300 + Math.random() * 200;  // Random time between 0.3 to 0.5 seconds
    setTimeout(() => {
        if (isTongueVisible) {
            resetCats();
        }
    }, randomTime);
}

function showHappyCat() {
    resetCats();
    score += 1;  // Increase the score
    scoreElement.innerText = 'pup! ' + score;  // Update the score display
    happyCat.classList.remove('hidden');
    setTimeout(resetCats, 2000);
}

function showAngryCat() {
    resetCats();
    angryCat.classList.remove('hidden');
    setTimeout(resetCats, 2000);
}

function resetCats() {
    normalCat.classList.remove('hidden');
    tongueCat.classList.add('hidden');
    happyCat.classList.add('hidden');
    angryCat.classList.add('hidden');
    isTongueVisible = false;
}

gameArea.addEventListener('mousedown', () => {
    if (isTongueVisible) {
        showHappyCat();
    } else {
        showAngryCat();
    }
});

function startGameLoop() {
    let randomTime = 1000 + Math.random() * 4000;  // Random time between 1 to 5 seconds
    setTimeout(() => {
        showTongue();
        startGameLoop();
    }, randomTime);
}

startGameLoop();
