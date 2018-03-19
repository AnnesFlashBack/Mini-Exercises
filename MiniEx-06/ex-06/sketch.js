var circles = []; // An array for the circles
var startCol = 0; // Beginning color
var bgcolor;
var opacity = 5;
var value = 0; // Numerical value for the background color
var colorSpeed = 0.5; // How fast the colors change
var song1, song2; // Only one of the songs were used, but I was indecisive as I worked so I switched between the two

function preload() {
  song1 = loadSound('assets/mind.m4a');
  song2 = loadSound('assets/alone.m4a');
}

function setup() {
  createCanvas(windowWidth-5, windowHeight-5); // Made the canvas slightly smaller, because I do not like the scroll bars that appear on my screen when I use it
  background(0);
  noStroke(); // The circles have no border
  frameRate(60); // Locked the framrate
  song2.loop(); // Song is set to loop
  bgcolor = color(value, opacity); // Sets opacity for the background, making the trail behind the circles possible
  setInterval(createNewCircle, 300) // A new circle is made every 0.3 seconds
}


function createNewCircle() {
 circles.push(new Circle(random(width), height+50)); // A new circle is made just outside of the canvas
}

function draw() {
  background(bgcolor);
  push();
  colorMode(HSB, 360, 100, 100);
  for (i = 0; i < circles.length; i++) { // The colored circles will continuously spawn, using show() and move()
  	circles[i].show();
    circles[i].move();
  }
  pop();
}


// I made this class based on notes from a friend, so I can't fully explain why works the way it does.
// It works pretty much the same way as a regular class, and the program could be tweaked into working the same way with the regular class, I believe, but
// since the friend who helped me preferred this way that was how I ended up doing it.
function Circle(x, y) {
  this.position = createVector(x, y); // Position of the circles
  this.getColor = floor(random(360)); // Random color of the circles. floor() rounds the random number down to the closest int.
  this.speed = random(-1, -3); // Randomized speed that only goes up
  this.sway = random(-2, 2); // An experimental speed for the x position, wasn't used in the end
  this.d = random(25,100); // The size of the circles is random

  this.show = function() {
    if(startCol == 0) {
      fill(this.getColor, 100, 100); // Fills with a random color
      this.getColor+=colorSpeed; // The color will change over time

			if (this.getColor >= 360) {
				this.getColor = 0;
			}
    }

    this.move = function() {
      this.position.y += this.speed; // The random speed for the Circle
      //this.position.x += this.sway; // If this is activated the circles will go in directions other than straight
    }

    ellipse(this.position.x, this.position.y, this.d, this.d); // The circles are drawn
  }
}

// When the mouse is clicked, the background changes color
function mouseClicked() {
  if(value === 0) {
    value = 200;
    bgcolor = color(value, opacity);
  } else {
    value = 0;
    bgcolor = color(value, opacity);
  }
}
