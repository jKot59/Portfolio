const drawTile = (...args) => {
    let [numberOfFrame, endFrame, posX, posY, ctx, borderSize, width, height, image] = args
    if(numberOfFrame <= endFrame) {
        window.requestAnimationFrame(() => drawTile(numberOfFrame, endFrame, posX, posY, ctx, borderSize, width, height, image))
        ctx.clearRect(posX+borderSize/2, posY+borderSize/2, width, height)
        // 1. картинка 2. задает позицию кадра внутри картинки по х 3. 0 по y 4,5. размер кадра 6.  координаты самой картинки на холсте 7.8 размер изображения
        ctx.drawImage(image, 171 * numberOfFrame , 0, 171, 193, posX + borderSize/2, posY + borderSize/2,  width, height)
        numberOfFrame += 1
    } else return
}

export default drawTile