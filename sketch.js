var car, wall, speed, weight, thickness;

function setup() {
  createCanvas(1600,400);
  thickness-random(22,83)
  car=createSprite(50, 200, 50, 50);
  wall=createSprite(1500,200,thickness,height/2)
  speed=random(223,321)
  weight=random(30,52)
  
}

function draw() {
  background(255,255,255);  
  car.velocityX=speed
  smack(car,wall)
  drawSprites();
  /**if(wall.x-car.x<(car.width+wall.width)){
    var damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness)
    if(damage>10){
      wall.shapeColor=color(255,0,0)
    }
    if(damage<=10{
      wall.shapeColor=color(0,255,0)
    }
    car.velocityX=0
  }**/
  
}
function smack(ob1, ob2){
  ob1Right=ob1.x+ob1.width
  ob2Left=ob2.x
  if(ob1Right>=(ob2Left)){
    var damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness)
    if(damage>10){
      wall.shapeColor=color(255,0,0)
    }
    if(damage<=10){
      wall.shapeColor=color(0,255,0)
    }
    car.velocityX=0
  }
}