var colorArray=["green","red","yellow","blue"];
var customArray=[];
var userArray=[];
//random variable tocheck that the game starts only by 1st time of keypress
var flag=false;

$("body").keypress(function(){
  if(!flag){
    nextSequence();

    flag=true;
  }
});


$(".btn").click(function(){

  var clickedBtn=$(this).attr("id");
  makeSound(clickedBtn);
  animate(clickedBtn);
  userArray.push(clickedBtn);
  checkAnswer(userArray.length-1);
});


function makeSound(name){
  var audio= new Audio('sounds/' + name + '.mp3');
  audio.play();
}


var level=0;
function nextSequence(){
  userArray=[];

  level++;
  $("#level-title").text("Level " + level);

  var randomNumber=Math.floor(Math.random()*4);
  var randomColour=colorArray[randomNumber];

  customArray.push(randomColour);

  //Animating
  $("#" + randomColour).fadeIn(100).fadeOut(100).fadeIn(100);
  makeSound(randomColour);


}

function animate(colorName){
  $("#" + colorName).addClass("pressed");

  setTimeout(function() {
    $("#" + colorName).removeClass("pressed");
  },100);
}

function checkAnswer(index){

  if(customArray[index]==userArray[index]){
    if(customArray.length==userArray.length){
      setTimeout(nextSequence,1000);
    }
  }
  else{
    makeSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart");

    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    reset();
  }
}

function reset(){
  level=0;
  customArray=[];
  flag=false;

}
