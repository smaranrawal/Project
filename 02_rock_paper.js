let userscore=0;
let compscore=0;

let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let userscorepara=document.querySelector("#user-score");
let compscorepara=document.querySelector("#comp-score");



const gamedraw=()=>{
    //console.log("game draw");
    msg.innerText="Game is draw";
    msg.style.backgroundColor="black";
    
}

const showwinner=(userwin,compchoice,userchoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        //console.log("win");
        msg.innerText="You win";
        msg.style.backgroundColor="green";
    }
    else{
        compscore++;
        compscorepara.innerText=compscore;
        //console.log("lose");
        msg.innerText="You lose";
        msg.style.backgroundColor="red";
    }
}

const gencompchoice =()=>{
    const option=["rock","paper","scissor"];
    const indx=Math.floor(Math.random()*3);
    return option[indx];

}

const playgame=(userchoice)=>{
     //console.log("userchoice=",userchoice);
     const compchoice =gencompchoice();
      //console.log("computerchoice=",gencompchoice());

if(userchoice===compchoice){
    // draw
    gamedraw();
}
else{
    let userwin = true;
    if(userchoice==="rock"){
        userwin= compchoice ==="scissor" ? true:false;
    }
    else if(userchoice==="paper"){

        userwin= compchoice ==="rock" ? true:false;


        
    }
    else{
        userchoice= compchoice==="paper" ? true:false;
    }
    showwinner(userwin);
}

}

choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    });
});