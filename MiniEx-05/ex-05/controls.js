// When you hit a key on the keyboard, the program resets
// This means that your score returns to 0, the ship is respawned wherever your mouse is
// and any song that is playing is stopped
function reset() {
  score=0;
  ship = createSprite(mouseX, mouseY);
  ship.addAnimation("normal", "assets/ship0002.png", "assets/ship0007.png");
  song1.stop();
  song2.stop();
  song3.stop();
  song4.stop();
  song5.stop();
}


// The code for the big blocks
// When making sprites like this, if you don't declare a color it will pick a random one
function bigBlock() {
  var block = createSprite(1040, random(70,height-110), 100, 30); // Spawing coordinates and size
  block.velocity.x = -4; // Speed
  block.life = 500; // Lifespan in frames
  blocks.add(block); // Added to the blocks group
}

// The big blocks spawn when the program detects a peak in the song
// This means the program tries to find a pattern to the beat, and spawn a block accordingly
function spawnBigBlocks() {
  fft.analyze();
  peakDetect.update(fft);
  if (peakDetect.isDetected) {
    bigBlock();
  }
}

// The code for the small blocks
// When making sprites like this, if you don't declare a color it will pick a random one
function smallBlock() {
  var tinyBlock = createSprite(1000, random(70,height-110), 30, 20); // Spawing coordinates and size
  tinyBlock.velocity.x = -8; // Speed
  tinyBlock.life = 500; // Lifespan in frames
  tinyBlocks.add(tinyBlock); // Added to the tinyBlocks group
}

// The small blocks spawn when the program detects a higher volume
function spawnSmallBlocks() {
  var d = map(amp.getLevel(), 0, 1, 10, 200);
  if (d > 50) {
    if(frameCount%4 == 0) { // A new block is only spawned every 4 frames, otherwise the screen would be flooded with blocks
      smallBlock();
    }
  }
}

// The code for when you shoot from the ship
function fire() {
  if(frameCount%10 == 0) { // A new bullet is only spawned every 10 frames
    if (mouseIsPressed && !ship.removed ) { // The ship needs to be on the screen for the gun to work
      var bullet = createSprite(ship.position.x, ship.position.y, 17, 7); // The bullet spawns from the ship's current position
      bullet.shapeColor = color(250);
      bullet.velocity.x = 8;
      bullet.life = 100;
      bullets.add(bullet); // Added to the bullets group
    }
  }
}

function shipControls(){
  noCursor(); // Cursor is hidden
  ship.position.x = mouseX; // You control the ship with your mouse
  ship.position.y = mouseY;
  ship.collide(borders); // The ship cannot leave the canvas, as it is blocked by the borders group
  fire(); // Set to fire
}

// If a bullet overlaps, or "hits", a block, both the block and the bullet will disappear
function blockHit(block, bullet) {
  bullet.remove();
  block.remove();
  score = score + blockScore; // Score is updated
  if (highScore < score) { // Highscore is updated if necessary
    highScore = score;
  }
}

// If a bullet overlaps, or "hits", a tiny block, both the tiny block and the bullet will disappear
function tinyBlockHit(tinyBlock, bullet) {
  bullet.remove();
  tinyBlock.remove();
  score = score + tinyBlockScore; // Score is updated
  if (highScore < score) { // Highscore is updated if necessary
    highScore = score;
  }
}

// If the ship hits a block, any song playing will be stopped, and the ship will disappear
function shipHit() {
  song1.stop();
  song2.stop();
  song3.stop();
  song4.stop();
  song5.stop();
  ship.remove();
}
