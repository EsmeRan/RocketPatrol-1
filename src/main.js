// Esmeralda Rangel
// forked from Nathan Altice
// 4/18/2022
// ~ 10 hours


let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    backgroundColor: '#9EA9A2',
    scene: [ Menu, Play ]
}

let game = new Phaser.Game(config);

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// reserve keyboard variables
let keyF, keyR, keyLEFT, keyRIGHT;

// global high score variable
game.highScore = 0;

//           *** HELP REFERENCES***
// font help from https://www.webtips.dev/webtips/phaser/custom-fonts-in-phaser3
// backgroundColor from https://stackoverflow.com/questions/59332460/how-to-set-background-color-of-phaser-3-game-during-runtime


/*                  ***** POINT BREAKDOWN ******
5 pts - track a displayed high score: the high score updates with
        every run to show the highest score in game over screen

5 pts - new smaller-faster-more valuable ship: the turtles go faster
        than their frog counterparts in both easy and hard modes
        and are worth 40 pts instead of 10

10 pts - parallax scrolling: the background consists of 4 images that
        scroll at different rates based on where they are - slower in the
        back and faster in the front

60 pts - redesign art, UI, and sound: all art assets have been changed or replaced;
        the UI bars have been taken out, recolored, repositioned, and fonts have been changed;
        menu, firing, and explosion sounds have been replaced by my own mouth noises
*/

// note: I attempted to change the font and it works, but I haven't been able to
//       get rid of the warnings in the console