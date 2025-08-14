let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".options");
const msg=document.querySelector(".msg");

const USpara=document.querySelector("#you-score");
const CSpara=document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options=['rock','paper','scissors'];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        USpara.innerText=userScore;
        console.log("You win!");
        msg.innerText=`You win!Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        console.log("You lose");
        compScore++;
        CSpara.innerText=compScore;
        msg.innerText=`You lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame=(userChoice)=>{
    console.log("User choice=",userChoice);
    const compChoice=genCompChoice();
    console.log("Comp choice=",compChoice);

    if(userChoice===compChoice){
        msg.innerText='Game was draw'
        console.log("Game was draw");
        msg.style.backgroundColor="darkcyan";
    }
    else{
        let userWin=true;
        if(userChoice==='rock'){
            userWin=compChoice==='paper'? false:true;
        }
        else if(userChoice==='paper'){
            userWin=compChoice==='scissor'? false:true;
        }
        else{
            userWin=compChoice==='rock'? false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    } 
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});