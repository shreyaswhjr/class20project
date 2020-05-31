var car,wall;
var speed,weight;

function setup() {
  speed=random(5,10);
  weight=random(400,1500);
  car=createSprite(50,200,50,50);
  wall=createSprite(1500,200,60,height/2);
  car.velocityX=speed;
}


  

function draw() {
  createCanvas(1600,400);
  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;
    if(deformation>180){
      car.shapecolor=color(255,0,0);
    }
    if(deformation<180&&deformation>100){
      car.shapecolor=color(230,230,0);
    }
    


  }
  