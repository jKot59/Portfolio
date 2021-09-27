import React, {Component} from 'react';
import Photo from '../../photo';
import LikeProfile from '../../like-profile';
import myImage from '../../../img/my.jpg';
import { Link} from 'react-router-dom';
import styled from 'styled-components';
import getResource from '../../../services/fetch/getResource';
import { Spinner } from 'reactstrap';
import { connect } from 'react-redux';
import { getData1 } from '../../redux/action';
import ErrorMessage from '../../errorMessage';


const StyledSpinner = styled(Spinner)`
    position: absolute;
    top: 200px;
    left: 500px;
`
const StyledMainPage = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: grid;
    height: 100vh;
    width: 100vw;
    grid-template-columns: 1fr repeat(2, 1fr);
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-auto-rows: minmax(50px, auto);
    .about, .work, .contacts, .newPage {
        width: 100%;
        line-height: 50px;
        /* font-size: 36px; */
        align-self: center;
        justify-self: center;
    }
    .work {
        
    }
    .about {
    }
    .contacts {
    }
    .newPage {
    }
    .mainPage__navigation {
        display: grid;
        grid-column: 3/3;
        grid-row: 2/4;
        grid-gap: 2vh;
        grid-auto-columns: minmax(auto, 400px);
        height: auto;
        align-self: center;
        justify-self: center;
    }
    .mainPage__avatar {
        display: grid;
        grid-template-rows: 1fr 1fr;
        grid-row: 2/4;
        grid-gap: 10px;
        gap: 10px;
        margin-left: 10px;
    }
`

class MainPage extends Component {
    render() {
        // даные для создания списка с работами
        return (
            <StyledMainPage className='mainPage'>
                <section className='mainPage__avatar'>
                    <h1>My portfolio</h1>
                    {/* фото профиля */}
                    <Photo url={myImage}/>
                    {/* кнопка лайк */}
                    <LikeProfile/>
                </section>
                <nav className='mainPage__navigation'>
                    <Link className='btn btn-primary work' to='/workTree'>Works</Link>
                    <Link className='btn btn-primary about' to='/aboutMe'>AbouMe</Link>
                    <Link className='btn btn-primary contacts' to='/contacts'>Contacts</Link>
                    <Link className="btn btn-primary newPage" to='/testPage' >New page</Link>
                </nav>
            </StyledMainPage>
        )
    }
}

const withMainPage = () => {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                loaded: false,
                error: false
            };
        }
        componentDidMount () {
            //вызываем ресурс для запроса на сервер
            const getData = new getResource()
            //получаем данные, меняем стэйт
            getData.getData()
            // вызываем полученную из стора экшн-функцию которая получает в аргументы данные и относит в стор
            .then( data => this.props.getData1(data))
            .then( () => this.setState({loaded: true}))
            .catch( () => this.setState({error: true}))         
        }
        render() {
            if(this.state.error) {
                return <ErrorMessage/>
            }
            if(!this.state.loaded) {
                return  <StyledSpinner color='danger'/>
            }
            return <MainPage/>
        }
    }
}
const mapStateToProps = (state) => {
    return {
        data: state.dataStore,
        closeAll: state.closeAll
    }
}

const mapDispatchToProps = {
    // передаем его в стор, теперь чтобы он заработал, его нужно вызвать где-нибудь
    getData1,
}
// подключаем mainpage к стор
export default connect(mapStateToProps, mapDispatchToProps)(withMainPage(MainPage))