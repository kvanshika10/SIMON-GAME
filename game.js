var buttonColors=["red","blue","green","yellow"];
var gamePattern=[];
var userClickedPattern = [];
var started=false;
var level=0;

$(document).keypress(function(){
  if(started==false){
    console.log(event.key);
  $("#level-title").text="level "+level;
  gamesequence();

  started=true;
}
});



$(".btn").click(function(){

  var userChosenColour =$(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length-1);

});

function gamesequence(){
  level++;
$("#level-title").text("Level "+level);
  var randomNumber=Math.floor(Math.random()*4);
  var randomChooseColors=buttonColors[randomNumber];
gamePattern.push(randomChooseColors);

$("#" + randomChooseColors).fadeIn(5).fadeOut(5).fadeIn(5);

playSound(randomChooseColors);
}
function checkAnswer(currentlevel){
  if(userClickedPattern[currentlevel]==gamePattern[gamePattern.length-1]){
      console.log("success");
      setTimeout(function(){
  gamesequence();},0.5);
}else {
  playSound("wrong");
$("body").addClass("game-over");
setTimeout(function(){
  $("body").removeClass("game-over");},200);
  startover();
$("h1").html("Game Over, Press Any Key to Restart");
}
}


function playSound(name){
     var sound =new Audio("sounds/"+name+".mp3");
     sound.play();
  }
function animatePress(currentcolor){
  var k=$("#"+currentcolor);
  k.addClass("pressed");
    setTimeout(function(){
      k.removeClass("pressed");},100);

}
function startover(){
  level=0;
  started=false;
  gamePattern=[];
  userClickedPattern=[];

}
