var pet, pet_eating;
var foodImg;

function preload(){
  foodImg = loadImage("./img/food.png");
  pet = loadImage("./img/pet1.png");
  pet_eating = loadImage("./img/pet2.png");
}

function setup(){
  createCanvas(windowWidth,windowHeight);

  food = createSprite(300,650,220,200)
  food.addImage(foodImg);
  food.scale = 0.2;

  pet = createSprite(1000,500,30,30)
  pet.addImage(pet);
  pet.scale = 0.6;

  pet_eating = createSprite(1000,500,30,30);
  pet_eating.addImage("eating",pet_eating);
  pet_eating.scale = 0.6;
}

function draw(){
  background(255, 204, 0);
  drawSprites();

  if(keyIsDown(UP_ARROW)){
    food.y -= 2;
  }

  if(keyIsDown(DOWN_ARROW)){
    food.y += 2;
  }

  if(keyIsDown(RIGHT_ARROW)){
    food.x += 2;
  }

  if(keyIsDown(LEFT_ARROW)){
    food.x -= 2;
  }

  if(food.isTouching(pet)){
    pet.changeImage("eating");
  }
}