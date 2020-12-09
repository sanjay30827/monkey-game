
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var ground
var score
var survivalTime=0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
    createCanvas(400,400);
  
  
   monkey = createSprite(80,315,20,20);
   monkey.addAnimation("sprite",monkey_running)
   monkey.scale=0.1;
  
   ground = createSprite(400,350,900,10);
   ground.velocityX =-4;
   ground.x = ground.width/2;
   console.log(ground.x);
  
  bananaGroup =new Group();
   obstacleGroup =new Group();
}


function draw() {
background("white");
  
  if(keyDown("space") && monkey.y >= 250) {
      monkey.velocityY = -12;
  }
  
   monkey.velocityY = monkey.velocityY + 0.8
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
   monkey.collide(ground);
  
  stroke("white");
  textSize(20);
  fill("white");
  text("score:"+score,380,50);
  
   stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("survival Time:"+survivalTime,200,50);
  
  food();
  Obstacles();
  
  drawSprites();
}

function food (){
  if(frameCount % 80 === 0) { 
    var banana = createSprite(280,165,10,40);
     banana.velocityX= -4;
     banana.addImage(bananaImage,"banana.png");
     banana.scale=0.1;
     banana.lifetime = 200;
      bananaGroup.add(banana);
    
    var rand = Math.round(random(120,200));}

  }

function Obstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(350,330,10,40);
    obstacle.velocityX = -6;
    var rand = Math.round(random(1,6));
    
    
    obstacle.addImage(obstaceImage,"obstacle.png")  
    obstacle.scale = 0.1;
    obstacle.lifetime = 300;
    
    obstacleGroup.add(obstacle);
  }
}






