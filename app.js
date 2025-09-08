let userScore=0;
let compScore=0;
const msg= document.getElementById("msg")
const choices=document.querySelectorAll(".choice")
const userScorePara = document.getElementById("user-score")
const CompScorePara = document.getElementById("comp-score")

const genCompChoice = () =>{
    const options=["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() *3 );
    return options[randIdx]

}

const drawGame= () =>{
    console.log("Draw game....")
    msg.innerText = "Draw"
    msg.style.backgroundColor = "black";
    msg.style.color = "cyan";
};

const ShowWinner = (userWin) =>{
    if (userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "You Win";
        msg.style.backgroundColor = "Green";
        msg.style.color = "white";
    }else{
        compScore++;
        CompScorePara.innerText = compScore;
        msg.innerText = "You Lose";
        msg.style.backgroundColor = "Red";
        msg.style.color = "white";
    }

}
const playGame= (userChoice) =>{
    const compChoice = genCompChoice();
    if (userChoice === compChoice){
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }else if (userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        } else{
            userWin = compChoice ==="rock" ? false : true;
        }
        ShowWinner(userWin);
    }
    
};
choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
        genCompChoice();    

        
    })
})