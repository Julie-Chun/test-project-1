# Pre-work - _Memory Game_

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: **Juwon Chun**

Time spent: **8** hours spent in total

Link to project: [See Project Here!](https://glitch.com/edit/#!/aware-innate-tiara)

## Required Functionality

The following **required** functionality is complete:

- [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app.
- [x] "Start" button toggles between "Start" and "Stop" when clicked.
- [x] Game buttons each light up and play a sound when clicked.
- [x] Computer plays back sequence of clues including sound and visual cue for each button.
- [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [x] User wins the game after guessing a complete pattern.
- [x] User loses the game after an incorrect guess.

The following **optional** features are implemented:

- [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial.
- [x] Buttons use a pitch (frequency) other than the ones in the tutorial.
- [x] More than 4 functional game buttons.
- [x] Playback speeds up on each turn.
- [x] Computer picks a different pattern each time the game is played.
- [x] Player only loses after 3 mistakes (instead of on the first mistake).
- [ ] Game button appearance change goes beyond color (e.g. add an image).
- [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones).
- [ ] User has a limited amount of time to enter their guess on each turn.

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![](https://im6.ezgif.com/tmp/ezgif-6-3d96c2858f80.gif)

## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.
   
   I had used this [link](https://developers.google.com/web/updates/2017/09/autoplay-policy-changes#webaudio) 
   to help me debug why the button sound was not consistently playing during the game.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)
   
   My biggest challenge was that the sound of the buttons did not turn on when I pressed the 'Start' button to play the game. 
   To overcome this challenge, I  first tried to refresh the page to see if there were unsaved changes that needed to be
   synced with the preview page. Then, when I confirmed that it was not a sync error, I looked if the o.start(0) function had actually
   ran in the code by using the console.log feature and checking that the program went through all the code I wanted it to run. 
   By checking the console messages, I found out that there had been a problem with not being able to create a new AudioContext 
   object because of an autoplay policy change on the Google Chrome platform. I then went into their website linked above to 
   read into more detail about what might have gone wrong, why it did not allow my code to run, and if there were any possible solutions to 
   my problem there. Fortunately, the website had suggested that a possible solution would be to use the feature of resuming the AudioContext 
   object. After tinkering around with the AudioContext objects and the Oscillator and Gain variables, I found that using context.resume() would 
   be the optimal solution to the issue I had faced. This is because the oscillator would be paused until a user had interacted with an object on 
   the page, such as a button, and starting the oscillator each time the user pressed the button would not work because the oscillator could be 
   started only once during a single run of the program, but the start button could be pressed multiple times during the run. Therefore, I found 
   the solution to my challenge by implementing the context.resume() feature in the startGame() function, but before the playClueSequence() 
   function because the sound had to be resumed before the player is to hear the clue sequence but the sound could only be resumed after user 
   interaction with the game. I also added another resume function after each guess, just in case the oscillation paused after a single guess.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)
   
   One question I would ask about web develop is the safety of the website and how to implement mechanisms in order 
   to make a safe website. As the internet has become the main source of obtaining and giving out information, there 
   are many concerns about privacy and security while using websites. As a web developer, I would want my clients to 
   know that their information is safe each time our product is used. Another question I would ask would be about the 
   efficiency of the program. If this game was to be a product for millions of users on a global scale, as a web 
   developer, I would like to create my product with efficient code that would have an efficient runtime and give an 
   acceptable big O notation for both runtime and space usage. This way, users of the website would have quality 
   performance each time they use the website. Another question I would ask would be about other common problems in 
   web development faced by other web developers, and how they would find solutions to those issues, if there exists 
   a solution. As a programmer, it is my job to find solutions to problems I am given and by doing so, I would create 
   a product that would provide better products and experience to users. In order to create quality products, I believe 
   that I should be able to solve common issues that arise when programming and think of a way to solve the problem if 
   there is no existing solution.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)
   
   If I had a few more hours to work on this project, one feature I would have added is another user interaction 
   platform through the keyboard. This way, I would also be able to implement an additional feature to the game, which 
   is to add chords to the clue sequence instead of a single note as each clue. In order to implement this, I would have 
   to work with the input and output features in order to keep track of what keys on the keyboard the user pressed. I 
   would also change the game logistics so that the game indicates the number level the user is at each round, and the 
   difficulty of the game gets harder as the user gets to a higher number level. During the lower levels I would use the 
   single sound clue sequences, and I would use the chord feature I had mentioned before in the higher levels. I would also 
   make it so that there is an infinite number of levels and instead of the win or lose feature, I would create a rank 
   dashboard which would display the five highest scores on the dashboard along with the respective user’s name. In order 
   to do so, I would have to make a separate page that displays the rankings of all players and put a button or another way 
   of getting user interaction in case the player wants to play the game again.

## License

    Copyright Juwon Chun

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
