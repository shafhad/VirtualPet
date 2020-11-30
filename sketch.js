//Create variables here
var dog, happyDog, database, foodS, foodStock;
var dogImg, happyDogImage;
function preload()
{

  dogImg = loadImage("images/dogImg.png");
  happyDogImage = loadImage("images/dogImg1.png");

}

function setup() {
	createCanvas(500, 500);
  dog.createSprite(250,250,5,5);
  dog.addImage(dogImg);
}


function draw() {  

  drawSprites();

}



