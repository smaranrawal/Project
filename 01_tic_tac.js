let boxes=document.querySelectorAll(".btn");
let newbtn=document.querySelector("#btn1");
let button=document.querySelector("#btn2");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turn0=true;

const winpattern= [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        console.log("button was clicked");
        if(turn0){
            btn.innerText="X";
            turn0=false;
        }
        else{
            btn.innerText="O";
            turn0=true;
        }
        btn.disabled=true;
        checkwinner();

    });
});
const resetgame =()=>{
    turn0=true;
    buttonenabled();
    msgcontainer.classList.add("hide");
}
const buttondisabled=()=>{
    for(let btn of boxes){
        btn.disabled=true;
    }
   
}
const buttonenabled=()=>{
    for(let btn of boxes){
        btn.disabled=false;
        btn.innerText="";
    }
   
}

const showwinner=(winner)=>{
    msg.innerText=`Congratulation Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    buttondisabled();
}

const checkwinner =(winner)=>{
    for (let pattern of winpattern){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val !="" && pos2val !="" && pos3val !=""){
            if(pos1val===pos2val && pos2val === pos3val){
                console.log("winner");
                showwinner(pos1val);
            }
        }

    }

}

button.addEventListener("click",resetgame);
newbtn.addEventListener("click",resetgame);
