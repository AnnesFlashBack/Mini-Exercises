var ship; // Spaceship
var borders, bullets, blocks, tinyBlocks; // Group variables
var song1, song2, song3, song4, song5;
var fft, peakDetect, amp; // Music detection variables
var score = 0; // Your starting score is 0
var highScore = 0;
var blockScore = 10; // A large block gives 10 points
var tinyBlockScore = 5; // A small block gives 5 points
var button1, button2, button3, button4, button5;
var bounce1, bounce2, bounce3, bounce4, bounce5, bounce6, bounce7, bounce8, bounce9, bounce10; // Variables for the background circles


function preload() { // All the songs that are used are loaded prior to setup()
  song1 = loadSound("assets/music/war.mp3");
  song2 = loadSound("assets/music/harder.mp3");
  song3 = loadSound("assets/music/setfree.mp3");
  song4 = loadSound("assets/music/gap.mp3")
  song5 = loadSound("assets/music/pop.mp3");
}

function setup() {
  createCanvas(1000,685);

  borders = new Group(); // The gray borders on the canvas
  bullets = new Group(); // The bullets the spaceship fires
  blocks = new Group(); // The big blocks
  tinyBlocks = new Group(); // The small blocks

  bounce1 = new Bouncy(); // A new background ball is called from the Bouncy class
  bounce2 = new Bouncy();
  bounce3 = new Bouncy();
  bounce4 = new Bouncy();
  bounce5 = new Bouncy();
  bounce6 = new Bouncy();
  bounce7 = new Bouncy();
  bounce8 = new Bouncy();
  bounce9 = new Bouncy();
  bounce10 = new Bouncy();

  song1.play();

  ship = createSprite(mouseX, mouseY);
  ship.addAnimation("normal", "assets/ship0002.png", "assets/ship0007.png"); // The thruster animation for the spaceship

  fft = new p5.FFT();
  amp = new p5.Amplitude();
  peakDetect = new p5.PeakDetect();

  // The five different buttons are called and given definitions
  button1 = createButton('LEVEL 1');
  button1.mousePressed(switchSong1);
  button1.position(20, 650);
  button2 = createButton('LEVEL 2');
  button2.mousePressed(switchSong2);
  button2.position(100, 650);
  button3 = createButton('LEVEL 3');
  button3.mousePressed(switchSong3);
  button3.position(180, 650);
  button4 = createButton('LEVEL 4');
  button4.mousePressed(switchSong4);
  button4.position(260, 650);
  button5 = createButton('LEVEL 5');
  button5.mousePressed(switchSong5);
  button5.position(340, 650);

  // Adds the gray lines to the borders group
  for(var i = 0; i<6; i++) {
    var lineTop = createSprite(width/2, -450, 1000, 1000);
    lineTop.shapeColor = color(50);
    var lineLeft = createSprite(-50, height/2, 100, 700);
    lineTop.shapeColor = color(50);
    var lineBottom = createSprite(width/2, 1600, 1000, 2000);
    lineBottom.shapeColor = color(100);
    var lineRight = createSprite(1300, height/2, 600, 700);
    lineTop.shapeColor = color(100);
    borders.add(lineTop);
    borders.add(lineBottom);
    borders.add(lineRight);
    borders.add(lineLeft);
    borders.immovable;
  }

  blocks.immovable = true;
  frameRate(60);
}

function draw() {
  background(10);

  if (keyIsPressed === true ) { // If any key on the keyboard is pressed, the program resets
    ship.remove();
    reset();
  }

  bg();
  spawnBigBlocks();
  spawnSmallBlocks();
  bullets.overlap(blocks, blockHit); // If the bullets overlap a big block, the blockHit() function is called
  bullets.overlap(tinyBlocks, tinyBlockHit); // If the bullets overlap a small block, the tinyBlockHit() function is called
  blocks.overlap(ship, shipHit); // If the ship overlap a big block, the shipHit() function is called
  tinyBlocks.overlap(ship, shipHit); // If the ship overlap a small block, the shipHit() function is called
  shipControls();
  drawSprites();
  songText();
}

function bg() { // All the background circles are called
  bounce1.show();
  bounce1.move();
  bounce2.show();
  bounce2.move();
  bounce3.show();
  bounce3.move();
  bounce4.show();
  bounce4.move();
  bounce5.show();
  bounce5.move();
  bounce6.show();
  bounce6.move();
  bounce7.show();
  bounce7.move();
  bounce8.show();
  bounce8.move();
  bounce9.show();
  bounce9.move();
  bounce10.show();
  bounce10.move();
}

class Bouncy { // The class for the background circles
  constructor() {
    this.getcolor = random(12, 20); // The color is different shades of dark grey
    this.x = random(0, 1000); // The spawing point is random
    this.y = random(0, 700);
    this.speed = random(-0.5, -3); // The speed is random
  }

  show() {
    var vol = map(amp.getLevel(), 0, 0.5, 130, 150);
    noStroke();
    fill(this.getcolor);
    ellipse(this.x, this.y, vol, vol); // The circles grow larger if the music is loud
  }

  move() {
    this.x += this.speed;
    if (-80 > this.x) { // If the circles go off the canvas, they will reappear on the other side and keep going
       this.x = 1080;
    }
  }
}
