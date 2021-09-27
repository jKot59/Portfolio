import React, {Component} from 'react';
import getResource from '../../services/fetchRequest';
import Spinner from '../spinner';
import styled from 'styled-components';

const StyledRandomChar = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
    h4 {
    margin-bottom: 20px;
    text-align: center;
    }
    .term {
    font-weight: bold;
    }
`
export default class RandomChar extends Component {
    constructor() {
        super();
        this.state = {
            randomChar : {
            name: null,
            gender: null,
            born: null,
            died: null,
            culture: null
            },
            loaded: false,
            error: false
        }
    }
    componentDidMount () {
        this.updateChar()
        this.timerId = setInterval(this.updateChar, 1500)
    }

    componentWillUnmount () {
        clearInterval(this.timerId)
    }
    getAllCharacters(char) {
        
        this.setState( ({randomChar}) => {
            const newChar = {...randomChar,
                 name: char.name ? char.name : 'no information',
                 gender: char.gender ? char.gender : 'no information',
                 born: char.born ? char.born : 'no information',
                 died: char.died ? char.died : 'no information',
                 culture: char.culture ? char.culture : 'no information'
                }
            return {
                randomChar: newChar
            }
        })
    }
    updateChar = () => {
        const id = Math.floor(Math.random()*140 + 25)
        // по id сделать
        getResource(`https://www.anapioficeandfire.com/api/characters/${id}`)
            .then( char => {
                return this.getAllCharacters(char);
            })
            .then( () => this.onLoad())
            .catch( () => this.onError())
            
    
    }
 
    onLoad () {
        this.setState({loaded: true})
    }
    onError () {
        this.setState({
            error: true,
            loaded: false
        })
    }
    render() {
        const {randomChar, loaded, error} = this.state

        const loadContent = loaded ? <View char={randomChar}/> : null;
        const errorMessage = error ? <ErrorMessage/> : null;
        const spiner = (!error && !loaded) ? <Spinner/> : null;
        
        return (
            <>
                <h2>Welcome to the Game of Thrones API</h2>
                <div className="random-block rounded">
                    {spiner}
                    {loadContent}
                    {errorMessage}
                </div>
            </>
        );
    }
}

const View = ({char}) => {
    return (
        <StyledRandomChar>
        <h4>Random Character: {char.name}</h4>
        <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex justify-content-between">
                <span className="term">Gender </span>
                <span>{char.gender}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
                <span className="term">Born </span>
                <span>{char.born}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
                <span className="term">Died </span>
                <span>{char.died}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
                <span className="term">Culture </span>
                <span>{char.culture}</span>
            </li>
        </ul>
        </StyledRandomChar>
    )
}

const ErrorMessage = () => {
    return (
        <span>Something was going wrong</span>
    )
}