// These are the functions called by the buttons in main.js
// Here, the functions first check to see if any music is playing.
// If there is music playing, the function stops the music, before playing a specific song
// The only difference between switchSong1-through-switchSong5 are the songs called in the end,
// and the songs the functions are told to stop.
function switchSong1() {
  if (song2.isPlaying()) {
    song2.stop();
  } else if (song3.isPlaying()) {
    song3.stop();
  } else if (song4.isPlaying()) {
    song4.stop();
  } else if (song5.isPlaying()) {
    song5.stop();
  }
  song1.playMode('untilDone'); // The song will play until it is done.
  // This means that clicking the button multiple times will not play the song on top of itself
  song1.play();
}

function switchSong2() {
  if (song1.isPlaying()) {
    song1.stop();
  } else if (song3.isPlaying()) {
    song3.stop();
  } else if (song4.isPlaying()) {
    song4.stop();
  } else if (song5.isPlaying()) {
    song5.stop();
  }
  song2.playMode('untilDone');
  song2.play();
}

function switchSong3() {
  if (song1.isPlaying()) {
    song1.stop();
  } else if (song2.isPlaying()) {
    song2.stop();
  } else if (song4.isPlaying()) {
    song4.stop();
  } else if (song5.isPlaying()) {
    song5.stop();
  }
  song3.playMode('untilDone');
  song3.play();
}

function switchSong4() {
  if (song1.isPlaying()) {
    song1.stop();
  } else if (song2.isPlaying()) {
    song2.stop();
  } else if (song3.isPlaying()) {
    song3.stop();
  } else if (song5.isPlaying()) {
    song5.stop();
  }
  song4.playMode('untilDone');
  song4.play();
}

function switchSong5() {
  if (song1.isPlaying()) {
    song1.stop();
  } else if (song2.isPlaying()) {
    song2.stop();
  } else if (song3.isPlaying()) {
    song3.stop();
  } else if (song4.isPlaying()) {
    song4.stop();
  }
  song5.playMode('untilDone');
  song5.play();
}
