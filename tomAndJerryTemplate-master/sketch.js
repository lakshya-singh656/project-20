var garden,gardenImage;
var jerry,jerryImage,jerryseetom;
var tom,tomSiting,tomMoving,tomCatch;
function preload() {
    //load the images here
    jerryImage=loadAnimation("images/jerryOne.png","images/jerryTwo.png","images/jerryThree.png");
    tomSiting=loadImage("images/tomOne.png")
    tomMoving=loadAnimation("images/tomTwo.png","images/tomThree.png")
    tomCatch=loadImage("images/tomFour.png")
    jerryseetom=loadImage("images/jerryFour.png")
    gardenImage=loadImage("images/garden.png")


}

function setup(){
    createCanvas(1000,700);
    //create tom and jerry sprites here

    garden=createSprite(500,350)
    garden.addImage("garden",gardenImage)

    jerry=createSprite(100,625,50,50)
    jerry.addAnimation("jerry",jerryImage);
    jerry.scale=0.1;
    jerry.debug=true;
    jerry.setCollider("circle",0,0,500)

    tom=createSprite(800,600,50,50)
    tom.addAnimation("tom,",tomSiting)
    tom.scale=0.2;
    tom.velocityX=0;
    tom.debug=true;
    tom.setCollider("circle",0,0,700)


    


    


}

function draw() {

    
    //Write condition here to evalute if tom and jerry collide

    

    
      
    

   
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === LEFT_ARROW){
    tom.velocityX = -5;
    tom.addAnimation("tom",tomMoving)
    tom.changeAnimation("tom",tomMoving)
    if(tom.x-jerry.x<(tom.width-jerry.width)/2){
      tom.changeImage("tom",tomCatch)
      jerry.changeImage("jerry",jerryseetom) 
    }
    
    
}




  


}
