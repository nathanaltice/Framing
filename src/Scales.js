// Fullscreen icon by Deemak Daksina from the Noun Project

class Scales extends Phaser.Scene {
    constructor() {
        super('scalesScene');
    }

    preload() {
        this.load.image('fullscreen', './assets/fullscreen.png');
    }

    create() {
        // change bg color
        this.cameras.main.setBackgroundColor('#FFF');

        // print text
        this.add.text(width/2, height/2, `🦎 Let's do some scaling 🐊`, { 
            color: '#FF33A1',  
            fontFamily: 'Courier',
            fontSize: '32px'
        }).setOrigin(0.5);

        this.msg = this.add.text(width/2, height/2 + 64, `< Message >`, {
            color: 'FFF',
            fontFamily: 'Courier',
            fontSize: '24px'
        }).setOrigin(0.5);

        // add fullscreen button
        this.fullscreenBtn = this.add.sprite(width, height, 'fullscreen');
        this.fullscreenBtn.setOrigin(1);
        this.fullscreenBtn.setInteractive({ useHandCursor: true }).on('pointerdown', () => {
            if (this.scale.isFullscreen) {
                this.scale.stopFullscreen();
                this.msg.text = `Exited fullscreen`;
            } else {
                this.scale.startFullscreen();
                this.msg.text = `Entered fullscreen`;
            }
        });

        // detect orientation change
        this.scale.on('orientationchange', (orientation) => {
            if(orientation == Phaser.Scale.PORTRAIT) {
                this.msg.text = `Please don't play in PORTRAIT, you clown`;
            } else if (orientation === Phaser.Scale.LANDSCAPE) {
                this.msg.text = `Ah yes, back to landscape`;
            }
        });
    }
}