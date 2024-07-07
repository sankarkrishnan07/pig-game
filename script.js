'use strict';

const diceImage = document.querySelector(".dice");
const currentSP0 = document.querySelector("#current--0");
const currentSP1 = document.querySelector("#current--1");

const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const btnNew = document.querySelector(".btn--new");

const scoreP0 = document.querySelector("#score--0");
const scoreP1 = document.querySelector("#score--1");

diceImage.classList.add("hidden");

scoreP0.textContent=0;
scoreP1.textContent=0;
currentSP0.textContent=0;
currentSP1.textContent=0;


let dice,activePlayer,currentScore,scores,playing;

function init(){
    diceImage.classList.add("hidden");

    scoreP0.textContent=0;
    scoreP1.textContent=0;
    currentSP0.textContent=0;
    currentSP1.textContent=0;


    dice=0;
    activePlayer = 0;
    currentScore=0;
    scores =[0,0];

    document.querySelector(".player--0").classList.add("player--active");
    document.querySelector(".player--1").classList.remove("player--active");
    document.querySelector(".player--0").classList.remove("player--winner");
    document.querySelector(".player--1").classList.remove("player--winner");
    playing=true;
}
init();

function switchPlayer(){
    document.querySelector(".player--0").classList.toggle("player--active");
    document.querySelector(".player--1").classList.toggle("player--active");
    activePlayer = activePlayer === 0? 1:0;
    currentScore=0;
    document.querySelector(`#current--${activePlayer}`).textContent=0;
}
    btnRoll.addEventListener("click",function(){
        if (playing){
        dice = Math.trunc(Math.random()*6+1);
    
        diceImage.src=`dice-${dice}.png`;
        diceImage.classList.remove("hidden");
    
        if (dice!==1){
            currentScore+=dice;
            document.querySelector(`#current--${activePlayer}`).textContent=currentScore;
        }
        else{
            switchPlayer()
        }
        }
    })

    btnHold.addEventListener("click",function(){
        if (playing){
        scores[activePlayer] += currentScore;
        document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];
    
        if (scores[activePlayer]<20){
            
            switchPlayer();
    
        }else{
            document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
            
            playing=false;
        }
        }
    })



btnNew.addEventListener("click",init)