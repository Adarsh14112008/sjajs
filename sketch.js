var ball,BackgroundImage,BImage;
var database1;
var data;
function setup(){
    BImage=loadImage("Hot Air Ballon-02.png")
    BackgroundImage=loadImage("Hot Air Ballon-01.png")
    database1= firebase. database();
    data= database1.ref( "ball/pos");
    data.on("value",readPos);
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    ball.addImage(BImage)
    ball.scale=0.2
}

function draw(){
    background(BackgroundImage);
    
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    database1.ref( "ball/pos").set({x: ball.x + x,y: ball.y + y})
    
}
function readPos(data){
    ball.x=data.val().x;
    ball.y=data.val().y;
    
}
