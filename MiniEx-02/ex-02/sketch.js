
// these variables are leftovers from a piece of code I tried to implement,
// but couldn't make work. I left them in because I might return to it later
var dawn = '#ffd11a';
var dusk = '#ff9900';
var night = '#999999';
var sho = sunrise();


// sets up the three buttons you can interact with
function setup() {
  createCanvas(500, 600);

  button = createButton('dawn');
  button.position(20, 20);
  button.mousePressed(sunrise);

  button = createButton('dusk');
  button.position(225, 20);
  button.mousePressed(sunset);

  button = createButton('night');
  button.position(430, 20);
  button.mousePressed(moonrise);


}


function draw() {

}





// code for the dawn image
function sunrise() {
  background('#66e0ff');

  fill(dawn);
  noStroke();
  ellipse(width/2, 300, 150, 150);

  fill('white');
  noStroke();
  rect(75, 100, 100, 50);

  fill('white');
  noStroke();
  rect(300, 60, 100, 50);

  fill('#5cd65c');
  noStroke();
  rect(0, 300, 500, 300);

  fill('#e6b800');
  noStroke();
  rect(175, 300, 150, 300);

  fill('#e6b800');
  noStroke();
  triangle(325, 300, 500, 600, 325, 600);

  fill('#e6b800');
  noStroke();
  triangle(175, 300, 175, 600, 0, 600);

}


// code for the dusk image
function sunset() {
  background('#1a0000');

  fill(dusk);
  noStroke();
  ellipse(width/2, 300, 150, 150);


  fill('#595959');
  noStroke();
  rect(75, 100, 100, 50);

  fill('#595959');
  noStroke();
  rect(300, 60, 100, 50);

  fill('#e60000');
  noStroke();
  rect(0, 300, 500, 300);

  fill('#b36b00');
  noStroke();
  rect(175, 300, 150, 300);

  fill('#b36b00');
  noStroke();
  triangle(325, 300, 500, 600, 325, 600);

  fill('#b36b00');
  noStroke();
  triangle(175, 300, 175, 600, 0, 600);

}


//code for the night image
function moonrise() {


  background('black');

  fill(night);
  noStroke();
  ellipse(width/2, 300, 150, 150);


  fill('#595959');
  noStroke();
  rect(75, 100, 100, 50);

  fill('#595959');
  noStroke();
  rect(300, 60, 100, 50);

  fill('#595959');
  noStroke();
  rect(75, 470, 100, 50);

  fill('#595959');
  noStroke();
  rect(300, 430, 100, 50);


  stroke('white');
  strokeWeight(5);
  point(100, 50);

  stroke('white');
  strokeWeight(5);
  point(75, 325);

  stroke('white');
  strokeWeight(5);
  point(135, 560);

  stroke('white');
  strokeWeight(5);
  point(152, 410);

  stroke('white');
  strokeWeight(5);
  point(125, 250);

  stroke('white');
  strokeWeight(5);
  point(25, 150);



  stroke('white');
  strokeWeight(5);
  point(400, 30);

  stroke('white');
  strokeWeight(5);
  point(375, 325);

  stroke('white');
  strokeWeight(5);
  point(435, 540);

  stroke('white');
  strokeWeight(5);
  point(452, 410);

  stroke('white');
  strokeWeight(5);
  point(425, 250);

  stroke('white');
  strokeWeight(5);
  point(325, 150);




}
