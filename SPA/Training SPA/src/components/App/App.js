import React, {Component} from 'react';
import Background from '../background';
import {Route} from 'react-router-dom';
import MainPage from '../pages/mainPage/mainPage';
import styled from 'styled-components';
import Works from '../works';
import AboutMe from '../aboutMe';
import Contacts from '../contacts';
import EmptyPage from '../pages/emptyPage/emptyPage';
import { withRouter } from 'react-router-dom';



const StyledApp = styled.div`
    position: relative;
    overflow: hidden;
    h1 {
        position: absolute;
        top: 50px;
        left: 40%;
        font-weight: bold;
        user-select: none;
    }
    h2 {
        position: absolute;
        top: 260px;
        left: 40%;
    }
`
class App extends Component {
    // с помощью withRouter осуществляем переход на главную страницу при клике на пустое место
    closeAll = (e) => {
        if(e.target.matches('.mainPage')) {
            this.props.history.push('/')
        }
    }
    render() {
        return (
                <StyledApp onClick={this.closeAll} className='app'>
                    {/* // канвас фон */}
                    <Background/>
                    <MainPage/>
                    <Route path='/:id' render={ ({match}) => {
                        const id = match.params.id
                        switch (id) {
                            case 'workTree':
                                return <Works id={id}/>

                            case 'aboutMe':
                                return <AboutMe id={id}/>

                            case 'contacts':
                                return <Contacts id={id}/>

                            case 'testPage':
                                return <EmptyPage/>

                            default:
                                return
                        }
                    }}/>
                </StyledApp>
        )
    }
}

export default withRouter(App)