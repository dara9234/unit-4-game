// Computer generated random number given to the player
var computerPickNum= Math.floor(Math.random()* 101)+19;

//assigning all four crsytal variables(ruby,diamond,topaz and emerald) to random numbers
 var ruby  =  Math.floor(Math.random()*12)+1;
 var diamond = Math.floor(Math.random()*12)+1;
 var topaz = Math.floor(Math.random()*12)+1;
 var emerald= Math.floor(Math.random()*12)+1;

//setting player total score variable to 0 
var playerTotalScore=0;

//setting player's wins and losses variables to 0
var wins=0;
var losses=0;


$(document).ready(function(){


 function initial()
 {
    $("#random-area").html(computerPickNum);
    // $("#score-area").html(playerTotalScore);
 }
function resetGame()
{
     //resetting all crystal variables and computerpick to new random picks
       computerPickNum= Math.floor(Math.random()* 101)+19;
       ruby  =  Math.floor(Math.random()*12)+1;
       diamond = Math.floor(Math.random()*12)+1;
       topaz = Math.floor(Math.random()*12)+1;
       emerald= Math.floor(Math.random()*12)+1;

    //resetting player total to zero
     playerTotalScore=0;
    // playGame();

    $("#score-area").html("");
    $("#random-area").html(computerPickNum);
       

}
function playGame(){
 
    $("#diamond").on("click",function(){
    //  global variable diamond that the set random
        //totaluser+=global variable diamond
                //score-title div to display totaluser

        playerTotalScore+=diamond;
        $("#score-area").html( playerTotalScore);
        checkWinStatus();
        
       
    });

    $("#emerald").on("click",function(){
//  global variable emerald that the set random
        //totaluser+=global variable emerald
                //score-title div to display totaluser

        playerTotalScore+=emerald;
       
        $("#score-area").html( playerTotalScore); 
        checkWinStatus();
       
      
    });

    $("#topaz").on("click",function(){
//  global variable topaz that the set random
        //totaluser+=global variable topaz
           //score-title div to display totaluser

        playerTotalScore+=topaz;
       
        $("#score-area").html( playerTotalScore); 
        checkWinStatus();
      
      
        
    });

    $("#ruby").on("click",function(){
//  global variable ruby that the set random
        //totaluser+=global variable ruby
        //score-title div to display totaluser

        playerTotalScore+=ruby;
       
        $("#score-area").html( playerTotalScore);
        checkWinStatus();
       
       
        
    });
}
function checkWinStatus() {

       if(playerTotalScore===computerPickNum) {
        wins++;
        $("#win-area").html("You WON!  "+ "<br> Wins: "+ wins); //displaying win-area div that displays You're a winner!
        
        resetGame(); //calling reset game function
    }
      else if(playerTotalScore>computerPickNum) {
         losses++;
         $("#win-area").html("You Lost! "+  "<br> Losses: "+losses);    //displaying win-area div that displays You're a Loser!
        
         resetGame(); // calling reset game function
     }
}

initial();

playGame();

});

















