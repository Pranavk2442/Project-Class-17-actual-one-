var monkey , monkey_running, monkeyImage;
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0;
var ground;
var survivalTime=0;

function preload(){
  
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
 monkeyImage=loadImage("sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500,500);
  
  monkey=createSprite(80,400,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.15;

  ground=createSprite(400,450,1000,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  ground.shapeColor="purple";
  
  FoodGroup= new Group();
  obstacleGroup=new Group();
}


function draw() {
  background("blue");
  
  if(keyDown("space")&& monkey.y>250){
    monkey.velocityY=-12;
  }
  
  monkey.velocityY=monkey.velocityY+0.9;
  
  monkey.collide(ground);
  
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
  obstacles();
  
  banana1();
  
  if(FoodGroup.isTouching(monkey)){
    FoodGroup.destroyEach();
    score=score+1;
  }
  
  
  
  drawSprites();
  
  stroke("white");
  textSize(20);
  fill("white")
  text("Score:"+score,400,50);
  
  stroke("black")  ;
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+ survivalTime,100,50);
}

function obstacles(){
  if(frameCount%300===0){
    obstacle=createSprite(500,400,10,10);
    obstacle.addImage(obstaceImage);
    obstacle.scale=0.25;
    obstacle.velocityX=-5;
    obstacle.lifetime=200;
    obstacleGroup.add(obstacle);
  }
}

function banana1(){
  if(World.frameCount%80===0){
    banana=createSprite(500,100, 10,10);
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.y=Math.round(random(200,360));
    banana.velocityX=-6;
    banana.lifetime=200;
    FoodGroup.add(banana);
  }
}






