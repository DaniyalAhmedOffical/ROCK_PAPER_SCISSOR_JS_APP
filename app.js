// Initializing user and computer scores to 0
let userScr = 0;
let compScr = 0;

// Selecting all choice buttons, message display, and score displays
const choices = document.querySelectorAll(".choice"); // Select all elements with class 'choice'
const msg = document.querySelector("#msg"); // Select the element with id 'msg'
const userScorePara = document.querySelector("#user-score"); // Select the element with id 'user-score'
const compScorePara = document.querySelector("#comp-score"); // Select the element with id 'comp-score'

// Function to generate computer's choice randomly
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"]; // Array of choices
    const randIdx = Math.floor(Math.random() * 3); // Generate a random index between 0 and 2
    return options[randIdx]; // Return the choice at the random index
}

// Function to handle a draw game
const drawGame = () => {
    msg.innerText = "Game was Draw. Play again."; // Set the message text
    msg.style.backgroundColor = "#081b31"; // Set the message background color
}

// Function to display the winner and update scores
const ShowWinner = (userWin, userChoice, compChoice) => {
    if (userWin) { // If the user wins
        userScr++; // Increment user score
        userScorePara.innerText = userScr; // Update user score display
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`; // Set win message
        msg.style.backgroundColor = "green"; // Set message background color to green
    } else { // If the computer wins
        compScr++; // Increment computer score
        compScorePara.innerText = compScr; // Update computer score display
        msg.innerText = `You Lose! ${compChoice} beats Your ${userChoice}`; // Set lose message
        msg.style.backgroundColor = "red"; // Set message background color to red
    }
}

// Function to play the game
const playGame = (userChoice) => {
    const compChoice = genCompChoice(); // Generate computer's choice
    if (userChoice === compChoice) { // If choices are the same
        drawGame(); // Handle draw game
    } else {
        let userWin = true; // Initialize userWin as true
        // Determine the winner based on choices
        if (userChoice === "rock") { // If user chooses rock
            userWin = compChoice === "paper" ? false : true; // User wins if computer chooses anything but paper
        } else if (userChoice === "paper") { // If user chooses paper
            userWin = compChoice === "scissors" ? false : true; // User wins if computer chooses anything but scissors
        } else { // If user chooses scissors
            userWin = compChoice === "rock" ? false : true; // User wins if computer chooses anything but rock
        }
        ShowWinner(userWin, userChoice, compChoice); // Display winner
    }
};

// Add event listeners to choice buttons
choices.forEach((choice) => {
    choice.addEventListener("click", () => { // Add click event listener to each choice
        const userChoice = choice.getAttribute("id"); // Get the id of the clicked choice
        playGame(userChoice); // Play the game with the user's choice
    });
});
