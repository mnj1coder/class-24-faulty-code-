
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball1;
var rect1;
var rect2;
var rect3;

function setup() {

	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	ball1=new BallClass(100,100,50);

	rect1=new DustClass(500,500,100,20);
	rect2= new DustClass(450,460,20,100);
	rect3= new DustClass(550,460,20,100);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  

  ball1.display();
  rect1.display();
  rect2.display();
  rect3.display();

  Keypressed()
  drawSprites();
 
}

function keypressed(){
	if (KeyCode === UP_ARROW){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:85,y:-85})
	}
}
	 
