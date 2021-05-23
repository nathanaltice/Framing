class Scales extends Phaser.Scene {
    constructor() {
        super('scalesScene');
    }

    create() {
        this.add.text(width/2, height/2, `🦎 Let's do some scaling 🐊`, { 
            color: '#00FF00',  
            fontFamily: 'Courier',
            fontSize: '32px'
        }).setOrigin(0.5);
    }
}