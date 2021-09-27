class GameScene extends Phaser.Scene {
    constructor() {
        super("Game")
    }

    // загрузить бг
    preload() {
        this.load.image('bg', 'assets/sprites/background.png')
        this.load.image('card', 'assets/sprites/card.png')
        this.load.image('card1', 'assets/sprites/card1.png')
        this.load.image('card2', 'assets/sprites/card2.png')
        this.load.image('card3', 'assets/sprites/card3.png')
        this.load.image('card4', 'assets/sprites/card4.png')
        this.load.image('card5', 'assets/sprites/card5.png')
    }

    createText() {
        this.timeoutText = this.add.text(10, 330, "", {
            font: '36px CurseCasual',
            fill: '#fff'
        })
    }
    onTimerTick() {
        this.timeoutText.setText('Time: ' + this.timeout)
        if (this.timeout <= 0) {
            this.start()
        }else{
            this.timeout--
        }
    }
    createTimer() {
        this.time.addEvent({
            delay: 1000,
            callback: this.onTimerTick,
            // задает контекст вызова
            callbackScope: this,
            loop: true
        })
        
    }
    // вывести бг
    create() {
        this.timeout = config.timeout
        this.createTimer()
        this.createBackground()
        this.createCards()
        // помещаем открытую карту
        this.start()
        this.createText()
    }

    start() {
        this.timeout = config.timeout
        this.openedCard = null
        this.openedCardCount = 0
        this.initCards()
    }
    
    initCards() {
        let positions = this.getCardsPositions();

        this.cards.forEach( card => {
            let position = positions.pop()
            card.close()
            card.setPosition(position.x, position.y)
        })
    }

    createBackground() {
        // this.add.sprite(this.sys.game.config.width / 2, this.sys.game.config.height / 2, 'bg') // по умолчанию нужно указывать координаты середины канваса   
        this.add.sprite(0, 0, 'bg').setOrigin(0, 0) // задаем entry point на канвасе (не середину, а 0, 0)
    }

    createCards() {
        this.cards = []
        
        for(let value of config.cards) {
            for(let i = 0; i < 2; i++) {
                this.cards.push(new Card(this, value))
            }
            // this.add.sprite(position.x, position.y, 'card').setOrigin(0, 0)
        } 

        //вызывается для всех игровых обьектов на сцене у которых есть флаг setInteractive
        this.input.on("gameobjectdown", this.onCardClicked, this)
    }

    // pointer - место клика/ тип клика/ . card - обьект
    onCardClicked(pointer, card) {
        if(card.opened) {
            return false
        }
        // проверяем открытую карту
        if(this.openedCard) {
            if(this.openedCard.value === card.value) {
                // картинки равны - запомнить
                this.openedCard = null
                this.openedCardCount++
            } else {
                // картинки разные - скрыть прошлую
                this.openedCard.close()
                this.openedCard = card
            }
        }else {
            this.openedCard = card
        }

        card.open()
        
        if(this.openedCardCount === this.cards.length / 2) {
            this.start()
        }
    }

    getCardsPositions() {
        let positions = []
        // добавляем в переменную данные о размерах изображения
        let cardTexture = this.textures.get('card').getSourceImage()
        let cardWidth = cardTexture.width
        let cardHeight = cardTexture.height
        let gap = 4
        // выставляем карты по центру: ширина.канваса - ширина.карты * количество столбцов
        let offsetX = (this.sys.game.config.width - cardWidth * config.cols) / 2  + cardWidth / 2
        let offsetY = (this.sys.game.config.height - cardHeight * config.rows) / 2  + cardHeight / 2
    
        for (let row = 0; row < config.rows; row++) {
            for (let col = 0; col < config.cols; col++) {
                positions.push({
                    x: offsetX + col * (cardWidth + gap), // получаем позцию карты с учетом столбца
                    y: offsetY + row * (cardHeight + gap) // с учетом строки
                })
            }
        }
        return Phaser.Utils.Array.Shuffle(positions)
    }

}