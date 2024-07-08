//Variables
let userScr = 0; // User's score, initialized to 0
let compScr = 0; // Computer's score, initialized to 0

//Selecting HTML elements
const choices = document.querySelectorAll(".choice"); // Selecting all elements with class "choice"
const msg = document.querySelector("#msg"); // Selecting element with id "msg"
const userScorePara = document.querySelector("#user-score"); // Selecting element with id "user-score"
const compScorePara = document.querySelector("#comp-score"); // Selecting element with id "comp-score"

//Function to generate computer's choice
const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"]; // Array of choices
  const randIdx = Math.floor(Math.random() * 3); // Generating random index
  return options[randIdx]; // Returning random choice
};

//Function to handle draw game
const drawGame = () => {
  msg.innerText = "Game was Draw. Play again."; // Displaying draw message
  msg.style.backgroundColor = "#081b31"; // Changing background color
};

//Function to show winner
const ShowWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScr++; // Incrementing user's score
    userScorePara.innerText = userScr; // Updating user's score display
    console.log("You Win"); // Logging win message
    msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`; // Displaying win message
    msg.style.backgroundColor = "green"; // Changing background color to green
  } else {
    compScr++; // Incrementing computer's score
    compScorePara.innerText = compScr; // Updating computer's score display
    console.log("You Lose"); // Logging lose message
    msg.innerText = "You Lose!"; // Displaying lose message
    msg.innerText = `You Win! ${compChoice} beats Yours ${userChoice}`; // Displaying lose message
    msg.style.backgroundColor = "red"; // Changing background color to red
  }
};

//Main game function
const playGame = (userChoice) => {
  console.log("User choice", userChoice); // Logging user's choice
  const compChoice = genCompChoice(); // Generating computer's choice
  console.log("Computer choice", compChoice); // Logging computer's choice
  if (userChoice === compChoice) {
    drawGame(); // Calling draw game function
  } else {
    let userWin = true; // Assuming user wins
    if (userChoice === "rock") {
      userWin = compChoice == "paper" ? false : true; // Checking if paper beats rock
    } else if (userChoice === "paper") {
      userWin = compChoice == "scissors" ? false : true; // Checking if scissors beats paper
    } else {
      userWin = compChoice == "rock" ? false : true; // Checking if rock beats scissors
    }
    ShowWinner(userWin, userChoice, compChoice); // Calling show winner function
  }
};

//Event listener for choice buttons
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id"); // Getting user's choice
    playGame(userChoice); // Calling play game function
  });
});
