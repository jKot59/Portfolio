import checkingForMoves from "./checkingForMoves"

export default function makeAfield (state) {
    const {quantityTile} = state
    // получаем величину поля
    const widthX = quantityTile
    const widthY = quantityTile
    let field = []
    // берем строку
    for(let j = 0; j < widthY; j++) {
        let row = []
        // наполняем строку рандомными тайлами
        for(let i = 0; i < widthX; i++) {
            row.push(Math.round(Math.random() * 3) + 1)
        }
        // пушим строку в  общий массив и делаем то же самое со всеми строками
        field.push(row)
    }
    // ищем свободную комбинацию
    let result = checkingForMoves(field)
    // возвращаем стэйт с новым полем и измененным или прежним числом перемешиваний
    return {
        ...state,
        field,
        mixField: state.mixField + result
    }
}