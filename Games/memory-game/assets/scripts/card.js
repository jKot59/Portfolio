class Card extends Phaser.GameObjects.Sprite {
    constructor(scene, value) {
        super(scene, 0, 0, 'card')
        this.scene = scene
        this.value = value
        // this.setOrigin(0.5, 0.5)
        // выведет на сцену созданный спрайт
        this.scene.add.existing(this)
        // обьект является интерактивным и нужно для него проверять события
        this.setInteractive();
        // обработчик клика по обьекту
        // this.on('pointerdown', this.open, this)
        this.opened = false
    }

    flip() {
        this.scene.tweens.add({
            targets: this,
            scaleX: 0,
            ease: 'linear',
            duration: 150,
            onComplete: () => this.show()
        })
    }
    show() {
        let texture = this.opened ? 'card' + this.value : 'card';
        this.setTexture(texture)
        this.scene.tweens.add({
            targets: this,
            scaleX: 1,
            ease: 'linear',
            duration: 150,
        })
    }
    open () {
        this.opened = true
        this.flip()
    }
    
    close() {
        if(this.opened) {
            this.opened = false
            this.flip()
        }
    }
}