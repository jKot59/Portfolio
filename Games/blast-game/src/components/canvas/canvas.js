import React, { Component } from "react";
import styled from "styled-components";
import background from '../../imgs/field.png';
import getAllSameTiles from "../../functions/getAllSameTiles";
import blastBomb from '../../functions/blastBomb';
import checkingForMoves from "../../functions/checkingForMoves";
import updateCanvas from "../../functions/updateCanvas";
import makeAfield from "../../functions/makeAfield";


const StyledCanvas = styled.canvas`
    position: absolute;
    z-index: 2;
    left: 3.8%;
    top: 17.7%;
    background: url(${props => props.bg}) no-repeat center;
    background-size: cover;
`
const Shield = styled.div`
    position: absolute;
    width: ${props => props.size + 'px'};
    height: ${props => props.size + 'px'};
    z-index: 4;
    left: 3.8%;
    top: 17.7%;
`
const MessageOfGame = styled.div`
    position: absolute;
    display: ${props => props.display};
    left: 3.8%;
    top: 17.7%;
    width: ${props => props.size + 'px'};
    height: ${props => props.size + 'px'};
    z-index: 7;
    color: white;
    font-size: 24px;
    text-align: center;
    align-items: center;
    justify-content: center;
    user-select: none;
    font-family: sans-serif;
    background-color: rgba(0,0,0, .5);
    border-radius: 10px;
`
export default class Canvas extends Component {
    state = {
        canvas: null,
        ctx: null,
        field: null,
        tilesArr: null,
        widthInTile: null,
        heightInTile: null,
        shield: false,
        mixField: 0,
        showMessage: false,
        textOfMessage: null,
        stateOfgame: null,
        tileSize: this.props.tileSize,
        quantityTile: this.props.quantityTile,
        dropSpeed: this.props.dropSpeed,
        borderSize: this.props.borderSize
    }

    async componentDidMount() {
        // создаем канвас и тайлы
        await this.setState(state =>  state = updateCanvas(this.state))
        setTimeout(() => {
            // рисуем поле
            this.drawTiles('firstDraw')
        }, 500)
        // создаем поле
        this.setState(state => state = makeAfield(this.state))
        // вешаем обработчик кликов 
        this.removeTiles()
    }

