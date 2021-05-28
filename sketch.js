
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;




function preload(){

  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

  ground = new Ground(100,500,650,30)

  ball = new Ball(200,300,50)

   block = new Block(300,400,50,50)
   block1 = new Block(300,330,50,50)
   block2 = new Block(300,360,50,50)
   block3 = new Block(300,390,50,50)
   block4 = new Block(300,420,50,50)
   block5 = new Block(300,450,50,50)
   block6 = new Block(300,480,50,50)
   block7 = new Block(400,400,50,50)
   block8 = new Block(400,430,50,50)
   block9 = new Block(400,460,50,50)
   block10 = new Block(400,490,50,50)
   block11 = new Block(500,400,50,50)
   block12 = new Block(500,430,50,50)
   block13 = new Block(500,460,50,50)
   block14 = new Block(500,490,50,50)

   sling = new Slingshot(ball.body,{x:100, y:200})

  Engine.run(engine);
}

function draw() {
 background(230);

  ground.display()
  ball.display()
  
  block.display()
  block1.display()
  block2.display()
  block3.display()
  block4.display()
  block5.display()
  block6.display()
  block7.display()
  block8.display()
  block9.display() 
  block10.display()
  block11.display() 
  block12.display() 
  block13.display() 
  block14.display() 
  
  sling.display()

}