let userScore = 0;
let compScore = 0;

const choices =document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice =() => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options [randIdx];
};

const drawGame = () => {
    console.log("game was draw.");
    msg.innerText ="Game was Draw. Play Again"
    msg.style.backgroundColor = "#081b31";
}
 const showWinner = (userWin, userChoice, CompChoice) => {
    if (userWin) {
        console.log("You Win!");
        userScore++
        userScorePara.innerText = userScore
        msg.innerText = `You Win! your ${userChoice} beats ${CompChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        console.log("You lose");
        compScore++
        compScorePara.innerText = compScore
        msg.innerText = `You lost ${CompChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
 }

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);

    //Generate Computer choice-> modular
const CompChoice = genCompChoice();

console.log("comp choice =", CompChoice);

    if (userChoice === CompChoice){
        //draw game
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            //scissors, paper
            userWin = CompChoice === "paper" ? false : true;
        } 
        else if(userChoice === "paper") {
            //rock, scissors
            userWin = CompChoice === "scissors" ? false : true;
        }
            else (userChoice === "scissors"); {
            // rock, paper
            userWin = CompChoice === "rock" ? false : true; 
        }
        showWinner(userWin, userChoice, CompChoice);
    }
     
};



choices.forEach((choice) => {
    choice.addEventListener("click",() => {
const userChoice = choice.getAttribute("id");        
    
    playGame(userChoice);
 })    
});