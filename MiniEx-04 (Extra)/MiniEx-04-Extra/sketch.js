var fish2, song2, amp;


function preload() {
  fish2  = loadAnimation("assets/fish2.png"); // The fish
  song2 = loadSound('assets/whale.mp3'); // The music
}


function setup() {
  createCanvas(windowWidth,windowHeight);
  amp = new p5.Amplitude(); // The volume of the song
  song2.loop();
}


function draw() {
  var bg = map(amp.getLevel(), 0, 1, 1, 20); // The volume is tied to the background color. The higher the music, the brighter the background
  background(bg);

  swim(); // The code for the fish
  drawSprites();
  poetry(); // The code for the poem
}

function swim() {
  if(frameCount%30 == 0) { // A new fish spawns every 50 frames
    var fish2 = createSprite(-100, random(100,height-100)); // The fish are placed a 100 pixels off the canvas to the left. They spawn randomly along the y-axis
    fish2.addAnimation("normal", "assets/fish2.png");
    fish2.scale = 0.12; // The fish was scaled down accordingly
    fish2.velocity.x = random(1, 4); // The x-speed was set to make them go right in different tempos
    fish2.velocity.y = random(-1, 1); // The y-speed was set to make them go slightly up and down
    fish2.life = 1500; // Set a lifespan for the fish 

  }
}

function changeText() {
  fill(130);
  textSize(20);
  textFont('Helvetica');
}



function poetry() {
  changeText();
  textAlign(CENTER);
  var poem1 = "Oh, how I wish I was a fish to swim in the deep blue sea.\n I would swim up and down and all around in laps of two or three. \n \n There would be no rules to follow, all fun down here.\n On land rules are trouble, a real pain in the rear. \n \n Humans are not wanted down here and for them you must always look.\n For they only want to see us fish dangling from their hook.\n \n A sea full of wonder, yes that's the life for me.\n Oh, how I wish to be a fish and one day soon I'll be!\n ";
  var author = "A Fish I Wish by Karstyn B. Butler.";
  text(poem1, 150, 150, width/2, height/2);
  textStyle(ITALIC);
  textSize(15);
  text(author, 150, 470, width/2, height/2);
}
