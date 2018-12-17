const side1 = new Image ('img/dice1.png')
const diceImg1 = document.getElementById('side1');
// const side2 = new Image ('img/dice2.png')
// const side3 = new Image ('img/dice3.png')
// const side4 = new Image ('img/dice4.png')
// const side5 = new Image ('img/dice5.png')
// const side6 = new Image ('img/dice6.png')
const reset = document.getElementById('reset');
const roll = document.getElementById('roll');
let counter = document.querySelector('.counter');
let yourRoll = document.querySelector('.theRoll');
let totalScore = 0;




function diceRoll(){
    var random= Math.floor((Math.random()*6)+1);
    return random;
} 

function print(number){
    totalScore = totalScore+number;
    counter.innerHTML =  totalScore;
    yourRoll.innerHTML =   number;
}

roll.addEventListener('click', ()=>{
    let result = diceRoll();
    print(result);

    diceImg1.style.visibility= "visible";
    diceImg1.src = 'img/dice' + result + '.png'


     if (result == 1){
        document.querySelector('.totalTxt').innerHTML = 'GAME OVER';
        document.querySelector('.roll').innerHTML = 'GAME OVER';
        // window.alert("You big fat loser, you rolled a one");
        location.reload();
        
        
    }
    else if(totalScore >= 20){
        //  window.alert("WINNER");
        document.querySelector('.totalTxt').innerHTML = 'WINNER WINNER CHICKEN DINNER';
        document.querySelector('.roll').innerHTML = 'WINNER WINNER CHICKEN DINNER';
        
    }

    
})
reset.addEventListener('click',()=>{
    location.reload();
}) 


   
    