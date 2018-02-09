var positionX;
var xSpeed;
var positionY;
var ySpeed;

var mic;

function setup() {
  createCanvas(windowWidth, windowHeight);
  positionX = random(400);
	positionY = random(400);
  background('#232221');
  xSpeed = 5;
  ySpeed = 5;

  noStroke();
  colorMode(HSB);
  background('#232221');

  mic = new p5.AudioIn();
  mic.start();
}


// when the window is resized, the canvas will move along with the window
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background('#232221');
}



function draw() {
  // the size of the ball changes depending on the audio level
  var d = map(mic.getLevel(), 0, 0.3, 75, 350);

  // When the ball moves out of the window, it will turn in a new direction
  // and move -5 pixels along either the y- or x-aksis
  if(positionX > width || positionX < 0) {
    xSpeed = xSpeed * -1;
  }
  if(positionY > height || positionY < 0) {
    ySpeed = ySpeed * -1;
  }

  // this makes sure the ball keeps moving
  positionX = positionX + xSpeed;
  positionY = positionY - ySpeed;

  // ball
  strokeWeight(1);
  stroke(2);
  ellipse(positionX, positionY, d, d);
  fill(random(265), 265, 265);

}
