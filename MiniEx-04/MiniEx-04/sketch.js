
var thumb, fish, icon, song1, lines;

function preload() {
  // The images used, as well as the background music was loaded into the program
  thumb = loadAnimation("assets/likey.png"); // The 'Like' icon
  fish  = loadAnimation("assets/fish.png"); // The moveable fish
  icon = loadAnimation("assets/smallfb.png"); // The Facebook icon

  song1 = loadSound("assets/ap.mp3"); // The background music
}

function setup() {
  createCanvas(1000,600);

  lines = new Group(); // The "Group" command is found in the p5.play library

  // Here I made four rectangles, each the length of one of the four canvas sides.
  // I made sure to place them outside of the canvas so they could not be seen.
  for(var i = 0; i<6; i++) {
    var lineTop = createSprite(width/2, -50, 1000, 100);
    lineTop.shapeColor = color(100);
    var lineRight = createSprite(1050, height/2-100, 100, 600);
    lineRight.shapeColor = color(100);
    var lineBottom = createSprite(width/2, 650, 1000, 100);
    lineBottom.shapeColor = color(100);
    var lineLeft = createSprite(-50, height/2, 100, 600);
    lineLeft.shapeColor = color(100);

  // The shapes were then added to the Group "lines" to make everything a bit easier to code later
  lines.add(lineTop);
  lines.add(lineRight);
  lines.add(lineBottom);
  lines.add(lineLeft);
  }

  drawIcon(); // The Facebook icon is drawn

  fish = createSprite(200,200); // The fish is placed. The createSprite command comes from the p5.play library
  fish.addAnimation("normal", "assets/fish.png"); // The "animation" is called. Here, the animations is just a single image, however
  fish.scale = 0.05; // The image called was very big, so it needed to be scaled down

  song1.loop(); // The song is set to loop.
}

function draw() {
  background(19);
  firstSet(); // This function calls all the functions the program uses. I was originally going to try something with another function named "secondSet" but I changed my wind.
  drawSprites();
}


function firstSet() {
  fishControls(); // The controls for the fish

  icon.immovable = true; // The Facebook icon cannot be moved. The immovable command comes from the p5.play library
  fish.collide(lines); // The fish cannot pass the lines drawn earlier. The collide command comes from the p5.play library

  if(fish.collide(icon)) { // If the fish touches the Facebook icon, the swarm() command is activated
    swarm();
  }

  ghostText(); // The code for the "hidden" text
  write(); // The code for the text
  offCanvas(); // The code for when the fish goes off the canvas
}

function changeGhostText(value) { // The setup for the text in the ghostText() function
  changeText();
  fill(55);
  text(value, width/2-50, height/4-50);
  textAlign(CENTER);
}


function ghostText() {
  if (song1.currentTime() >= 20 && song1.currentTime() <= 21) { // While the song is between second 20 and 21 a message will show up.
    changeGhostText('FIND A WAY OUT');
  }
  if (song1.currentTime() >= 50 && song1.currentTime() <= 51) {
    changeGhostText('FIND YOUR FRIENDS');
  }
  if (song1.currentTime() >= 80 && song1.currentTime() <= 81) {
    changeGhostText('SEARCH FOR THE EXIT');
  }
  if (song1.currentTime() >= 110 && song1.currentTime() <= 111) {
    changeGhostText('THE EDGES WILL GIVE WAY');
  }
  if (song1.currentTime() >= 140 && song1.currentTime() <= 141) {
    changeGhostText('GO OUT AND FIND THEM');
  }
  if (song1.currentTime() >= 165 && song1.currentTime() <= 166) {
    changeGhostText('THE CORNERS WILL NOT HOLD');
  }
}




function offCanvas() {
  if (fish.position.x >= 1100 && fish.position.y >= 500) { // If the fish moves to this location (which is off the canvas), an external website will open
    window.location.href = "https://cdn.rawgit.com/AnnesFlashBack/Mini-Exercises/9978aed2/MiniEx-04%20(Extra)/MiniEx-04-Extra/index.html"; // The "escape" page
  }
}

