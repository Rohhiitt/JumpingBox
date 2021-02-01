var canvas;
var music;
var edges;
var box;
var surface1,surface2,surface3,surface4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    
    box = createSprite((Math.round(random(20,750))),300,30,30);
    box.shapeColor = "white";
    box.velocityX = 4;
    box.velocityY = 4;

    surface1 = createSprite(50,590,260,15);
    surface1.shapeColor = "green";

    surface2 = createSprite(250,590,190,15);
    surface2.shapeColor = "black";

    surface3 = createSprite(440,590,190,15);
    surface3.shapeColor = "violet";

    surface4 = createSprite(670,590,255,15);
    surface4.shapeColor = "orange";

}

function draw() {
    background("blue");
   edges = createEdgeSprites();

   if(surface1.isTouching(box) && box.bounceOff(surface1)){
       box.shapeColor = "green";
       music.play();
   }

   if(surface2.isTouching(box) && box.bounceOff(surface2)){
       box.shapeColor = "black";
   }

   if(surface3.isTouching(box) && box.bounceOff(surface3)){
       box.shapeColor = "violet";
       box.velocityY = 0;
       box.velocityX = 0;

       music.stop();
   }

   if(surface4.isTouching(box) && box.bounceOff(surface4)){
       box.shapeColor = "orange";
   }
   

   box.bounceOff(edges);

    drawSprites();
    //add condition to check if box touching surface and make it box
}
