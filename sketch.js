const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
var score=0,bg;
function preload(){
  polygon_img=loadImage("polygon.png");
  backgroundImage();
  
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  //level one
  block1 = new Block(300,275);
  block2 = new Block(330,275);
  block3 = new Block(360,275);
  block4 = new Block(390,275);
  block5 = new Block(420,275);
  block6 = new Block(450,275);
  block7 = new Block(480,275);
  //level two
  block8 = new Block(330,235);
  block9 = new Block(360,235);
  block10 = new Block(390,235);
  block11 = new Block(420,235);
  block12 = new Block(450,235);
  //level three
  block13 = new Block(360,195);
  block14 = new Block(390,195);
  block15 = new Block(420,195);
  //top
  block16 = new Block(390,155);

  //set 2 for second stand
  //level one
  blocks1 = new Block(640,175);
  blocks2 = new Block(670,175);
  blocks3 = new Block(700,175);
  blocks4 = new Block(730,175);
  blocks5 = new Block(760,175);
  //level two
  blocks6 = new Block(670,135);
  blocks7 = new Block(700,135);
  blocks8 = new Block(730,135);
  //top
  blocks9 = new Block(700,95);

  //ball holder with slings
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingShot = new Slingshot(this.ball,{x:100,y:200});

}
function draw() {
  if(bg)

  background(bg); 
  

  textSize(20);
  fill("black");
  text(" ***HIT BLOCK *** BY DRAGING YELLOW STONE",200,30);
  text("'***PRESS SPACE FOR SECOND CHANCE***'",230,370)

  ground.display();
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  fill("green");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("gold");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("green");
  block13.display();
  block14.display();
  block15.display();
  fill("gold");
  block16.display();
  fill("green");
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  fill("gold");
  blocks6.display();
  blocks7.display();
  blocks8.display();
  fill("green")
  blocks9.display();
  fill("gold");
  imageMode(CENTER)
  image(polygon_img ,ball.position.x,ball.position.y,50,50);

  slingShot.display();
  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  
  blocks1.score();
  blocks2.score();
  blocks3.score();
  blocks4.score();
  blocks5.score();
  blocks6.score();
  blocks7.score();
  blocks8.score();
  blocks9.score();
  
  stroke("blue")
  strokeWeight(3)
  text("SCORE : "+ score, 750,20)
}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}

function keyPressed()
{
  if(keyCode===32)
  {
    slingShot.attach(this.ball)
  }
}

async function backgroundImage()
{
  var api= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var apij=await api.json();
  var hour =apij.datetime.slice(11,13);
  console.log(hour)
  if(hour>=6 && hour<=18)
  {
     bg=loadImage("bg1.jpg")
     
  }
  else
  {
     bg=loadImage("bg2.png")
  }
  
}