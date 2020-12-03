var backgroundImage,Background
var bowImage,bow
var rBall,rBallImage
var bBall,bBallImage
var gBall,gBallImage
var pBall,pBallImage


function preload(){
backgroundImage = loadImage("background0.png")
bowImage = loadImage("bow0.png")
rBallImage = loadImage("red_balloon0.png")
bBallImage = loadImage("blue_balloon0.png")
gBallImage = loadImage("green_balloon0.png")
pBallImage = loadImage("pink_balloon0.png")
}

function setup() {
  createCanvas(600, 600);
  background = createSprite(0,300,600,600)
  background.addImage(backgroundImage)
  background.scale = 1.5
  
  bow = createSprite(300,300,40,100)
  bow.addImage(bowImage)
  bow.scale = 2
  
}

function draw() {
  
background.velocityX = -3 
if (background.x<0){
  background.x = background.width/4
}
 redBall()
 blueBall()
 greenBall()
 pinkBall()
  
 bow.y = World.mouseY 
  
  
  
  
drawSprites()

  
}

function redBall(){
  for (i=120;i<= 550; i = i+75){
  rBall = createSprite(30,i,10,10)
  rBall.addImage(rBallImage)
  rBall.scale = 0.1
  } 
}

function blueBall(){
  for (i=180;i<= 450; i = i+75){
  bBall = createSprite(110,i,10,10)
  bBall.addImage(bBallImage)
  bBall.scale = 0.1
  } 
}
function greenBall(){
  for (i=160;i<= 500; i = i+75){
  gBall = createSprite(70,i,10,10)
  gBall.addImage(gBallImage)
  gBall.scale = 0.1
  } 
}
function pinkBall(){
  for (i=200;i<= 400; i = i+75){
  pBall = createSprite(150,i,10,10)
  pBall.addImage(pBallImage)
  pBall.scale = 1.1
  } 
}



