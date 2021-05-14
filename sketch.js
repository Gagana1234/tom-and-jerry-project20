
function preload() {
    //load the images here
    cat_sitting =loadAnimation('images/cat1.png')
    bgimg=loadImage('images/garden.png')
    mouse_standing=loadAnimation('images/mouse1.png')
    cat_walking=loadAnimation('images/cat2.png','images/cat3.png')
    mouse_teasing=loadAnimation('images/mouse2.png','images/mouse3.png')
    cat_lokking=loadAnimation('images/cat4.png')
    mouse_searching=loadAnimation('images/mouse4.png')
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(800,600,40,40)
    mouse=createSprite(200,600,30,30)
    cat.addAnimation('cat1',cat_sitting)
    cat.scale=0.2
    mouse.addAnimation('mouse1',mouse_standing)
    mouse.scale=0.2
    cat.debug=true
    mouse.debug=true
    cat.setCollider('rectangle',0,0,600,100)
    mouse.setCollider('rectangle',0,0,600,250)
}

function draw() {

    background(bgimg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.isTouching(mouse)){
        cat.addAnimation('cat1',cat_lokking)
        mouse.addAnimation('mouse1',mouse_searching)
        cat.velocityX=0
    }
    drawSprites();
}


function keyPressed(){
    
        mouse.addAnimation('mouse1',mouse_teasing)
        cat.addAnimation('cat1',cat_walking)
        cat.velocityX=-2
    console.log('key')

  //For moving and changing animation write code here


}
