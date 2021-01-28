
//change colors
let workingColor;

function changeColor1() {
    document.body.style.backgroundColor = "green";
    workingColor="green";
    new Audio("sounds/greensound.mp3").play();
}

function changeColor2() {
    document.body.style.backgroundColor = "blue";
    workingColor="blue";
    new Audio("sounds/bluesound.mp3").play();
}

function changeColor4() {
    document.body.style.backgroundColor = "purple";
    workingColor="purple";
    new Audio("sounds/purplesound.mp3").play();
}

function changeColor5() {
    document.body.style.backgroundColor = "orange";
    workingColor="orange";
    new Audio("sounds/orangesound.mp3").play();
}

function changeColor6() {
    document.body.style.backgroundColor = "pink";
    workingColor="pink";
    new Audio("sounds/pinksound.mp3").play();
}

function changeColor7() {
    document.body.style.backgroundColor = "yellow";
    workingColor="yellow";
    new Audio("sounds/yellowsound.mp3").play();
}

function changeColor8() {
    document.body.style.backgroundColor = "red";
    workingColor="red";
    new Audio("sounds/redsound.mp3").play();
}


//sound buttons
function playSound1(){
    new Audio("sounds/dog.mp3").play();
}

function playSound2(){
    new Audio("sounds/catsound.mp3").play();
}

//playsound3() at bottem for clear button

function playSound4(){
    new Audio("sounds/horsesound.mp3").play();
}

function playSound5(){
    new Audio("sounds/pigsound.mp3").play();
}


//music buttons
song1= new Audio("music/tiskettasket.mp3");
song2= new Audio("music/PollyWollyDoodle.mp3");
song3= new Audio("music/ThisOldMan.mp3");
song4= new Audio("music/DoYourEarsHangLow.mp3");


function playPause1() { 
    if (song1.paused && song2.paused && song3.paused && song4.paused)
        song1.currentTime=0, 
        song1.play(); 
    else 
        song1.pause(); 
        
  } 

  function playPause2() { 
    if (song2.paused && song1.paused && song3.paused && song4.paused)
        song2.currentTime=0, 
        song2.play(); 
    else 
        song2.pause(); 
  } 

  function playPause3() { 
    if (song3.paused && song2.paused && song1.paused && song4.paused)
        song3.currentTime=0, 
        song3.play(); 
    else 
        song3.pause(); 
  } 

  function playPause4() { 
    if (song4.paused && song3.paused && song2.paused && song1.paused) 
        song4.currentTime=0,
        song4.play(); 
    else 
        song4.pause(); 
  } 




  //doodle pad
  window.addEventListener("load", () => {
   let canvas = document.querySelector("#canvas");
   let ctx = canvas.getContext("2d");

   
    canvas.height = 500;
    canvas.width = 1250;
    canvas. style. background = "white";
    
  
  let painting = false;

  function startPosition(e){
      painting = true;
      draw(e);
  }

  function finishedPosition(){
      painting = false;
      ctx.beginPath();
  }

  function draw(e){
      if(!painting) return;
      ctx.lineWidth = 10;
      ctx.lineCap = "round";
      ctx.strokeStyle = workingColor;
      
   
      ctx.lineTo(e.clientX, e.clientY);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(e.clientX, e.clientY); 
  }

  
canvas.addEventListener("mousedown", startPosition);
canvas.addEventListener("mouseup", finishedPosition);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("touchstart", startPosition);
canvas.addEventListener("touchend", finishedPosition);
canvas.addEventListener("touchmove",draw );

});

function clear(){
    canvas.width=1250;
}

function playSound3(){
    new Audio("sounds/bomb.mp3").play();
   clear();
}


        // Coded by John Lutz 1/27/21
  