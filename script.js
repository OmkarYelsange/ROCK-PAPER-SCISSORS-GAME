let us=0;
let cs=0;

const choices = document.querySelectorAll(".choice");
const m = document.querySelector("#m");

const uspara = document.querySelector("#us");
const cspara = document.querySelector("#cs");

const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randidx = Math.floor(Math.random() * 3);
    return options[randidx];
};

const drawGame = () => {
    m.innerText = "Game Draw! Play Again!";
    m.style.backgroundColor = "rgb(10, 7, 7)";
    console.log("Game Draw");
};

const showWinner = (userWin,userChoice,compChoice) => {
    if (userWin){
        us++;
        uspara.innerText = us;
        m.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        m.style.backgroundColor = "green";
        console.log("You Win!");
    }else {
        cs++;
        cspara.innerText = cs;
        m.innerText = `You Lost! ${compChoice} beats Your ${userChoice}`;
        m.style.backgroundColor = "red";
        console.log("You Lost!");
    }
};

const playGame = (userChoice) => {
    //Generate Computer Choice
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        //Draw Game
        drawGame();
    }else {
        let userWin = true;
        if (userChoice === "rock"){
            //scissors,paper
            userWin = compChoice === "paper" ? false : true;
        }else if (userChoice === "paper"){
            //scissors,rock
            userWin = compChoice === "scissors" ? false : true;
        }else {
            //rock,paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
        console.log(`Your Choice: ${userChoice}`);
        console.log(`Computer Choice: ${compChoice}`);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});