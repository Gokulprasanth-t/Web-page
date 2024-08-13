document.addEventListener('DOMContentLoaded', () => {
    const guessButton = document.getElementById('guessButton');
    const guessInput = document.getElementById('guessInput');
    const message = document.getElementById('message');

    // Generate a random number between 1 and 100
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    guessButton.addEventListener('click', () => {
        const userGuess = parseInt(guessInput.value);

        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            message.textContent = 'Please enter a number between 1 and 100.';
            message.style.color = 'red';
            return;
        }

        if (userGuess === randomNumber) {
            message.textContent = 'Congratulations! You guessed the right number!';
            message.style.color = 'green';
        } else if (userGuess < randomNumber) {
            message.textContent = 'Too low! Try again.';
            message.style.color = 'orange';
        } else {
            message.textContent = 'Too high! Try again.';
            message.style.color = 'orange';
        }
    });
});
