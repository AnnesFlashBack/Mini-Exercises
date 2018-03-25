/*Y0U_L16HT_UP_TH3_R00M
By Alexander Svanholm, Anne Gregersen & Frederik Ditlev
March 22nd, 2018*/

// variables concerning text
var showText;
var letterColor;
var letterSize;
var dis = 0; // "dis" for display this string nr. in the array
var afkText = 0;

// variables concerning timeCount
var counter = false; //  Referring to timeCount
var timer = 0; // Self-evident
var tracker = 0; // Tracking the number of the arrays

var song; // Background soundtrack
var theVoice; // The speaking voice
var errWave; // The sound of error!

var bounce = []; // Variable for the background circles

function preload() {
  song=loadSound("alone.m4a") // Preloading the background audio
}
// function preLoad ends

function setup() {
  createCanvas(windowWidth, windowHeight); // Width and height of the window
  errWave = new p5.Oscillator(); // The sound of error is a synth

  for (var i = 0; i < 15; i++){ // This determines how many balls are draw - 15 in this case
    bounce[i] = new Bouncy(); // A new background ball is called from the Bouncy class
  }

  errWave.setType('sine');
  errWave.amp(0.05,0.05); // Used to determine the volume of the synth
  errWave.freq(1000); // frequency (pitch) of the synth

  frameRate(60); // Framerate is locked
  theVoice = new p5.Speech(1); // The speech library is utilized

}
// function setup ends

function draw() {
timeCount();
background(0);

  if(counter == true){
      bg();
      drawText();
  }
}
// function draw ends

function timeCount() {
  if(counter == true){ // on true, the counter allows the timer to run
      timer = timer + 1; // The timer controlls many things

// after being afk for 30 seconds, the "woman" says something
      if(timer == 1800){ // 1800 frames/60 frames pr. sec = 30 sec
        if (afkText < 2){
          afkText++;
        } else {
          afkText = 0;
          }

        if (tracker < 5){ // for the first 4 arrays
          showText = afk[afkText];
        }
        else if (tracker != 8) { // for the next 3 arrays
          showText = afkAngry[afkText];
        }
        if (tracker != 8){
        saySomething(); // the "woman" speaks if the program is not over (8 means over)
        }
      }
  }
}
// function timeCount() ends

function bg() { // All the background circles are called
  for (var i = 0; i < bounce.length; i++) {
    bounce[i].show();
    bounce[i].move();
  }
}
// function bg ends

class Bouncy { // The class for the background circles
  constructor() {
    this.getcolor = color(random(210), random(225), random(225),50);
    this.x = width + random(150, width); // The spawing point is random
    this.y = random(0, height);
    this.speed = random(-0.5, -3); // The speed is random
    this.d = 200;
  }
  //constructor ends

  show() {
    if (tracker == 8) {
      this.d = 0;
    }
    noStroke();
    fill(this.getcolor);
    ellipse(this.x, this.y, this.d, this.d);
  }
  //show ends
  move() {
    this.x += this.speed;

    if (-100 > this.x) { // If the circles go off the canvas, they will reappear on the other side and keep going
       this.x = width+100;
       this.y = random(0, height);
       this.speed = random(-0.5, -3); // The speed is random
       this.getcolor = color(random(210), random(225), random(225),125);
    }
  }
  //move ends
}
// class Bouncy ends

// This functions registers if the user is clicking rapidly
// and are trying to get quickly through the program
function drawText() {
  push();
    fill(letterColor);
    textSize(letterSize);
    textAlign(CENTER);
    textFont('Helvetica');
    translate(windowWidth/2,windowHeight/2);
    text(showText, -250, -250, 500);
  pop();
}
// function drawText ends

function mousePressed() {
  audioVisual(); // calling our constructed function of statements, background song and text-to-speech.
}
// function mousePressed ends

function audioVisual() {
  song.playMode('untilDone'); // The song will not play on top of itself
  song.play(); // Song plays
  song.setVolume(0.4, 1, 0); // Song's volume is set

  if (counter == false){
    counter = true; // starts timer in timeCount();
  }

  // If you make it to the end of an array of text,
  // it will return to the beginning of the array
  if (dis < 8){
    dis++;
  } else {
    dis = 0;
  }

  theVoice.interrupt = true; // makes it possible to interrupt speeches
  letterColor = color(150, random(255), random(255)); // Color of letters is set
  letterSize = random(50, 60); // Size of letters is set

// This section specifies which array of statements is executed
  if (timer < 30 || tracker == 0) {
    if(tracker != 8){
      tracker = tracker + 1; // The next array is chosen
      timer = 31;
    }
  }
  if (tracker == 1) {
    showText = first[dis];
  }
  if (tracker == 2) {
    showText = twice[dis];
  }
  if (tracker == 3) {
    showText = third[dis];
  }
  if (tracker == 4) {
    showText = fourth[dis];
  }
  if (tracker == 5) {
    showText = fifth[dis];
  }
  if (tracker == 6) {
    showText = sixth[dis];
  }
  if (tracker == 7) {
    showText = seventh[dis];
  }
  if (tracker == 8) {
    // The Program "Crashes"
    theVoice.stop();
    song.stop();
    showText = "ERROR";
    errWave.start(); // The sound of error begins
  }
  if (tracker != 8) {
    saySomething(); // The "woman" speaks if the program is not over (8 means over)
  }
  if (timer > 60) { // the value 60 is to prevent rapid clicking through till the end
    timer = 0; // The timer resets after text and speech has been executed if the timer is more more than 60
  }
} // function audioVisual ends

function saySomething() {
  theVoice.speak(showText); // The speak is executed
  theVoice.resume(showText); // On interruption, The next statement won't be stopped as well
}
// saySomething ends

function windowResized() {
  resizeCanvas(windowWidth,windowHeight);
  background(0);
}
// function windowResized ends