    componentDidUpdate(prevProps, prevState){
        const {blastY, blastX, trigger, conditionWin, conditionLose} = this.props
        const {stateOfgame, mixField, shield} = this.state
        // если бомба(trigger) появилась, а потом скрылась и не наступила победа или поражение и защита от кликов не активна
        // получить координаты бомбы и удалить тайлы
        if(prevProps.trigger !== trigger && trigger && stateOfgame === null && !shield) {
            // передаем координаты бомбы для взрыва
            this.blastABomb(blastY, blastX)
        }
        // если свободной комбинации нет
        // т.е количество перемешивании изменилось
        if(prevState.mixField !== mixField) {
            // если свободных комбинации нет, даем тайлам упасть а игроку просмотреть поле
            setTimeout(() => {
                // если перемешивыание уже было, то проиграл
                if(this.state.mixField > 1) {
                    this.setState({
                        stateOfgame: 'Нет свободных комбинаций. Поражение'
                    })
                    return
                } 
                // если перемешиваний еще не было, то показать сообщение
                this.setState({
                    showMessage: true,
                    textOfMessage: 'Нет свободных комбинаций'
                })
                // показать сообщение: перемешиваем...
                setTimeout(() => {
                    this.setState({
                        textOfMessage: 'Перемешиваем...'
                    })
                }, 1000)
                // перемешать
                setTimeout(() => {
                    this.setState(state => state = makeAfield(this.state))
                    this.drawTiles('firstDraw')
                }, 1500)
                // убрать сообщение
                setTimeout(() => {
                    this.setState({
                        showMessage: false
                    })
                }, 2000)

            }, 1000)
        }
        // если условия для победы соблюдены и перемешиваний было не больше 1
        if(prevProps.conditionWin !== conditionWin && mixField <= 1) {
            this.setState({
                stateOfgame: 'Победа!',
            })
            return
        }
        // если условия для проигрыша соблюдены
        if(prevProps.conditionLose !== conditionLose && mixField <= 1) {
            this.setState({
                stateOfgame: 'Закончились ходы. Поражение!',
            })
            return
        }
    }
    // на основании массива расставляем тайлы
    drawTiles (action, targetRow, targetIndex, count) {
        const {tilesArr} = this.state
        const {tileSize} = this.props
        const field = JSON.parse(JSON.stringify(this.state.field))
        //перебираем массив поля
        field.forEach( (mainField, everyRow) => {
            //берем массив каждой строки, перебираем его
            mainField.forEach( (everyTile, indexInRow) => {
                //  для каждого элемента находим тайл для отрисовки
                if(action === 'firstDraw') {
                    tilesArr[everyTile].spawnTileDraw(indexInRow * tileSize, everyRow * tileSize)
                }
                // рисуем пустой таил
                if(action === 'removeTiles' && everyTile === 0) {
                    tilesArr[everyTile].removeTilesDrow(indexInRow * tileSize, everyRow * tileSize)
                }
                // получаем таил чтобы его свдинуть в низ
                if(action === 'moveDown' && targetIndex === indexInRow && targetRow === everyRow && everyRow > 0) {
                    tilesArr[everyTile].moveDownDrow(indexInRow * tileSize, (everyRow - 1) * tileSize, action, targetRow, targetIndex, count)
                }
                // спавним вместо пустых тайлов, которые уже всплыли, новые цветные
                if(action === 'spawn' && targetIndex === indexInRow && targetRow === everyRow) {
                    tilesArr[everyTile].spawnTileDraw(indexInRow * tileSize, everyRow * tileSize)
                }
            })
        })
    }
    // удаление тайлов
    removeTiles() {
        const {tileSize, borderSize} = this.props
        // создаем функцию, которая будет выполняться при клике на поле
        const listenToclick = async (e) => {
            // делаем глубокую копию поля
            let copyField = JSON.parse(JSON.stringify(this.state.field))
            //получаем координату клика
            // с лева до курсора - половина рамки - с лева window до границы поля
            const targetX = e.clientX - borderSize/2 - e.target.getBoundingClientRect().left
            const targetY = e.clientY - borderSize/2 - e.target.getBoundingClientRect().top
            // получаем начальную точку тайла. координита клика минус остаток от деления координаты на размер тайла
            const clearTileX = targetX - targetX%tileSize
            const clearTileY = targetY - targetY%tileSize
            // получаем индекс тайла в строке
            const indexOfTile = clearTileX/tileSize
            // получаем номер строки где лежит таил
            const rowOfTile = clearTileY/tileSize
            // числовое имя тайла, для поиска таких же
            const nameOfTile = this.state.field[rowOfTile][indexOfTile]
            // получаем массив в котором все одинаковые тайлы заменены на пустые
            copyField = await getAllSameTiles(indexOfTile, rowOfTile, {copyField, nameOfTile})
            // находим все массивы с пустыми тайлами - перебираем каждый массив - оставляя только пустые
            const getOnlyZero = copyField.filter( eachRow => eachRow.includes(0)).map(row => row.filter( tile => tile === 0) )
            // если тайлы удаляются по горизонтали получаем массив, по вертикали несколько массивов
            // поэтому в одном случае обьединяем массивы с пустыми тайлами в один, в другом преобразуем масив с пустыми тайлами в строку и считаем количество нолей (т.е пустых тайлов)
            const toSameMeasure = Array.isArray(getOnlyZero) ? getOnlyZero.reduce((a,b) => a.concat(b)).length : getOnlyZero.join('').length
            //когда нашли нолей больше двух, перерисовываем игровое поле
            if(toSameMeasure > 2) {
                this.setState({
                    ...this.state,
                    field : JSON.parse(JSON.stringify(copyField)),
                    // щит используется для защиты от лишних кликов во время удаления тайлов и отрисовки новых
                    shield: true
                })
                
                this.drawTiles('removeTiles')
                
                setTimeout(() => {
                    this.bubblingEmptyTiles()
                }, 1100)
                // увеличиваем счет игры
                this.props.changeScore(toSameMeasure)
            }
        }
        // вешаем слушатель кликов по полю
        this.state.canvas.addEventListener('click', listenToclick)
    }
    
