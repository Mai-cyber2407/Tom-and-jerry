var bgImage;
var cat,cat_sitting,cat_walking1,cat_walking2,cat_happy;
var mouse,mouse_standing,mouse_teasing,mouse_happy

function preload() {
    //load the images here
bgImage = loadImage(garden.png);
cat_sitting = loadAnimation(cat1.png);
cat_walking1 = loadAnimation(cat2.png);
cat_walking2 = loadAnimation(cat3.png);
cat_happy = loadAnimation(cat4.png);

mouse_standing = loadAnimation(mouse2.png);
mouse_teasing = loadAnimation(mouse3.png);
mouse_happy = loadAnimation(mouse1.png);
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat = createSprite(800,500)
cat.addAnimation("sitting",cat_sitting);
cat.addAnimation("running",cat_walking1,cat_walking2);
cat.addAnimation("happy",cat_happy);

mouse = createSprite(300,500);
mouse.addAnimation("standing",mouse_standing);
mouse.addAnimation("teasing",mouse_teasing);
mouse.addAnimation("happy",mouse_happy);
}

function draw() {

    background(bgImage);
    //Write condition here to evalute if tom and jerry collide
if(cat.x - mouse.x <(cat.width - mouse.width)/2){
    cat.velocityX=0;
    mouse.velocityX=0;
    cat.changeAnimation("happy",cat_happy);
    mouse.changeAnimation("happy",mouse_happy);
}

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyPressed === RIGHT_ARROW){
    mouse.changeAnimation("teasing",mouse_teasing);
    mouse.frameDelay = 25;
}
if(keyPressed === LEFT_ARROW){
    cat.changeAnimation("running",cat_walking1,cat_walking2)
    cat.frameDelay = 25;
}
}
