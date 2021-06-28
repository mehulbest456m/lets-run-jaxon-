var King, King_image;
var road;
var roadImage;

function preload(){

roadImage=loadImage("road.png");
King_Image=loadAnimation("King1.png", "King2.png", "King3.png", "King4.png", "King5.png");  
  
}

function setup(){
  createCanvas(400,400);

  //create a road Sprite and a moving background
    road=createSprite(200, 200);
    road.addImage(roadImage);
    road.velocityY=4;
    road.scale=1.2;

 //create a king Sprite
   King=createSprite(200, 200, 20, 50); 
   King.addAnimation("running", King_Image); 
   King.scale=1;

}

function draw() {
  background(0);
  
  //make King move with the mouse's X position
    King.x=mouseX
  
  //code to reset the background
    if(road.y>400){
      road.y=height/2;
}

  drawSprites();
}