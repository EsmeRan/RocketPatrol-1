// Esmeralda Rangel
// forked from Nathan Altice
// 4/18/2022
// ~ 10 hours

<<<<<<< HEAD
=======

>>>>>>> f287b2861d317d2857baf58fb7f4f2b55f29dfcf
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

// font help from https://www.webtips.dev/webtips/phaser/custom-fonts-in-phaser3
// backgroundColor from https://stackoverflow.com/questions/59332460/how-to-set-background-color-of-phaser-3-game-during-runtime
