let gameSeq=[];
let userSeq=[];

let started = false;

let level = 0;
let h2 = document.querySelector("h2");

let btns =["yellow" , "pink" , "blue" , "purple" ];

document.addEventListener("keypress", function(){
    if(started==false){
        console.log("game started");
        started = true;
        levelUp();
    }   
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function() {
        btn.classList.remove("userFlash");
    }, 250);
}

function levelUp(){
    userSeq =[];
    level++;
    h2.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random()*4);
    let randColor = btns[randIdx];
    let randomBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randomBtn);

}

function checkAns(idx){

    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000)
        }
    }else{
        h2.innerHTML=`You lost! Your score was <b>${level-1}</b> <br /> Press any key to start again`;
        document.body.style.backgroundColor = "red";
        setTimeout(function(){
            document.body.style.backgroundColor = "white";
        },150
        )
        reset();
    }
}

function btnPress() {
    console.log("button was pressed");
    let btn = this;
    console.dir(btn);
    userFlash(btn);
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userSeq);

    checkAns(userSeq.length-1);
    
}

let allBtns = document.querySelectorAll(".btn");

for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    level = 0;
    gameSeq = [];
    userSeq = []
}
