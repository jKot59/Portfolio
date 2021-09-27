function getAllSameTiles(indexOfTile, rowOfTile, {...arg}) {
    let {copyField, nameOfTile} = arg
    // 1. Найти и заменить таил по которму кликнули на 0
    copyField[rowOfTile][indexOfTile] = 0
    // 2. сходить на лево, сравнить два тайла
    if(copyField[rowOfTile][indexOfTile - 1] === nameOfTile) {
        // если равны запустить рекурсию
        getAllSameTiles(indexOfTile - 1, rowOfTile, arg)
    }
    // 3. сходить на право, сравнить два тайла
    // если таил равен номеру кликнутого и не равен 0
    if(copyField[rowOfTile][indexOfTile + 1] === nameOfTile ) {
        // если равны запустить рекурсию
        getAllSameTiles(indexOfTile + 1, rowOfTile, arg)
    }
    // 4. сходить на верх, сравнить два тайла. Но если индекс строки меньше чем 0, пропускаем
    if(copyField[rowOfTile - 1] && copyField[rowOfTile - 1][indexOfTile] === nameOfTile) {
        // если равны запустить рекурсию
        getAllSameTiles(indexOfTile, rowOfTile - 1, arg)
    }
    // 5. сходить в низ, сравнить два тайла. Но если индекс строки больше существующего, пропускаем
    if(copyField[rowOfTile + 1] && copyField[rowOfTile + 1][indexOfTile] === nameOfTile) {
        // 4. если равны запустить рекурсию
        getAllSameTiles(indexOfTile, rowOfTile + 1, arg)
    }
    return copyField
}

export default getAllSameTiles