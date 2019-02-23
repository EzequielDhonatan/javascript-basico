// GERANDO NÚMEROS ALEATÓRIOS
var random = 0;
var plays = 1;
var number = 0;

generateRandom()

// play();

function play() {
    number = prompt(plays + 'º Tentativa, advinhe o número:');

    checkResult();
}

function checkResult() {
    console.log(number + " == " + random);

    if (number == random) {
        alert('Acetou. Parabéns!!!');

        resetGame();
    } else if (plays >= 3) {
        alert('Game Over');

        resetGame();
    } else {
        plays ++;

        play();
    }
}

function generateRandom() {
    random = Math.floor(Math.random() * 10);
}

function resetGame() {
    plays = 1;

    generateRandom();
}