    // поднимаем пустые тайлы вверх
    bubblingEmptyTiles () {
        const {dropSpeed, tileSize} = this.props
        // делаем копию масива с пустыми тайлами
        let fieldWithEmpty = JSON.parse(JSON.stringify(this.state.field))
        // узнаем высоту одинаковых блоков, чтобы столько раз вызвать drop для поднятия пустых тайлов вверх.  - 1 потому что массив с 0
        let count = fieldWithEmpty.filter( eachRow => eachRow.includes(0)).map(row => row.filter( tile => tile === 0) ).length - 1
        const length = this.props.quantityTile - 1

        // функция для опускания цветного тайла на одну строку в низ
        const drop = () => {
            // берем каждую строку
            for( let j = 0; j <= length; j++) {
                // берем по одному тайлу из каждой строки
                for(let i = 0; i < length; i++) {
                    // когда таил равен нулю
                    if(fieldWithEmpty[length - i][length - j] === 0 ) {
                        // меняем нижний, пустой, тайл с верхним тайлом
                        fieldWithEmpty[length - i][length - j] = fieldWithEmpty[length - 1 - i][length - j]
                        fieldWithEmpty[length - 1 - i][length - j] = 0
                        this.setState({
                            ...this.state,
                            field: JSON.parse(JSON.stringify(fieldWithEmpty))
                        })
                        // передаем номер строки и индекс пустого тайла для отрисовки
                        this.drawTiles('moveDown', length - i, length - j)
                    } 
                }
            }    
        }

        drop()
        // функция которая опускает цветные тайлы на высоту пустых тайлов
        const load = () => {
            // если количество пустых тайлов в высоту 0
            if( count <= 0) {
                // начинаем добавлять на место пустых тайлов, цветные
                this.addRandomTiles()
            } else {
                // опускаем тайлы до тех пор, пока не достигнут низа
                drop()
                count--
                // задаем скорость падения тайлов. 50 - это максимальный размер тайла, 785 - это максимальная скорость падения тайла при максимальном размере. 20 - коэфициент
                timerId = setTimeout(load, (785 - (50 - tileSize) * 20) / dropSpeed)
            }
        }
        // запускаем падение, поле первого раза
        let timerId = setTimeout(load, (750 - (50 - tileSize) * 20) / dropSpeed)
    }
    // добавляем случайные тайлы на место пустых, после их всплытия
    addRandomTiles() {
        // 1. получить копию массива с пустыми
        const fieldForFill = JSON.parse(JSON.stringify(this.state.field))
        // 2. сделать заполненный массив
        const fullField = fieldForFill.map(item => {
            return item.map( tile => tile === 0 ? Math.round((Math.random() * 3) + 1) : tile)
        })
        this.setState({
            ...this.state,
            field: JSON.parse(JSON.stringify(fullField)),
            // снимаем щит от дополнительных кликов
            shield: false
        })
        // 3. сравнить каждый элемент и если не равны, заспавнить
        fieldForFill.forEach((item, i) => {
            item.forEach((index, j) => fullField[i][j] === index ? false : this.drawTiles('spawn', i, j))
        })
        // ищем свободную комбинацию. Вернет 0 если есть комбинация, если 1 нет комбинации
        let result = checkingForMoves(this.state.field)
        // увеличиваем или оставляем таким же количество перемешиваний поля
        this.setState({mixField: this.state.mixField + result})
    }
    // взрываем бомбу. Вызывается при изменении пропса trigger
    async blastABomb(coordY, coordX) {
        const {borderSize, tileSize} = this.props
        // получаем копию поля
        let copyField = JSON.parse(JSON.stringify(this.state.field))
        // преобразуем координаты в числа и вычитаем половину рамки
        let y = parseInt(coordY) - borderSize/2
        let x = parseInt(coordX) + borderSize/2
        // округляем координаты
        let calcCoordY = y  - y%tileSize
        let calcCoordX = x  - x%tileSize 
        // получаем индекс тайла в строке
        const indexOfTile = (calcCoordX/this.props.tileSize) - 1 
        // получаем номер строки где лежит таил
        const rowOfTile = (calcCoordY/this.props.tileSize) - 2
        // запускаем функцию для получения взорванного поля
        let newField = await blastBomb(calcCoordX, calcCoordY, indexOfTile, rowOfTile, copyField)
        this.setState({
            ...this.state,
            field: JSON.parse(JSON.stringify(newField)),
            // включаем щит от дополнительных кликов
            shield: true
        })
        // рисуем взорванное поле
        this.drawTiles('removeTiles')
        // прибавляем счет
        this.props.changeScore(9)
        // делаем дальше по циклу всплытие
        setTimeout(() => {
            this.bubblingEmptyTiles()
        }, 900)
    }

    

    render() {
        const shield = this.state.shield ? <Shield size={this.props.tileSize * this.props.quantityTile + this.props.borderSize}/> : false
        return <>
            {/* сообщение о победе/поражении */}
            <MessageOfGame 
            display={this.state.stateOfgame !== null? 'flex' : 'none'} 
            size={this.props.tileSize * this.props.quantityTile + this.props.borderSize}>{this.state.stateOfgame}</MessageOfGame>
            {/* сообщение о том, что нет свободных комбинаций */}
            <MessageOfGame 
            display={this.state.showMessage ? 'flex' : 'none'} 
            size={this.props.tileSize * this.props.quantityTile + this.props.borderSize}>{this.state.textOfMessage}</MessageOfGame>
            {shield}
            <StyledCanvas id="blast" bg={background}> You browser does not support the canvas</StyledCanvas>
        </>
    }
}