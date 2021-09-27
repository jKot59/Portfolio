function blastBomb(x, y, indexOfTile, rowOfTile, copyField, count = 0) {
    // удаляем таил на который поставили бомбу
    copyField[rowOfTile][indexOfTile] = 0
    // 1. сходить на верх и удалить таил=
    if(copyField[rowOfTile - 1] && count < 1) {
        count+= 1
        // запускаем рекурсию со счетчиком
        blastBomb(x, y, indexOfTile, rowOfTile - 1, copyField, count)
    }
    // если сверху нечего сжигать (поле кончилось)
    if(!copyField[rowOfTile - 1] && count < 1) {
        count+= 1
    }
    // 2. сходить в низ и удалить таил
    if(copyField[rowOfTile + 1]  && count < 2) {
        count+= 1
        blastBomb(x, y, indexOfTile, rowOfTile + 1, copyField, count)
    }
    // 3. сходить на лево, удалить таил
    if(copyField[rowOfTile][indexOfTile - 1] && count < 3) {
        count+= 1
        blastBomb(x, y, indexOfTile - 1, rowOfTile, copyField, count)
    }
    // если с лева сжигать нечего (кончилось поле)
    if(!copyField[rowOfTile][indexOfTile - 1] && count < 3) {
        count+= 1
    }
    // 4. сходить на право удалить таил
    if(copyField[rowOfTile][indexOfTile + 1] && count < 4) {
        count+= 1
        blastBomb(x, y, indexOfTile + 1, rowOfTile, copyField, count)
    }
    return copyField
}

export default blastBomb