
var randomNumber1=Math.floor(Math.random()*(7-1))+1  ;
var randomNumber2=Math.floor(Math.random()*(7-1))+1  ;
var randomImg1 =("Images/Dado"+randomNumber1+".png");
var randomImg2 = ("Images/Dado"+randomNumber2+".png");

document.querySelector("#dados").setAttribute("src",randomImg1);
document.querySelector("#dados2").setAttribute("src",randomImg2);

if (randomNumber1==randomNumber2){
    document.querySelector("h1").innerHTML="Draw!";
}
else if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="<i class='fas fa-flag'></i> Player 1 Wins!";
}
else {
    document.querySelector("h1").innerHTML=" Player 2 Wins! <i class='fas fa-flag'></i>";
}