import React, { Component } from 'react';
import styled from 'styled-components';
import progress from '../../imgs/progress-inner.png';
import moves from '../../imgs/moves.png';
import booster from '../../imgs/booster.png';
import barBase from '../../imgs/bar-base.png';
import barInner from '../../imgs/bar-inner.png';
import bomb from '../../imgs/bomb.png';
import Canvas from '../canvas/canvas';
import PauseMessage from '../pauseMessage/pauseMessage';
import PauseButton from '../pauseButton/pauseButton';


const StyledWall = styled.section`
    position: relative;
    width: 1000px;
    height: 700px;
    margin: 0 auto;
    overflow: hidden;
    background: #a1a1a1 ;
    .boosterShop__boosterText {
        margin-top: 70px;
    }
    .first {
        margin-top: 10px;
    }
    .boosterShop__headerText {
        font-size: 24px;
        font-weight: bold;
        text-align: center;
        grid-column: 1/4;

    }
    .boosterShop__movesText {
        font-size: 48px;
        margin-top: 18%;
        padding-left: 4%;
        margin-bottom: 0;
        user-select: none;
    }
    .boosterShop__pointsText {
        margin-top: 20%;
        margin-bottom: 0;
        padding-left: 4%;
        user-select: none;

    }
    .boosterShop__scoreText{
        margin-top: 0;
        font-size: 36px;
        padding-left: 4%;
        user-select: none;

    }
    .bomb, .bombMove {
        padding-top: 10px;
        width: 50px;
        height: 50px;
        user-select: none;
    }
    .bombMove {
        position: absolute;
        z-index: 99;
    }
`
const StyledProgress = styled.div`
    position: absolute;
    top: -3%;
    left: 26.8%;
    z-index: 3;
    width: 38.1%;
    height: 13%;
    background: url(${props => props.bg}) no-repeat;
    background-size: contain;
    background-position: center;
    .progressBar {
        position: relative;
        display: flex;
        width: 55%;
        height: 20px;
        margin: 0 auto;
        margin-top: 10px;
        justify-content: center;
    }
`
const StyledMoves = styled.div`
    position: absolute;
    top: 22%;
    left: 60%;
    width: 31%;
    height: 40%;
    background: url(${props => props.bg}) no-repeat;
    background-size: contain;
    background-position: right;
    `
const StyledText = styled.p`
    margin-top: 7%;
    margin-bottom: 0;
    text-align: center;
    color: white;
`
const StyledBooster = styled.div`
    position: relative;
    width: 100px;
    height: 100px;
    background: url(${props => props.bg}) no-repeat;
    background-size: contain;
    background-position: center;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    span {
        position: absolute;
        top: 30px;
        color: white;
        font-size: 24px;
        font-family: sans-serif;
        -webkit-text-stroke: 1px black;
    }
`
const StyledBarInner = styled.div`
    position: absolute;
    top: 2.5%;
    left: calc(-200% + ${props => props.progress});
    width: 200%;
    height: 100%;
    background: url(${props => props.bg}) no-repeat;
    background-position: left;
    
`
const StyledBarBase = styled.div`
    position: relative;
    width: 100%;
    background: url(${props => props.bg}) no-repeat;
    background-position: center;
    overflow: hidden;
    border-radius: 10px;
`
const BoosterShop = styled.div`
    position: absolute;
    top: 73.5%;
    left: 61%;
    height: 10%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-column-gap: 10px;
    `