function fishControls() { // Controls for the fish. Much of the code in this comes from the p5.play library
  // If mouseX is smaller than the fish's current position (minus 10), the fish will turn to face the mouse along the x-axis and its speed will increase
  // The adding and subtracting of 10 makes it so the fish won't jitter when you hover the mouse over it
  if (mouseX < fish.position.x - 10) {
    fish.mirrorX(-1);
    fish.velocity.x = - 2;

  } else if (mouseX > fish.position.x + 10) {
    fish.mirrorX(1);
    fish.velocity.x = 2;
  } else {
    fish.velocity.x = 0; // If the mouse is over the fish, it will not move
  }


  // Here, mirrorY is not used, as I did not want the fish to be turned upside down. That's a bad thing for the fish. Good code doesn't kill fish.
  if (mouseY < fish.position.y - 10) {
    fish.velocity.y = - 2;

  } else if (mouseY > fish.position.y + 10) {
    fish.velocity.y = 2;
  } else {
    fish.velocity.y = 0; // If the mouse is over the fish, it will not move
  }
}

function drawIcon() {
  icon = createSprite(width/2, height/2); // The Facebook icon is placed. The createSprite command comes from the p5.play library
  icon.addAnimation("normal", "assets/smallfb.png"); // The "animation" is called. Here, the animation is just a single image, however
  icon.scale = 1; // I was playing around with the scale while coding, but ultimately kept it at its native resolution
}

function swarm() {
  if(frameCount%10 == 0) { // A new "like" will appear every 10 frames
    thumb = createSprite(fish.position.x, fish.position.y); // The "likes" will spawn from the fish's current position
    thumb.addAnimation("normal", "assets/likey.png"); // The "animation" is called. Here, the animation is just a single image, however
    thumb.scale = 1;

    thumb.velocity.x = random(-5, 5); // Speed and direction is random. Some will be fast, others will be very slow
    thumb.velocity.y = random(-5, 5); // Speed and direction is random. Some will be fast, others will be very slow
    thumb.life = 1000; // Set a lifespan for the likes to avoid setting fire to my computer. These are the amount of frames the summoned sprite will be on screen (I am fairly certain)
  }
}

function changeText() {
  fill(35);
  textSize(20);
  textFont('Helvetica');
}

function write() {

  // The randomized words which will play when the fish touches the Facebook icon
  // The reason the same sentences are there multiple times, is so there is a chance two identical phrases will be placed next to each other
  // This will make it much easier to read
  var rightWords = ["need more", "want more", "need attention", "need to be seen", "need more", "want more", "need attention", "need to be seen", "need more", "want more", "need attention", "need to be seen", "need more", "want more", "need attention", "need to be seen", "need more", "want more", "need attention", "need to be seen"];
  var leftWords = ["look at me", "like me", "see me", "look at me", "like me", "see me", "look at me", "like me", "see me", "look at me", "like me", "see me", "look at me", "like me", "see me", "look at me", "like me", "see me", "look at me", "like me", "see me"];
  var bottomWords = ["am I important?", "am I a ghost?", "am I popular?", "am I important?", "am I a ghost?", "am I popular?", "am I important?", "am I a ghost?", "am I popular?", "am I important?", "am I a ghost?", "am I popular?", "am I important?", "am I a ghost?", "am I popular?",];
  var topWords = ["don't ignore me", "don't leave me", "don't ignore me, please", "don't avoid me", "don't ignore me", "don't leave me", "don't ignore me, please", "don't avoid me", "don't ignore me", "don't leave me", "don't ignore me, please", "don't avoid me", "don't ignore me", "don't leave me", "don't ignore me, please", "don't avoid me"];


  if (fish.touching.right) { // Depending on which side of the fish touches the Facebook icon, a different array will be called
    changeText();
    text(random(rightWords), 650, height/4);
  }

  if (fish.touching.left) {
    changeText();
    text(random(leftWords), width/6, height/4);
  }

  if (fish.touching.bottom) {
    changeText();
    text(random(bottomWords), width/6, height/2);
  }

  if (fish.touching.top) {
    changeText();
    text(random(topWords), 670, 450);
  }

}
