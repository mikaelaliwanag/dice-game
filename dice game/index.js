//random # 1-6 for first dice
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

//dice1.png - dice6.png for leftdice
var randomDiceImage1 = "images/dice" + randomNumber1 + ".png"; 

//player 1 (left) dice image
var player1 = document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage1); 

//random # 1-6 for second dice 
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

//dice1.png - dice6.png for right dice
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

//player 2 (right) dice image
var player2 = document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2); 

//Displays winner
if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins!";
} else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 wins!";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}

