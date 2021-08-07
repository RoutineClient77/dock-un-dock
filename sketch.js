var bgImg;
var issImg;
var sc1Img, sc2Img,sc3Img,sc4Img;
var hasDocked = false;
var spacecraft, iss;



function preload(){
  bgImg = loadImage("Docking-undocking/spacebg.jpg");
  issImg = loadImage("Docking-undocking/iss.png");
  sc1Img = loadImage("Docking-undocking/spacecraft1.png");
  sc2Img = loadImage("Docking-undocking/spacecraft2.png");
  sc3Img = loadImage("Docking-undocking/spacecraft3.png");
  sc4Img = loadImage("Docking-undocking/spacecraft4.png");
}


function setup(){
  createCanvas(600,350);
  spacecraft = createSprite(285,240);
  spacecraft.addImage(sc1Img);
  spacecraft.scale = 0.15;
  
  
  iss = createSprite(330,130);
  iss.addImage(issImg);
  iss.scale = 0.25;
}

function draw() {
  background(bgImg);
  spacecraft.addImage(sc1Img);
  
  
  if(!hasDocked){
    spacecraft.x = spacecraft.x + random(-1,1);
  }
  
  if(keyDown("UP_ARROW")){
    spacecraft.addImage(sc2Img);
    spacecraft.y = spacecraft.y-5;
  }

  if(keyDown("DOWN_ARROW")){
    spacecraft.addImage(sc1Img);
    spacecraft.y = spacecraft.y+5;
  }

  if(keyDown("LEFT_ARROW")){
    spacecraft.addImage(sc4Img);
    spacecraft.x = spacecraft.x-5;
  }

  if(keyDown("RIGHT_ARROW")){
    spacecraft.addImage(sc3Img);
    spacecraft.x = spacecraft.x+5;
  }
  
  if(spacecraft.y <= (iss.y + 70) && spacecraft.x <= (iss.x - 10)){
    hasDocked = true;
    textSize(30);
    fill("white");
    text("Docking Successful!", 200,300);
  }

  drawSprites();
}