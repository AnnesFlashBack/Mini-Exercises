// The text written around on the canvas
function songText() {
  fill(220);
  textSize(15);
  textStyle(BOLD);

  // For each song playing, the information for the song is displayed
  // The text is tied to if the song is playing or not, meaning it will only be visible
  // as long as the designated song is playing
  if (song1.isPlaying()) {
    text("LEVEL 1", 20, 20);
    text("NOW PLAYING: Edwin Starr - War", 20, 40);
  } else if (song2.isPlaying() ){
    text("LEVEL 2", 20, 20);
    text("NOW PLAYING: Daft Punk - Harder Better Faster Stronger", 20, 40);
  } else if (song3.isPlaying() ){
    text("LEVEL 3", 20, 20);
    text("NOW PLAYING: Veorra - Set Free", 20, 40);
  } else if (song4.isPlaying() ){
    text("LEVEL 4", 20, 20);
    text("NOW PLAYING: Will Cady - What Fills the Gap", 20, 40);
  } else if (song5.isPlaying() ){
    text("LEVEL 5", 20, 20);
    text("NOW PLAYING: Madeon - Pop Culture", 20, 40);
  }

  textSize(20);
  text("THE HIGHER THE LEVEL, THE HARDER THE STAGE.", 20, 630);

  textAlign(RIGHT);
  text("SCORE: " + score.toString(), 980, 630); // Whenever the score is updated (when you hit a block), the written score updates
  text("HIGHSCORE: " + highScore.toString(), 980, 665); // The same with the highscore

  // This text is set to display if no music is playing and the ship is not on the screen
  // In other words, if you died the game over screen will show up
  if (!song1.isPlaying() && !song2.isPlaying() && !song3.isPlaying() && !song4.isPlaying() && ship.removed) {
    fill(220);
    textSize(50);
    textAlign(CENTER);
    text("GAME OVER", width/2, height/2-40);
    textSize(30);
    text("Your final score was "+score.toString(), width/2, height/2+5);
    textSize(0);
    fill(150);
    text("Press SPACEBAR to respawn the ship, then pick a level", width/2, height/2+50);
    text("As long as you don't crash the ship, your score carries over between levels", width/2, height/2+70);
  }

  // The three following if statements are set to play if no music is playing and the ship is still on the screen; that is between Levels.
  // If your score is high enough, an encouraging message will be displayed.
  if (!song1.isPlaying() && !song2.isPlaying() && !song3.isPlaying() && !song4.isPlaying() && !song5.isPlaying() && score>=5000 && score<=8000 && !ship.removed) {
    fill(220);
    textSize(40);
    textAlign(CENTER);
    text("Holy shit, you are good at this", width/2, height/2);
  }
  if (!song1.isPlaying() && !song2.isPlaying() && !song3.isPlaying() && !song4.isPlaying() && !song5.isPlaying() && score>=8000 && score<=12000 && !ship.removed) {
    fill(220);
    textSize(40);
    textAlign(CENTER);
    text("Seriously, wtf", width/2, height/2);
  }
  if (!song1.isPlaying() && !song2.isPlaying() && !song3.isPlaying() && !song4.isPlaying() && !song5.isPlaying() && score>=12000 && !ship.removed) {
    fill(220);
    textSize(40);
    textAlign(CENTER);
    text("Okay, you're, like, a god or something.\nBecause this is ridiculous.", width/2, height/2);
  }

}
