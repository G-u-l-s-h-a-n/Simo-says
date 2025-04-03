// Event Bubbling....................>>>>>>>>

// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let li = document.querySelectorAll("li");

// div.addEventListener("click", function(){
//     console.log("div was clicked");
// });

// ul.addEventListener("click", function(Event){
//     Event.stopPropagation();
//     console.log("ul was clicked");
// });

// for (li of lis){
//     li.addEventListener("click", function(Event){
//     Event.stopPropagation();
//     console.log("li was clicked");
// });
// }



// Todo App .................................>>>>>>>>>>>>>>>

// let btn = document.querySelector("button");
// let ul = document.querySelector("ul");
// let inp = document.querySelector("input");

// btn.addEventListener("click", function(){
// let item = document.createElement("li");
// item.innerText = inp.value;
// // ul.appendChild(item);  // Only for the adding new Tasks...
// // inp.value = "";


// deleting prostation....................>>>>>> 

// let delBtn = document.createElement("button");
// delBtn.innerText = "delete";
// delBtn.classList.add("delete");

// item.appendChild(delBtn);
// ul.appendChild(item);
// inp.value = "";
// });
// ul.addEventListener("click", function(event){
// if (event.target.nodeName == "BUTTON") {
//     let listItem = event.target.parentElemet;
//     listItem.remove();
//     console.log("deleted");
// }
// });




// <<<<..................Simon Says Game...................>>>>

let gameSeq = [];
let userSeq = [];
let btns = ["yellow", "red", "purple", "green"];


let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if (started == false) {
        console.log("game is started");
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
    }, 500);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(idx){
    // console.log("curr level :", level);

    if (userSeq[idx] === gameSeq[idx]){
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `Game Over ! <br> ${highscore} <br> Your score was <br> ${level} <br> Press any key to Start !!`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout( function (){
            document.querySelector("body").style.backgroundColor = "white"
        }, 500);
        reset();
    }
}
function btnPress() {
    // console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}
let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}