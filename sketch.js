var bullet1,wall1;
var bullet2,wall2;
var bullet3,wall3;
var bullet4,wall4;
var parkingline1,parkingline2,parkingline3;
var speed,weight,thickness;

function setup() {
  createCanvas(1600,800);
  bullet1 = createSprite(100, 100, 40, 20);
  bullet1.shapeColor = "white";
  wall1 = createSprite(1500,100,thickness,60);
  bullet2 = createSprite(100,300,40,20);
  bullet2.shapeColor = "white";
  wall2 = createSprite(1500,300,thickness,60);
  bullet3 = createSprite(100,500,40,20);
  bullet3.shapeColor = "white";
  wall3 = createSprite(1500,500,thickness,60);
  bullet4 = createSprite(100,750,40,20);
  bullet4.shapeColor = "white";
  wall4 = createSprite(1500,750,thickness,60);
  parkingline1 = createSprite(800,200,1600,5);
  parkingline1.shapeColor = "white";
  parkingline2 = createSprite(800,400,1600,5);
  parkingline2.shapeColor = "white";
  parkingline3 = createSprite(800,600,1600,5);
  parkingline3.shapeColor = "white";
  speed = random(223,321);
  weight = random(30,52);
  thickness = (22,83)

  bullet1.velocityX = 4;
  bullet2.velocityX = 4;
  bullet3.velocityX = 4;
  bullet4.velocityX = 4;
}

function draw() {
  background(0); 
  
  if(hasCollided(bullet1,wall1)){
    bullet1.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage>10){
      wall1.shapeColor = color(255,0,0);
    }

    if(damage<10){
      wall1.shapeColor = color(0,255,0);
    }
  }

  if(hasCollided(bullet2,wall2)){
    bullet2.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage>10){
      wall2.shapeColor = color(255,0,0);
    }

    if(damage<10){
      wall2.shapeColor = color(0,255,0);
    }
  }

  if(hasCollided(bullet3,wall3)){
    bullet3.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage>10){
      wall3.shapeColor = color(255,0,0);
    }

    if(damage<10){
      wall3.shapeColor = color(0,255,0);
    }
  }

  if(hasCollided(bullet4,wall4)){
    bullet4.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage>10){
      wall4.shapeColor = color(255,0,0);
    }

    if(damage<10){
      wall4.shapeColor = color(0,255,0);
    }
  }

  drawSprites();
}

function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}