import getAllSameTiles from "../functions/getAllSameTiles";


function checkingForMoves(field) {
    // считаем количество тайлов рядом
    let count
    // берем номер строки
    for(let j = 0; j < field.length; j++) {
        // берем номер тайла
        for(let i = 0; i < field.length; i++) {
            // если нашли первую комбинацию, то игра имеет продолжение
            if(count > 2) {
                // если есть комбинация, возвращаем 0 для арифметики
                return 0
            }
            // каждый раз берем поле
            let copyField = JSON.parse(JSON.stringify(field))
            // берем имя искомого тайла
            let nameOfTile = copyField[j][i]
            // ищем комбинацию, превращая одинаковые тайлы-соседи в 0
            copyField = getAllSameTiles(i, j, {copyField, nameOfTile})
            // находим все массивы с нолями - перебираем каждый массив - оставляя только ноли
            const getOnlyZero = copyField.filter( items => items.includes(0)).map(item => item.filter( i => i === 0) )
            // если тайлы удаляются по горизонтали получаем массив, по вертикали несколько массивов
            // поэтому в одном случае обьединяем массивы в один, в другом преобразуем масив в строку
            // считаем количество нолей, как результат длины найденной комбинации
            count = Array.isArray(getOnlyZero) ? getOnlyZero.reduce((a,b) => a.concat(b)).length : getOnlyZero.join('').length
        }
    }
    // если не нашли комбинации, то игра в тупике, возвращаем 1 для увеличения количества тупиков
    return 1
}

export default checkingForMoves