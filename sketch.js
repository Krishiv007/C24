const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);

    box1 = new Box(900,380,80,80);
    box2 = new Box(1100,380,80,80);
    pig1 = new Pig(1000,380);
    log1 = new Log(1000,350,300,PI/2);
    box3 = new Box(900,330,80,80);
    box4 = new Box(1100,330,80,80);
    pig2 = new Pig(1000,330);
    log2 = new Log(1000,300,300,PI/2);
    
    box5 = new Box(1000,280,80,80);
    log3 = new Log(960,275,150,PI/7);
    log4 = new Log(1040,275,150,-PI/7);


    
     bird = new Bird(100,100);
   
}

function draw(){
    background(0);
    Engine.update(engine);
    
    //console.log(box2.body.position.x);
   // console.log(box2.body.position.y);
   // console.log(box2.body.angle);
    
    ground.display();
    box1.display();
    box2.display();
    pig1.display();
    log1.display();
    
    box3.display();
    box4.display();
    pig2.display();
    log2.display();

    box5.display();

    log3.display();
    log4.display();
    
    bird.display();
   
}