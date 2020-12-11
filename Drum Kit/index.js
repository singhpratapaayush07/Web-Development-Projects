
for(var i=0;i<document.querySelectorAll(".drum").length;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var pressedBtn= this.innerHTML;
    playAudio(pressedBtn);
    animate(pressedBtn);
  });
}


document.addEventListener("keydown",function(event){
  var key=event.key;
  playAudio(key);
  animate(key);
})



function playAudio(word){

  switch (word) {
    case "w":
      sound=new Audio('sounds/tom-1.mp3');
      sound.play();
      break;

    case "a":
      sound=new Audio('sounds/tom-2.mp3');
      sound.play();
      break;

    case "s":
      sound=new Audio('sounds/tom-3.mp3');
      sound.play();
      break;

    case "d":
      sound=new Audio('sounds/tom-4.mp3');
      sound.play();
      break;

    case "j":
      sound=new Audio('sounds/snare.mp3');
      sound.play();
      break;

    case "k":
      sound=new Audio('sounds/crash.mp3');
      sound.play();
      break;

    case "l":
      sound=new Audio('sounds/kick-bass.mp3');
      sound.play();
      break;


    default:
      console.log(pressedBtn);

  }

}

function animate(key){
  var newkey="."+ key;

  //adds pressed class to selected attribute (button here)
  document.querySelector(newkey).classList.add("pressed");

  setTimeout(function(){
    document.querySelector(newkey).classList.remove("pressed");
  },100);
}
