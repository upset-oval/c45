var player 
var enemy
var background
var pineapple

function preload(){
  player = loadImage("hee.png")
  enemy = loadImage("heehee.png")
  backgroundImage = loadImage("funky background.jpg")
  pineapple = loadImage("apple.png")
  platformImg = loadImage("rocket.png")
}


function setup() {
  createCanvas(1280,720);
  bg=createSprite(width/2,height/2)
  bg.addImage(backgroundImage)
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var j = 0; j < 6; j++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  for(var i=100;i<1280;i=i+200){
    platform=createSprite(i,700,Math.round(random(50,100)),Math.round(random(100,500)))
  platform.shapeColor="color"
  }
}

function draw(){
background(0)

  drawSprites()
}
function randomColour(){
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
}












