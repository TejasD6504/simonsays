let gameseq=[];
let userseq=[]; 
let highscore = [];

let boxes = ["first","second","third","forth"];

let started = false;
let level = 0;


let h3 = document.querySelector("h3");

document.addEventListener("keypress", function(){
  if(started == false)
  {
    console.log("Game started!!");
    started = true;
     
    levelup();
  }
});

function btnFlash(box){
    box.classList.add("flash");
    setTimeout(function(){
           box.classList.remove("flash");
    }, 250);
}


function userFlash(box){
  box.classList.add("userflash");
  setTimeout(function(){
         box.classList.remove("userflash");
  }, 250);
}


function levelup(){
  userseq = [];
  level++;
  h3.innerText = `Level ${level}`;

  let ran = Math.floor(Math.random() *3);
  let rancolor = boxes[ran];
  let ranbtn = document.querySelector(`.${rancolor}`);
  //  console.log(ran);
  //  console.log(rancolor);
  //  console.log(ranbtn);
  gameseq.push(rancolor);

  btnFlash(ranbtn);
}


function highsc(){
  let high = 0;
  for(let i=0;i<=highscore.length-1;i++)
  {
      if(highscore[i] > high)
      {
        high = highscore[i];
      }
    }

    return high;
  }

function checkans(index){
  
   if(userseq[index] === gameseq[index])
   {
      if(userseq.length == gameseq.length)
      {
        setTimeout(levelup,1000);
      }
   }else {
    h3.innerText = `Game Over ! Your score is ${level}. Press any key to start`;
   document.querySelector("body").style.backgroundColor="red";
    setTimeout(function() {
      document.querySelector("body").style.backgroundColor="white";
    },150)

    highscore.push(level);

    let highs = highsc();
    let hi = document.querySelector("#high");
    hi.innerText =`The Highest score is ${highs}`;
    
    reset();
   }
}

function boxpress(){
  let btn = this;
  userFlash(btn);

  userColor = btn.getAttribute("id");
  userseq.push(userColor);

  checkans(userseq.length-1);
}

let allbtns = document.querySelectorAll(".box");

for(button of allbtns){
  button.addEventListener("click", boxpress);
}

function reset(){
   gameseq=[];
 userseq=[]; 
 started = false;
level = 0;
}



