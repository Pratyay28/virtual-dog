var ball,database,position;

function setup(){
    database=firebase.database();
  //  console.log(database)
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

//reading from database
var ballPosition=database.ref('ball/position');
ballPosition.on("value",readPosition);



}

function draw(){
    background("white");
if(position!==undefined){




    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}
}

function writePosition(x,y){
database.ref('ball/position').set({
    x:position.x+x,
    y:position.y+y
});


}
function readPosition(data){
//read data from database
position=data.val();
console.log(position);
console.log(position.x);
ball.x=position.x;
ball.y=position.y;

}