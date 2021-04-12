var background_img;

var cat_img , cat2_img; 
 
var mouse_img , mouse2_img ; 


var cat , mouse 


function preload() {
    
    background_img  = loadImage("images/garden.png")
    cat_img = loadImage("images/cat1.png")
    cat2_img = loadImage("images/cat2.png")

    mouse_img = loadImage("images/mouse1.png") 
    mouse2_img = loadImage("images/mouse2.png")

}

function setup(){
    createCanvas(1000,800);
    
    cat = createSprite(800,500)
    cat.addImage(cat_img)
    cat.scale = 0.2

    mouse = createSprite(100,500)
    mouse.addImage(mouse_img)
    mouse.scale = 0.2


    

}

function draw() {

    background(background_img);

    if(keyDown("LEFT_ARROW"))
{
    cat.x = cat.x-5
}


    if(cat.isTouching(mouse))
    {
        cat.addImage(cat2_img)
        mouse.addImage(mouse2_img)
    }
   

    drawSprites();
}


