let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let currentGuess = '';


function updateGuess(number) {
    currentGuess += number; 
    document.getElementById('guessInput').value = currentGuess; 
}


function checkGuess() {
    const userGuess = document.getElementById('guessInput').value;
    const feedback = document.getElementById('feedback');
    attempts++;

    
    if (userGuess === "") {
        feedback.textContent = "Please enter a guess!";
        feedback.style.color = 'red';
        return;
    }

    if (userGuess == randomNumber) {
        feedback.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
        feedback.style.color = 'green';
    } else if (userGuess < randomNumber) {
        feedback.textContent = "Too low! Try again.";
        feedback.style.color = 'orange';
    } else if (userGuess > randomNumber) {
        feedback.textContent = "Too high! Try again.";
        feedback.style.color = 'orange';
    }


    currentGuess = '';
    document.getElementById('guessInput').value = '';
}