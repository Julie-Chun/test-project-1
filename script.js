/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");

//Global Variables
var pattern = [0, 0, 0, 0, 0, 0, 0, 0];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //must be between 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var lives = 3; //number of lives user has each game

//Global Constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);

function startGame() {
  //initialize game variables
  progress = 0;
  gamePlaying = true;
  lives = 3;
  context.resume();

  //set pattern to random buttons
  for (var r = 0; r < 8; r++) {
    pattern[r] = Math.floor(Math.random() * 6) + 1;
  }

  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame() {
  gamePlaying = false;

  // swap the Start and Stop buttons
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("startBtn").classList.remove("hidden");
}

// Sound Synthesis Functions
const freqMap = { 1: 261.6, 2: 329.6, 3: 392.0, 4: 466.2, 5: 198.6, 6: 356.8 };

function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  startTone(btn);
  setTimeout(function() {
    stopTone();
  }, len);
}

function startTone(btn) {
  if (!tonePlaying) {
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    tonePlaying = true;
  }
}

function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

//button-pressing functions
function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}
function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

//playing single clue
function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    clueHoldTime -= 20;
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

//Lose Game function
function loseGame() {
  stopGame();
  alert("Game Over. You lost.");
}

//Win Game function
function winGame() {
  stopGame();
  alert("Game Over. Congratulations, You Won!");
}

//Guess function when user makes a guess
function guess(btn) {
  console.log("user guessed: " + btn);
  context.resume();

  if (!gamePlaying) {
    return;
  }

  // add game logic here
  if (lives > 0) {
    if (pattern[guessCounter] == btn) {
      if (progress == guessCounter) {
        if (pattern.length - 1 == progress) {
          winGame();
        } else {
          progress++;
          playClueSequence();
        }
      } else {
        guessCounter++;
      }
    } else {
      lives--;
      console.log("lives decreased");
    }
  } else {
    loseGame();
  }
}
