var skateboard;
var skatepark;
var gatorade;

function preload() {
  skateboard= loadImage('skateboard.jpg');
  skatepark= loadImage('skatepark.jpg');
  gatorade= loadImage('gatorade.png');
}

function setup() {
  createCanvas(2000, 1000);
}

function draw() {
  background(0, 255, 0);
  tint(255, 0, 255);
  image(skatepark, 0, 0, 750, 465);
  tint(255, 0, 255);
  image(gatorade, 25, 400, 50, 50);
  tint(255);
  image(skateboard, mouseX, mouseY, 50, 50);
}
