
function setup() {
  createCanvas(400,400);
ball=createSprite(200,200,100,100)
ball.shapeColor="red"
}

function draw() 
{
  background(30);
if(keyDown("up")){
ball.y-=10

}

if(keyDown("down")){
  ball.y+=10
  
  }

drawSprites()
}




