import React, {Component} from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import styled from 'styled-components';
import ErrorMessage from '../errorMessage';
import { connect } from 'react-redux';
import getResource from '../../services/fetch/getResource';
import { getAboutMe1 } from '../redux/action';
import { Spinner } from 'reactstrap';


const Wrapper = styled.div`
    display: ${props => props.btnAbout ? '' : 'none'};
    position: absolute;
    top: 100px;
    left: 450px;
    .toast{
    height: auto;
    }
`
const ListAboutMe = styled.ul`
    font-size: 20px;
    font-weight: bold;
`

class AboutMe extends Component {
    state = {
        loaded: false,
        error: false
    }
    componentDidMount () {
        const getData = new getResource();
        getData.getAboutMe()
        .then( aboutMe => this.props.getAboutMe1(aboutMe))
        .then(() => this.setState({loaded: true}))
    }
    componentDidCatch () {
        this.setState({error: true})
    }
  //пропсы тут уже по дефолту  висят. их нужно только прописать типо this.props.имя
    render () {
        // деструктурируем из пропса данные
        const {id, error} = this.props
        // if id comes with aboutMe property then open same field
        const btnAbout = id === 'aboutMe' ? true : false;
        // стилизуем окно с инфой обо мне и через пропс скрываем-открываем его
        
        const renderInfo = this.props.aboutMe
        const load = this.state.loaded ? (
            <>
                <ToastHeader icon="primary">
                    <h4>{renderInfo.title}</h4>
                </ToastHeader>
                <ToastBody>
                    <ListAboutMe>
                        <li>{renderInfo.subtitle.age}</li>
                        <li>{renderInfo.subtitle.activity}</li>
                        <li>{renderInfo.subtitle.hobby}</li>
                        <li>{renderInfo.subtitle.stack}</li>
                    </ListAboutMe>
                </ToastBody>
            </>
        ) : <Spinner/>
        const errorMessage = error ? <ErrorMessage/> : load
        // рендерим верску
        return (
            <Wrapper btnAbout={btnAbout}>
                <Toast>
                    {errorMessage}
                </Toast>
            </Wrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        aboutMe: state.aboutMeStore
    }
}

const mapDispatchToProps = {
    getAboutMe1
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutMe)