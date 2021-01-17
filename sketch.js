var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
moving = createSprite(random(20,750), 10,60)
box1 = createSprite(150,570,170,20)
box1.shapeColor = "blue"
box2 = createSprite(330,570,170,20)
box2.shapeColor = "purple"
box3 = createSprite(510,570,170,20)
box3.shapeColor = "red"
box4 = createSprite(690,570,170,20)
box4.shapeColor = "pink"
    //create box sprite and give velocity
moving.velocityX = random(1,3)
moving.velocityY = (3)
}

function draw() {
    background("black");
    //create edgeSprite
createEdgeSprites()
drawSprites()
    //add condition to check if box touching surface and make it box
    if(box1.isTouching(moving) && moving.bounceOff(box1)){
        moving.shapeColor = "blue"
    }
    if(box2.isTouching(moving) && moving.bounceOff(box2)){
        moving.shapeColor = "purple"
    }
    if(box3.isTouching(moving) && moving.bounceOff(box3)){
        moving.shapeColor = "red"
    }
    if(box4.isTouching(moving) && moving.bounceOff(box4)){
        moving.shapeColor = "pink"
    }
}

