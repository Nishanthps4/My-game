var bg, bgimg

function preload(){
bgimg=loadImage("space.png")
}
function setup(){
createCanvas(windowWidth - 100, windowHeight - 100)

bg=createSprite((windowWidth-100)/2, (windowHeight-100)/2, windowWidth-100, windowHeight-100);
bg.addImage(bgimg);
bg.velocityY=2
}
function draw(){
  background(0);
if(bg.height>windowHeight/2){
  bg.height=windowHeight/2;
}

  drawSprites();
}