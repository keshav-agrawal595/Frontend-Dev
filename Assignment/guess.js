let secretNumber;

function startGame() {
    secretNumber = Math.floor(Math.random() * 50) + 1;
    document.getElementById('gameArea').style.display = 'block';
    console.log('Game started! Guess a number between 1 and 50.');
    document.getElementById('userGuess').value = '';
}

function checkGuess() {
    let userGuess = parseInt(document.getElementById('userGuess').value);

    if (userGuess === secretNumber) {
        console.log("Correct guess!");
        console.log("Secret number was: " + secretNumber);
    } else {
        let difference = Math.abs(userGuess - secretNumber);
        if (difference <= 3) {
            console.log("Very close!");
        } else {
            if (userGuess > secretNumber) {
                console.log("Too high");
            } else {
                console.log("Too low");
            }
        }
    }
}
