var bullet,wall;
var speed,weight;
var damage,thickness;
function setup() {
  createCanvas(1600,400);
  createSprite(30, 200, 30, 100);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  bullet=createSprite(50,200,40,10);
  bullet.shapeColor = "white";
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor = (80,80,80);
  bullet.velocityX= speed;
  damage = 0.5 * weight* speed* speed/thickness* thickness *thickness;
}

function draw() {
  background(0);  
  damage = 0.5 * weight * speed * speed/22500;
  bounce(bullet,wall);
  drawSprites();
  if (bullet.isTouching(wall)){
    bullet.isStatic;
    console.damage;
  }

  if(wall.x - bullet.x < (bullet.width + wall.width)/2)
  {  bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/22509;
    if(damage>55)
    {
      wall.shapeColor=color("red");
    }
    if (damage<55){
      wall.shapeColor=color("green");
    }
  }
}

function bounce(obj1,obj2){
  if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2
    && obj2.x - obj1.x < obj2.width/2 + obj1.width/2) {
      obj1.velocityX = obj1.velocityX * (-1);
      obj2.velocityX = obj2.velocityX * (-1);
}
if (obj1.y - obj2.y < obj2.height/2 + obj1.height/2
  && obj2.y - obj1.y < obj2.height/2 + obj1.height/2){
    obj1.velocityY = obj1.velocityY * (-1);
    obj2.velocityY = obj2.velocityY * (-1);
}
}