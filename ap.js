let userscore=0;
let comscore=0;
const choices=document.querySelectorAll(".box");
const winname=document.querySelector("#msg");
const users=document.querySelector("#youscore");
const coms=document.querySelector("#comscore");


const genretcomchoice=()=>{
    const option =["paper","rock","scissor"];
    const index=Math.floor(Math.random()*3);
   return  option[index];
}
const showwiner=(winner,userChoice,computerchoice)=>{
    if(winner){
        userscore++;
        users.innerText=userscore;
        winname.innerText=` you win 😊!  ${userChoice} beats to ${computerchoice}`;


    }
    else{
        comscore++;
        coms.innerText=comscore;
    winname.innerText=` com win  😂!  ${computerchoice} beats to ${userChoice}`;
    }

}
const playgame=(userChoice)=>{
    //console.log("user choice=",userChoice);
    const computerchoice=genretcomchoice();
    //console.log("computer choice",computerchoice);
    //draw game
    if(userChoice===computerchoice){
        winname.innerText="draw game ";
    }
    else
    {
        let userwin=true;
        if(userChoice==="rock"){
            userwin=computerchoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            userwin=computerchoice==="scissor"?false:true;
        }
        else {
            userwin=computerchoice==="rock"?false:true;
        }
        showwiner(userwin,userChoice,computerchoice);
    }
   
};
choices.forEach((choice)=>
{
choice.addEventListener("click",()=>
{
   const userChoice=choice.getAttribute("id");
    playgame(userChoice);
});
});