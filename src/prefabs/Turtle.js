// Turtle prefab
class Turtle extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);   // add to existing scene
        this.points = pointValue;   // store pointValue
        this.moveSpeed = game.settings.spaceshipSpeed;         // pixels per frame
    }

    update() {
        // move turtle right
        this.x += 6;
        // wrap around from left edge to right edge
        if(this.x >= game.config.width) {
            this.reset();
        }
    }

    // position reset
    reset() {
        this.x = 0;
    }
}