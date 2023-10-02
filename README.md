# coding-quiz

## About this project
This project was done as the forth assignment of a UC Berkeley Full Stack web developer coding bootcamp to learn Javascript.

I developed a webpage that meets the following criteria:
- When user clicks the start button,  a timer starts and the user is presented with a question
- When user answers a question, user is presented with another question
- When a user answer a question incorrectly, time is subtracted from the clock
- When all questions are answered or the timer reaches 0, the game is over and user can save my initials and my score

## How to play

- [Play page](https://mitsukaichi.github.io/coding-quiz/)
- [High Score](https://mitsukaichi.github.io/coding-quiz/highscore/highscore.html) 
- [Screenshot of play page](https://github.com/mitsukaichi/coding-quiz/blob/main/assets/screenshot1.png)
- [Screenshot of high score page](https://github.com/mitsukaichi/coding-quiz/blob/main/assets/screenshot2.png)

## What I learnt from this project 

### Pseudo-coding is better when you go through all the details than going through the high level idea.
I started with the pseudo-coding to build a for loop to reorder the recorded scores from high score to low, but I didn't think through where the loop ends and how it's going to the next item, and my initial for loop became an inifinite loop as a result. I learnt that the pseudo-coding process should include the precise steps not just how it starts but how it ends too.

### Wire framing should better include the high level idea on how the javascript is designed
I started with the wire framing of the website, but I only thought about the main game screen and didn't take other part of the game (i.e. timeout screen, result showing and user initial input screen) during the process, and it required some redesign to accomodate multiple different scenarios. 

### Containing multile lists in a single page can be trickey
I decided to add a list item in a site navigation after I built the rest of the content on the page, and I had to modify some of the CSS stylings to apply different stylings between the high score lists and the lists in the nav. I also realized when I add mutliple ordered lists to the same page, these 2 lists are merged into a single list and corrupts the entire page layout. I couldn't figure out how exactly this is happening and I'm planning to leverage the tutor session to understand the root cause.

## Resources referenced
- [color palette tool](https://coolors.co/fab9b9-e5d4c0-c5decd-a1e8cc-495159)
- [pointer-events](https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events)
- [JavaScript Refresh Page – How to Reload a Page in JS](https://www.freecodecamp.org/news/javascript-refresh-page-how-to-reload-a-page-in-js/#:~:text=Method%201%3A%20How%20to%20Refresh,and%20loading%20the%20latest%20content.)
- [How to Insert into a JavaScript Array at a Specific Index – JS Push](https://www.freecodecamp.org/news/insert-into-javascript-array-at-specific-index/)
- [Storage: clear() method](https://developer.mozilla.org/en-US/docs/Web/API/Storage/clear)

## License

MIT License

Copyright (c) 2023 mitsukaichi

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.