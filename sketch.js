/*var name = "ABC XYZ";
console.log(name) ;// A-Z a-z 0-9 special symbols @#$%^&*()_+!~`

var score = 100;
console.log(score); // number: 0-9.. score = score+1

var result= true;
console.log(result);

var a;
console.log(a); // undefined

var b = null;
console.log(b);


var array1 = [1,2,3,4,5,6,7,8];
console.log(array1);
array1.push(10);


var array2 = ["abc","xyz","a","b","c","d","aa bb","qq tt","uu oo"];
console.log(array2[5]);
i
var array3 = ["abc",100,true];
console.log(array3[2]);
console.log(array3[100]);

var array4 = [[100,100,300,500,"abc",true], [5,5, false], [20,100, "false"], [450,34, 45.67]]
console.log(array4[1][2]);
console.log(array4[2][2]);


var array5 = [[1,2],[500,200],[4,5],[6,7],[8,9]]
for(i=0;i<array5.length;i=i+1)

{
    console.log(array5[i][0] +"  "+array5[i][1] )
}*/


const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;
var score=0;

function preload() {
    //backgroundImg = loadImage("sprites/bg.png");
    getTime(); 
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);

    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(190,30);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:190, y:30});
    
}

function draw(){
    if(backgroundImg){
        background(backgroundImg);
    }
    
    Engine.update(engine);
    //strokeWeight(4);
    ground.display();
    platform.display();
    
    box1.display();
    box2.display();
    
    pig1.display();
    pig1.score();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    pig3.score();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    
    //log6.display();
    slingshot.display(); 
    textSize(25);
    text("Score: "+ score, 800, 50);  
    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(bird.body, {x: 200, y: 50});
        bird.trajectory=[]
        slingshot.attach(bird.body);
    }
}

async function getTime(){
    var response= await fetch("https://worldtimeapi.org/api/timezone/America/New_York");
    var responsejson = await response.json();
    var datetime = responsejson.datetime;
    var hour=datetime.slice(11, 13);
    if(hour>=06 && hour<=18){
        bg="sprites/bg1.png"
    }
    else{
        bg="sprites/bg2.jpg"
    }
    backgroundImg=loadImage(bg);
} 
