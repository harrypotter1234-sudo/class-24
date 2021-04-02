const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,pig1,pig2,b1,l1,l2,l3,l4,box3,box4,box5;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    box5 = new Box(810,160,70,70);
    ground = new Ground(600,height,1200,20)
    pig1 = new PIG(810,350)
    pig2 = new PIG(810,220)
    b1 = new BIRD(100,100)
    l1 = new LOG(810,260,20,300,PI/2)
    l2 = new LOG(810,180,20,300,PI/2)
    l3 = new LOG(760,120,20,150,PI/7)
    l4 = new LOG(870,120,20,150,-PI/7)

}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    
    box5.display();
    ground.display();
    pig1.display();
    pig2.display();
    b1.display();
    l1.display();
    l2.display();
    l3.display();
    l4.display();

}