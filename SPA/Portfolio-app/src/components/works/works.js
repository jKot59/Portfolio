import React, {Component} from 'react';
import styled from 'styled-components';
import {Button } from 'reactstrap';
import RenderWorks from '../renderWorks';
import ErrorMessage from '../errorMessage/errorMessage';
import { connect } from 'react-redux';
import { getWorks1 } from '../redux/action';
import getResource from '../../services/fetch/getResource';
import { activeFilter1 } from '../redux/action';
import ItemOfWork from '../itemOfWork';
import { Spinner } from 'reactstrap';

const SortButton = styled(Button)`
    align-self: auto;
    margin-right: 10px;
`


class Works extends Component {
    state = {
        loaded: false,
        error: false
    }
    componentDidMount () {
        const getData = new getResource()
        getData.getWorks()
        .then( works => this.props.getWorks1(works))
        .then(() => this.onSort())
        .then(() => this.setState({
            loaded: true
        }))
    }
    componentDidUpdate (prevProps) {
        if (prevProps.activeFilter !== this.props.activeFilter) {
            this.onSort()
        }
    }
    componentDidCatch () {
        this.setState({
            error: true
        })
    }
    // сортирова массива по алфавиту
    onSortFilter = (e) => {
        // если кликнули на кнопку с надписью 'Алфавиту'
        if(e.target.innerHTML === 'Алфавиту') {
            this.props.activeFilter1('alphabet')
        } 
        if (e.target.innerHTML === 'Дате') {
            this.props.activeFilter1('date')
        }
    }
    onSort = () => {
        // создаем копию массива и записываем в переменную
        let sortedArray = [...this.props.works];

        if(this.props.activeFilter === 'alphabet') {
            // сортируем массив обьектов не зависимо от регистра
            sortedArray.sort((a, b) => a.name?.localeCompare(b.name))
            this.props.getWorks1(
                sortedArray
            )
        }
        if(this.props.activeFilter === 'date') {
            sortedArray.sort((a, b) => new Date(a.date) - new Date(b.date))
            this.props.getWorks1(
                sortedArray
            )
        }
    }

    render () {
        const {id ,works, activeFilter} = this.props
        const {error, loaded} = this.state
        // находим из стэйта кнопку со значением name workTree. У найденного обьекта берез начение ключа value
        const btnWorks = id === 'workTree' ? true : false;   
        // паттерн рендер-функции. С помощью нее определяем что будет рендерится
        const renderMyWorks = works
            .filter( item => item.id === 'firstWork' || item.id === 'lookShop' || item.id === 'workJs')
            .map( item => <ItemOfWork key={item.id} item={item} /> ) 
        // сортировочные кнопки
        const sortHeader = loaded ? (
            <>
            <span>Сортировать по:</span>
            <SortButton
            // смена цвета кнопок фильтров
            color={activeFilter === 'alphabet' ? 'info': ''}
            onClick={ (e) => this.onSortFilter(e)}>Алфавиту</SortButton>
            <SortButton
            color={activeFilter === 'date' ? 'info': ''}
            onClick={ (e) => this.onSortFilter(e)}>Дате</SortButton>
            </>
        ) : <Spinner/>

        // обработка ошибки
        const errorMessage = error ? <ErrorMessage/> : renderMyWorks;

        // паттерн JSX элементов как свойства компонентов
        return (
            <RenderWorks 
                errorMessage={errorMessage}
                sortHeader={sortHeader}
                btnWorks={btnWorks}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        works: state.worksStore,
        activeFilter: state.activeFilter
    }
}

const mapDispatchToProps = {
    getWorks1,
    activeFilter1

}
export default connect(mapStateToProps, mapDispatchToProps)(Works)