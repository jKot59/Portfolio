import yellow from '../imgs/yellowS.png';
import red from '../imgs/redS.png';
import green from '../imgs/greenS.png';
import blue from '../imgs/blueS.png';
import empty from '../imgs/emptyS.png';
import drawTile from './drawTile';

// создаем канвас и тайлы
export default function updateCanvas(state) {
    const {tileSize, quantityTile, borderSize, dropSpeed} = state

    const canvas = document.getElementById('blast')
    const ctx = canvas.getContext("2d")
    // получаем размеры поля в зависимости от количества и размера тайлов, учитывая рамку        
    const widthInTile = (quantityTile * tileSize) + borderSize
    const heightInTile = (quantityTile * tileSize) + borderSize
    //устанавливаем размера канваса
    canvas.width = widthInTile
    canvas.height = heightInTile
    
    class Tile {
        constructor (img, size) {
            this.height = size
            this.width = size
            this.image = new Image()
            this.image.src = img
            this.dropSpeed = dropSpeed
        }

        spawnTileDraw(posX, posY) {
            // рисуем анимацию появления тайла
            // номер кадра в спрайте
            let numberOfFrame = 0
            let endFrame = 8
            drawTile(numberOfFrame, endFrame, posX, posY, ctx, borderSize, this.width, this.height, this.image)
        }

        // рисуем анимацию удаления тайла
        removeTilesDrow(posX, posY) {
            // номер кадра в спрайте
            let numberOfFrame = 9
            let endFrame = 28
            drawTile(numberOfFrame, endFrame, posX, posY, ctx, borderSize, this.width, this.height, this.image)
        }

        // рисуем анимацию падения тайла
        moveDownDrow(posX, posY) {
            let numberOfFrame = 0
            const drawTile = () => {
                // если тайлы опустились на свою высоту, вернуть им свою высоту после итерации с шагом больше чем 1
                // - this.dropSpeed/2 чтобы тайлы не пребегали свою конечную позицию
                if(numberOfFrame >= this.height - this.dropSpeed/2) {
                    numberOfFrame= this.height
                    ctx.clearRect(posX + borderSize/2, numberOfFrame - this.dropSpeed + posY + borderSize/2, this.width, this.height )
                    // 1. картинка 2. задает позицию кадра внутри картинки по х 3. 0 по y 4,5. размер кадра 6.  координаты самой картинки на холсте 7.8 размер изображения
                    ctx.drawImage(this.image, 171 * 8 , 0, 171, 193, posX + borderSize/2, numberOfFrame  + posY + borderSize/2,  this.width, this.height)
                } else {
                    numberOfFrame+= this.dropSpeed
                    window.requestAnimationFrame(drawTile)
                    ctx.clearRect(posX + borderSize/2, numberOfFrame - this.dropSpeed + posY + borderSize/2, this.width, this.height )
                    // 1. картинка 2. задает позицию кадра внутри картинки по х 3. 0 по y 4,5. размер кадра 6.  координаты самой картинки на холсте 7.8 размер изображения
                    ctx.drawImage(this.image, 171 * 8 , 0, 171, 193, posX + borderSize/2, numberOfFrame + posY + borderSize/2,  this.width, this.height)
                }
            }
            drawTile()
        }    
    }
    // создаем тайлы
    const tileYellow = new Tile(yellow, tileSize)
    const tileGreen = new Tile(green, tileSize)
    const tileBlue = new Tile(blue, tileSize)
    const tileRed = new Tile(red, tileSize)
    const tileEmpty = new Tile(empty, tileSize)
    // массив для создания случайных
    const tilesArr = [tileEmpty, tileYellow, tileGreen, tileBlue, tileRed]
    // добавляем в стэйт размеры поля
    return {
        ...state,
        tilesArr, canvas, ctx, widthInTile, heightInTile
    }
}