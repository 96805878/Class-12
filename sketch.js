var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;




var score;


function preload(){
  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  cloudImage = loadImage("cloud.png")
  
 
  
}

function setup() {

  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //create a ground sprite
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  //creating invisible ground
  invisibleGround = createSprite(200,185,400,10);
  invisibleGround.visible = false;
  


}

function draw() {
  //set background color
  background(180);
  // jump when the space key is pressed
  if(keyDown("space")&& trex.y >= 115) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //stop trex from falling down
  trex.collide(invisibleGround);
  
  //Spawn Clouds
  spawnClouds();
  

  

  drawSprites();
}

//function to spawn the clouds
function spawnClouds(){
 // write your code here 
 

 //checking if framecount is a multiple of 120 which gives a 2 second gap between the code
 if(frameCount%120===0){
    var cloud=createSprite(610,Math.round(random(10,60)),10,10)
    cloud.velocityX=-1
    cloud.addImage(cloudImage)
    cloud.scale=0.5
    //adjustting the layers of the sprites so that the trex is infront of the cloud
    cloud.depth=trex.depth;
    trex.depth+=1;
    if(cloud.x<0){
    
    }
    
}
 
 
}



