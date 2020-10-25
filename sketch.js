
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tree_img
function preload()
{
	tree_img = loadImage('tree.png');
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(750, 600, 1500, 20);
	boy = new Boy(350, 500, 300, 300);
	stone = new Stone(200, 350, 50, 50);
	line = new Line(boy.body, stone.body);
	tree = image(tree_img, 800, 200, 400, 400);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");

  ground.display();
  boy.display();
  stone.display();
  
  drawSprites();
 
}



