$( document ).ready(function(){
  // Generates random number
  var Random = Math.floor(Math.random()*102+19)
  
  // Display random number
  $('#scoreToMatch').text(Random);
  
  //Generate random number for each crystal
  var num1 = Math.floor(Math.random()*12+1)
  var num2 = Math.floor(Math.random()*12+1)
  var num3 = Math.floor(Math.random()*12+1)
  var num4 = Math.floor(Math.random()*12+1)
  
  // Variables to keep track of wins, losses and total
  var playerTotal = 0; 
  var wins = 0;
  var losses = 0;
  
  

$('#wins').text("Wins: " + wins);
$('#losses').text("Losses: " + losses);

// Reset game
function reset(){
      Random = Math.floor(Math.random()*102+19);
      console.log(Random)
      $('#scoreToMatch').text(Random);
      num1 = Math.floor(Math.random()*12+1);
      num2 = Math.floor(Math.random()*12+1);
      num3 = Math.floor(Math.random()*12+1);
      num4 = Math.floor(Math.random()*12+1);
      playerTotal= 0;
      $('#totalScore').text(playerTotal);
      console.log(playerTotal);
      } 
// Display wins
function winAlert(){
alert("Awesome! You won!");
  wins++; 
  $('#wins').text("Wins: " + wins);
  reset();
}
// Display losses
function loseAlert(){
alert ("Too Bad! You lost!");
  losses++;
  $('#losses').text("Losses: " + losses);
  reset()
}
// Clicking crystals
  $('#one').on ('click', function(){
    playerTotal = playerTotal + num1;
    console.log(playerTotal);
    $('#totalScore').text(playerTotal); 
          //Win & lose conditions
        if (playerTotal == Random){
          winAlert();
        }
        else if ( playerTotal > Random){
          loseAlert();
        }   
  })  
  $('#two').on ('click', function(){
    playerTotal = playerTotal + num2;
    console.log(playerTotal);
    $('#totalScore').text(playerTotal); 
        if (playerTotal == Random){
          winAlert();
        }
        else if ( playerTotal > Random){
          loseAlert();
        } 
  })  
  $('#three').on ('click', function(){
    playerTotal = playerTotal + num3;
    console.log(playerTotal);
    $('#totalScore').text(playerTotal);

          if (playerTotal == Random){
          winAlert();
        }
        else if (playerTotal > Random){
          loseAlert();
        } 
  })  
  $('#four').on ('click', function(){
    playerTotal = playerTotal + num4;
    console.log(playerTotal);
    $('#totalScore').text(playerTotal); 
      
          if (playerTotal == Random){
          winAlert();
        }
        else if (playerTotal > Random){
          loseAlert();
        }
  });  
});