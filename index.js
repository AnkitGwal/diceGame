var player1="Player 1";
var player2="Player 2";
function enterPlayerNames(){
    player1 = prompt("Enter Player1 Name...");
    player2 = prompt("Enter Player2 Name...");
    document.querySelector("p.Player1").innerHTML= player1;
    document.querySelector("p.Player2").innerHTML= player2;
}

function rollTheDice(){
    setTimeout(function() {
var randomNumber1=Math.floor(Math.random() * 6 ) + 1;
var randomDiceImg="images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src",randomDiceImg);

var randomNumber2=Math.floor(Math.random() * 6 ) + 1;
var randomDiceSrc2="images/dice"+ randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomDiceSrc2);
if(randomNumber2 < randomNumber1){
    document.querySelector("h1").innerHTML=(player1 + " Wins!!");
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML=(player2+ " Wins!!");
}
else{
    document.querySelector("h1").innerHTML="!!...Draw...!!";
}
    },2500)
}