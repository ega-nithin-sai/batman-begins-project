const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rainDrop1;
var ground;
var bruce;
var drops = [];
var temp = 0;

function preload(){
    
}

function setup(){
    createCanvas(400,600);
    engine = Engine.create();
    world = engine.world;

    lightning = new Lightning();

    for(var i = 0; i < 100; i++){
        drops.push(new RainDrop(random(0,400),random(0,600)));
    }
    bruce = new BruceWayne(200,480);
    
}

function draw(){
    background(0);
    Engine.update(engine);

    for(var i = 0; i < 100; i++){
        drops[i].display();
    }

    
    if((frameCount%100===0)||(frameCount%101===0)||(frameCount%102===0)||(frameCount%103===0)||(frameCount%104===0)||(frameCount%105===0)||(frameCount%106===0)||(frameCount%107===0)||(frameCount%108===0)||(frameCount%109===0)||(frameCount%110===0)||(frameCount%111===0)||(frameCount%112===0)){
        lightning.display();
    }
    
    bruce.display();
}   

