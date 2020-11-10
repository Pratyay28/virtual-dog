//Create variables here
var dog,happyDog,database,foodS,foodStock;

function preload()
{
  //load images here
 happyDog=loadImage("images/dogImg.png");
}

function setup() {
  database=firebase.database();
	createCanvas(500, 500);
  
  foodStock=database.ref('Food')
  foodStock.on("value",readStock)
  dog
}


function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addImage(happyDog)
}
  drawSprites();
  //add styles here

}
function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
database.ref('/').update({
  food:x
})
}



