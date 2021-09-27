import React, {Component} from 'react';
import ItemList from '../../itemList';
import ErrorMessage from '../../errorMessage';
import styled from 'styled-components';
import getResource from '../../../services/fetchRequest';
import {withRouter} from 'react-router-dom';


class CharacterPage extends Component {
    state = {
        error: false
    }

    componentDidCatch () {
        this.setState({
            error: true
        })
    }

    render () {
        const StyledErrorMessage = styled.div `
            color: white;
            padding-top: 20px;
        `
        if(this.state.error) {
            return (
                <StyledErrorMessage>
                    <ErrorMessage/>
                </StyledErrorMessage>
            )
        }

        return(
            <ItemList 
            // функция по выбору элемента. history API позволяет переходить на другие страницы
            onItemSelected={ itemId => {
                 this.props.history.push(`${itemId}`)
                }
            }
            getData={ () => getResource('https://www.anapioficeandfire.com/api/characters?page=5&pageSize=10')}
            renderItem={ ({name, gender}) => `${name} (${gender})`}
            // изменить страницу на false и обработать ошибку 404, чтобы пользователь не ждал
            page={5}
            size={10}/>
        )
    }
}
// withRouter - компонент высшего порядка оборачивает другие компоненты, чтобы предоставить им новые свойства
export default withRouter(CharacterPage);

