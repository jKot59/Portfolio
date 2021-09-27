import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import { Button } from 'reactstrap';
import {BooksPage, HousesPage, BooksItem, CharacterPage, HouseItem, CharacterItem} from '../pages';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import img from './img/got.jpeg'
import WrongPage from '../wrongPage/wrongPage';

const StyledApp = styled.div`
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: none;
    overflow-x: hidden;
    background: url(${img}) center center no-repeat;
    background-size: cover;
    font-size: 16px;
    height: 100vh;	
`
const StyledRow = styled(Row)`
    justify-content: center;
    align-self: center;
    h2{
        text-align: center;
        color: #fff;
    }
`
export default class App extends Component {
    state = {
        pressed: false,
        error: false
    }

    componentDidCatch () {
        this.setState({
            error: true
        })
    }

    onHide = (pressed) => {
        this.setState({pressed : !pressed})
    }
    render() {
       
        const {pressed} = this.state
        const hideRandomChar = pressed ? null : <RandomChar/>;
        const randomChar = () => {
           return ( <StyledRow>
                    <Col lg={{size: 5, offset: 0}}>
                        {hideRandomChar}
                        <Button
                        color='primary'
                        onClick={ () => this.onHide(pressed)}>Hide random character</Button>
                    </Col>
            </StyledRow>
           )
        }

        if(this.state.error) {
            return (
                <span>Something was going wrong</span>
            )
        }
        return (
                <Router>
                    <StyledApp>
                        <Container>
                            <Header />
                        </Container>
                        <Container>
                            {/* на какой странице отображается. что отображается */}
                            <Switch>
                                <Route path='/' exact component={randomChar}/>
                                <Route path='/characters' exact component={CharacterPage}/>
                                <Route path='/houses' exact component={HousesPage}/>
                                <Route path='/books' exact component={BooksPage}/>
                                <Route path='/characters/:id' render={ ({match}) => {
                                    const {id}= match.params;
                                    return <CharacterItem id={id} page={'characters'}/>
                                    }
                                }/>
                                <Route path='/houses/:id' render={ ({match}) => {
                                        const {id}=match.params;
                                        return <HouseItem id={id} page={'houses'}/>
                                    }
                                }/>
                                <Route path='/books/:id' render={
                                    // деструктурируем параметры из Route
                                    ({match, location, history}) => {
                                        // забираем id из матч
                                        const {id} = match.params;
                                        // передаем пропс с айди для открытия нужного элемента
                                    return <BooksItem id={id} page={'books'}/>
                                    }
                                }/>
                                <Route component={WrongPage}/>
                            </Switch>
                        </Container>
                    </StyledApp>
                </Router>
        );
    }
};