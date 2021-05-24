// Nathan Altice
// Created: 5/23/21
// Updated:
// Phaser ScaleManager, CSS, etc.

let config = {
    parent: 'gameView',
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    // Try different combos of mode & autoCenter
    // Note: Vertical centering requires a parent <div> that is sized
    // Also, in most cases, Phaser.Scale.FIT is your best bet
    scale: {
        mode: Phaser.Scale.NONE,
        //mode: Phaser.Scale.FIT,
        //mode: Phaser.Scale.ENVELOP,
        //mode: Phaser.Scale.WIDTH_CONTROLS_HEIGHT,
        //mode: Phaser.Scale.HEIGHT_CONTROLS_WIDTH,
        //mode: Phaser.Scale.RESIZE,
        //autoCenter: Phaser.Scale.HORIZONTALLY
        //autoCenter: Phaser.Scale.VERTICALLY
        //autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [ Scales ]
}

let game = new Phaser.Game(config);

let { width, height } = game.config;