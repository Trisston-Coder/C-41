var unbrella, drops, man;

var maxDrops = 100;

function preload(){
    man.addImage("Man.png");

function setup(){
    var canvas = createCanvas(500,700);
    
    umbrella = createSprite(200,200,20,20);
    //drop = createSprite(200,200,20,20);


}

function draw(){
    background("black");

    for(var i=0; i<maxDrops; i++){
       drops.push(new createDrop(random(0,400), random(0,400)));
    }

    umbrella.display();
}  



}