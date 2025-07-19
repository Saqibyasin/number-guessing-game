let machineNumber = Math.floor(Math.random() * 100) + 1;
let userNumber = document.querySelector(".guessField");
let feedback = document.querySelector(".feedbackText");
let btn = document.querySelector("button");

let counter = 0;
let attempts = 6;

// Function to check the guess
function checkGuess() {
    let guess = Number(userNumber.value);
    
    if (isNaN(guess) || guess < 1 || guess > 100) {
        feedback.textContent = "Please enter a valid number between 1 and 100.";
        userNumber.value = ""; // Clear input field
        userNumber.focus(); // Focus back on input field
        return; // Exit the function if input is invalid
    }
    counter++;
    if(counter > attempts) {
        feedback.textContent = `❌ Game over! The number was ${machineNumber}. Click reset to try again.`;
        userNumber.disabled = true; 
        btn.disabled = true; 

    }
   else if (guess === machineNumber && counter <= attempts) {
        feedback.textContent = `🎉 Congratulations! You guessed it in ${counter} tries!`;
        userNumber.disabled = true; // Disable input after correct guess
        btn.disabled = true; // Disable button after correct guess
    } else if (guess < machineNumber) {
        feedback.textContent = `📉 Too low! Attempts: ${counter}`;
    } else {
        feedback.textContent = `📈 Too high! Attempts: ${counter}`;
    }
    userNumber.value = ""; // Clear input field
    userNumber.focus(); // Focus back on input field
}


btn.addEventListener("click", checkGuess);


userNumber.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        checkGuess();
    }
});


function resetGame() {
    userNumber.disabled = false; // Enable input for a new game
    btn.disabled = false; // Enable button for a new game
    machineNumber = Math.floor(Math.random() * 100) + 1;
    counter = 0;
    feedback.textContent = "Make a guess!";
    userNumber.value = "";
    userNumber.focus();
}


let resetBtn = document.querySelector(".reset-btn");
resetBtn.addEventListener("click", resetGame);

let hours = document.querySelector("#hours");
let minutes = document.querySelector("#minutes");

function updateTime() {
    let now = new Date();
    hours.textContent = String(now.getHours()).padStart(2, '0');
    minutes.textContent = String(now.getMinutes()).padStart(2, '0');

}

setInterval(updateTime, 1000); 
updateTime();
