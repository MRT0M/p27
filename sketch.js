
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
  bob1obj=new Bob(200,375,25)
  bob2obj=new Bob(250,375,25)
  bob3obj=new Bob(300,375,25)
  bob4obj=new Bob(350,375,25)
  bob5obj=new Bob(400,375,25)
	ground = new Ground (400,175,800,10);
  ropeA=new Rope (bob1obj.body,ground.body,50,0)
  ropeB=new Rope (bob2obj.body,ground.body,100,0)
  ropeC=new Rope (bob3obj.body,ground.body,150,0)
  ropeD=new Rope (bob4obj.body,ground.body,200,0)
  ropeE=new Rope (bob5obj.body,ground.body,250,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("gray");
  bob1obj.display();
  bob2obj.display();
  bob3obj.display();
  bob4obj.display();
  bob5obj.display();
  ground.display();
  ropeA.display();
  ropeB.display();
  ropeC.display();
  ropeD.display();
  ropeE.display();
  drawSprites();
 
}

function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(bob1obj.body,bob1obj.body.position,{x:15,y:-50})
  }
}



