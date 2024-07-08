let userScr = 0;
let compScr = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const genCompChoice = () => {

    const options = ["rock", "paper","scissors"];

    const randIdx =  Math.floor(Math.random()* 3);
    return options[randIdx];
}


const drawGame = ()=>{
        msg.innerText = "Game was Draw. Play again.";
        msg.style.backgroundColor = "#081b31";
}


const ShowWinner = (userWin, userChoice,compChoice) => {
    if(userWin){
        console.log("You Win");
        msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";


    }
    else{
    console.log("You Lose")
    msg.innerText = "You Lose!";
    
    msg.style.backgroundColor = "red";


    }

}


const playGame = (userChoice) => {
    console.log("User choice", userChoice); 
    const compChoice = genCompChoice();
    console.log("Computer choice", compChoice); 

    if(userChoice === compChoice){
        drawGame();
    }

    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice == "paper" ? false:true;
        }

        else  if(userChoice === "paper"){
            userWin = compChoice == "scissors" ? false:true;
        }

        else{
            userWin = compChoice == "rock" ? false:true;
        }
        ShowWinner(userWin, userChoice,compChoice);
    }


};



choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
     })
})