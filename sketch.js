const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball,rope,ground,box1,box2,box3;

function preload(){
  bg = loadImage("bg.png");

}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(100,600,2000,20);
  box1 = new Box(900,100,400,100);
  box2 = new Box(900,100,400,100);
  box3 = new Box(900,100,400,100);
  ball = new Ball(200,200,70,70);
  //rope = new Rope(ball.body,{
  //  x:500,y:50
  //})

}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  ball.display();
  //rope.display();

}


function mouseDragged() {
 Matter.Body.setPosition(ball.body,{
   x:mouseX,y:mouseY
 })
}


