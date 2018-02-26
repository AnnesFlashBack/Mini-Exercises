var song;
var fft;
//var n = 0;
var start = 10;
var amply;
var time = 1.00;


var lines = 128;
// The numbers here refers to the amount of frequencies picked up by the FFT
// I wrote them down so I might change up the number of bands easily
// 128, 256, 512, 1024

//var button;


// Imported music piece.
// Title: Pentatonix - Evolution of Music
function preload() {
  song = loadSound('evolution.mp3');
}


// Set up of the program, including implementation of the sound functions
function setup() {
  createCanvas(windowWidth, windowHeight);
  //background(10);
  colorMode(HSB);
  angleMode(DEGREES);
  //song.play();

  fft = new p5.FFT(0.9, lines);
  amply = new p5.Amplitude();

  frameRate(60); // This was for my own benefit, since I enjoyed the smoothness of 60 FPS


  //var button = createButton('toggle');
  //button.mousePressed(toggleSound);
}

// Code left over from when I needed a pause button
//function toggleSound() {
//  if (song1.isPLaying()) {
//    song1.pause();
//  } else {
//    song1.play();
//  }
//}


// A simple piece of code which made it easy to change the text in the writing() function
function changeText(value) {
  ballSettings();
  text(value, 0, 9);
  textAlign(CENTER);
}


function draw() {
  background(10);

  // The text written at the top of the screen
  textAlign(CENTER);
  textSize(16);
  textFont('Helvetica');
  fill('#333333');
  text('PRESS THE CENTER TO START AND STOP THE MUSIC', width/2, 30);

  writing();
}


// Placing the code for the text and ball in one function made everything easier to work with
function ballSettings() {
  var d = map(amply.getLevel(), 0, 1, 125, 175); // The size of the ball is determined by the sound volume
  fill(8);
  ellipse(0,0, d, d)

  fill('white');
  textSize(32);
  textFont('Georgia');

}

function mouseClicked() {
  if (mouseX > width/2-125 && mouseX < width/2+125 && mouseY > height/3-25 && mouseY < height/3+175) { // If the mouse cursor is within this square, you can control the music
    if (song.isPlaying() ) {
      song.stop();
    } else {
      song.play();
    }
  }
}


function writing() {
  vizualizer(); // The music vizualizer function is called
  ballSettings(); // The settings for the ball and the text is called
  changeText('play'); // The first piece of text is called



  // Following is simple rinse and repeat.
  // I set it up so the text will change after the framecount has reached a certain numbers
  // In addition, it also calls the code for the ball again, layering a new ball on top of the old text

  if (song.currentTime() >= 0.01) { // When the song reaches a certain point, measured in seconds, the text will change
    ballSettings();
    changeText('1000s');
    // Salve Regina

  } if (song.currentTime() >= 13) {
    ballSettings();
    changeText('1600s');
    // Canon in D – Pachelbel


  } if (song.currentTime() >= 18.5) {
    ballSettings();
    changeText('1800s');
    // Symphony No. 5 – Beethoven

  } if (song.currentTime() >= 22.5) {
    ballSettings();
    changeText('1910s');
    // Danny Boy – Frederic Weatherly

  } if (song.currentTime() >= 28) {
    ballSettings();
    changeText('1920s');
    // Old Man River – Jerome Kern & Oscar Hammerstein II

  } if (song.currentTime() >= 33.5) {
    ballSettings();
    changeText('1930s');
    // Minnie The Moocher – Cab Calloway

  } if (song.currentTime() >= 43.5) {
    ballSettings();
    changeText('1940s');
    // Boogie Woogie Bugle Boy – The Andrew Sisters

  } if (song.currentTime() >= 52.5) {
    ballSettings();
    changeText('1950s');
    // I Walk The Line – Johnny Cash
    // La Bamba – Ritchie Valens

  } if (song.currentTime() >= 69) {
    ballSettings();
    changeText('1960s');
    // Stand By Me – Ben E King
    // Barbara Ann – Beach Boys
    // I Want To Hold Your Hand – The Beatles
    // Respect – Aretha Franklin

  } if (song.currentTime() >= 102) {
    ballSettings();
    changeText('1970s');
    // ABC – Jackson 5
    // Bohemian Rhapsody – Queen

  } if (song.currentTime() >= 126) {
    ballSettings();
    changeText('1980s');
    // Celebration – Kool & The Gang
    // Don’t Stop Believin’ – Journey
    // Thriller – Michael Jackson

  } if (song.currentTime() >= 139) {
    ballSettings();
    changeText('1990s');
    // Can’t Touch This – MC Hammer
    // …Baby One More Time – Britney Spears
    // Say My Name – Destiny’s Child
    // I Want It That Way – The Backstreet Boys

  } if (song.currentTime() >= 159) {
    ballSettings();
    changeText('2000s');
    // Hey Ya! – Outkast
    // Drop it Like Its Hot – Snoop Dogg
    // Crazy – Gnarls Barkley
    // Hips Don’t Lie – Shakira
    // Single Ladies – Beyoncé
    // I Kissed A Girl – Katy Perry
    // Bad Romance – Lady Gaga
    // I Gotta Feelin – Black Eyed Peas

  } if (song.currentTime() >= 214) {
    ballSettings();
    changeText('2010s');
    // Baby – Justin Bieber
    // We Found Love – Rihanna
    // Some Nights – Fun.
    // Somebody That I Used To Know – Gotye
    // Gangnam Style – Psy
    // Call Me Maybe – Carly Rae Jepsen

  } if (song.currentTime() >= 230) { // When the song ends, there is no text
    ballSettings();

  }
}


// The code for the song vizualizer
function vizualizer() {
  // var vol = amply.getLevel(); // Receiving the volume of the song
  var spectrum = fft.analyze(); // Getting the audio frequensies from the song

  noStroke();
  translate(width/2, height/3+50); // The placement for the vizualizer

  // Originally, it spun when playing, which is what this line of code was for
  //rotate(n * 0.5);

  for (var i = 0; i < spectrum.length; i++) {
    var angle = map(i, 0, spectrum.length, 0, 1138); // Places the lines around the vizualizer's center
    var amp = spectrum[i];
    var r = map(amp, 0, 100, 0, 150);
    var x = r * cos(angle);
    var y = r * sin(angle);

    var hue = sin(start + i * 1);
    hue = map(hue, -1, 1, 10, 360); // The rotating colors
    //ellipse(100, 100, 10, 10);

    stroke(hue, 255, 100); // The straight lines' color coming from the vizualizer's center
    strokeWeight(6);
    line(0, 0, x, y);

  }

  fill(0);
  noStroke();

  start -=  0.5; // The speed of the color rotation is static to simulate the "loading"

  // Originally, it spun when playing, which is what this line of code was for
  //n += 0.5;
}