export default class MainPage extends Component {
    state = {
        score: 0,
        moves: 15,
        progress: `0%`,
        goal: 150,
        pause: true,
        bombPosX: '0',
        bombPosY: '0',
        hideBomb: true,
    }
    // изменяем счет. вызывается из канваса
    changeScore = (points) => {
        this.setState({
            score: this.state.score + points,
            moves: this.state.moves - 1, 
            progress: (this.state.score / this.state.goal) * 100 + '%'
        })
    }
    // ставим бомбу. вызывается при клике на StyledBooster
    setAbomb = () => {
        // запускаем движение бомбы за курсором
        const followBomb = (e) => {
            // текущее положение курсора - расстояние от серого поля до кря окна . - 25 сдвиг ширины картинки 
            const targetX =  e.pageX - document.querySelector('.game').getBoundingClientRect().left - 25
            const targetY =  e.pageY - document.querySelector('.game').getBoundingClientRect().top - 40
            //hideBOmb нужна для тоборажения display, передачи триггера в канавас для взрыва и отключения обработчика mousemove
            this.setState({
                bombPosX: targetX + 'px',
                bombPosY: targetY + 'px',
                hideBomb: !this.state.hideBomb
            })
            // перемещаем бомбу за курсором
            window.addEventListener('mousemove', move)
            // если поставили бомбу, она скрывается и обработчик удаляется
            if(e.target.style.display === 'none') {
                window.removeEventListener('click', followBomb)
            }
        }
        // прекращаем движение бомбы за курсором
        const move = (e) => {
                // текущее положение курсора - расстояние от серого поля до кря окна
                const targetX =  e.pageX - document.querySelector('.game').getBoundingClientRect().left - 25
                const targetY =  e.pageY - document.querySelector('.game').getBoundingClientRect().top - 40
                this.setState({
                    bombPosX: targetX + 'px',
                    bombPosY: targetY + 'px',
                })
                // когда бомба поставлена, она скрывается и обработчик удаляется
                if(this.state.hideBomb) {
                    window.removeEventListener('mousemove', move)
                }
        }
        
        // вызываем при клике, чтобы бомба сразу же появилась под курсором
        window.addEventListener('click', followBomb)
    }
    // ставим паузу
    pause = () => {
        this.setState({
            pause: !this.state.pause
        })
    }

    render() {
        let win = this.state.score >= this.state.goal && this.state.moves > -1 ? 'win' : false
        let lose = this.state.score < this.state.goal && this.state.moves < 1 ? 'lose' : false
        return <StyledWall className='game'>
                <Canvas 
                quantityTile={3} 
                tileSize={40} 
                borderSize={29} 
                dropSpeed={3} 
                changeScore={this.changeScore} 
                blastX={this.state.bombPosX} 
                blastY={this.state.bombPosY} 
                trigger={this.state.hideBomb}
                conditionWin={win}
                conditionLose={lose}/>
                <StyledProgress bg={progress}>
                    <StyledText>Прогресс</StyledText>
                    <div className="progressBar">
                        <StyledBarBase bg={barBase}>
                            <StyledBarInner bg={barInner} progress={this.state.progress}/>
                        </StyledBarBase>
                    </div>
                </StyledProgress>
            <StyledMoves bg={moves}>
                <StyledText className='boosterShop__movesText'>{this.state.moves}</StyledText>
                <StyledText className='boosterShop__pointsText'>Очки</StyledText>
                <StyledText className='boosterShop__scoreText'>{this.state.score}</StyledText>
            </StyledMoves>
            <PauseButton setAPause={this.pause}/>
            <PauseMessage hidden={this.state.pause}/>
            <BoosterShop>
                <StyledText className='boosterShop__headerText'>Бонусы</StyledText>
                <StyledBooster bg={booster} onClick={this.setAbomb}>
                    <img src={bomb} alt='bomb' className='bomb'/>
                    <span>Бомба</span>
                    <StyledText className='boosterShop__boosterText first'>Free</StyledText>
                </StyledBooster>
                <StyledBooster bg={booster}>
                    <StyledText className='boosterShop__boosterText second'>Free</StyledText>
                </StyledBooster>
                <StyledBooster bg={booster}>
                    <StyledText className='boosterShop__boosterText third'>Free</StyledText>
                </StyledBooster>
            </BoosterShop>
            {/* бомба бегает за курсором */}
            <img 
            src={bomb} 
            alt='bombMove' 
            className='bombMove' 
            style={{display: this.state.hideBomb ? 'none' : 'block', top: this.state.bombPosY, left: this.state.bombPosX}}/>
        </StyledWall>
    }
}