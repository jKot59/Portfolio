import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';
import { connect } from 'react-redux';
import WithRestoService from '../hoc';
import {menuLoaded, menuRequested, menuError, addedToCart} from '../../actions'
import Spinner from '../spinner';
import Error from '../error'

import './menu-list.scss';

// создаем компонент-конструктор

class MenuList extends Component {
    // после рендеринга делаем запрос на сервер
    componentDidMount() {
        //вызываем экшн, полученный из импорта и переданный в диспатч
        this.props.menuRequested();
        const {RestoService} = this.props;
        RestoService.getMenuItems()
        // отправляем данные с ссервера в редакс стор
        .then( res => this.props.menuLoaded(res))
        // отправляем данные ошибки с сервера в стор. menuError - это экшн 
        .catch( () => this.props.menuError())
    }
    
    render() {
        // достаем стэйт, который пришел из редакса с помощью connect, как аргумент-пропс mapStateToProps
        const {menuItems, loading, error, addedToCart} = this.props;
        // обработка ошибки должна быть на первом месте (до лоадинга и рендеринга)
        if(error) {
            return <Error/>
        }
        if(loading) {
            return <Spinner/>
        }
        const items = menuItems.map(menuItem => {
            return (
            <MenuListItem key={menuItem.id} menuItem={menuItem} onAddToCart={() => addedToCart(menuItem.id)}/>
            )
        })
        return (
            <View items = {items}/>
        )
    }
};
// выше логика код

//в mapStateToProps - в нем мы говорим, какие свойства из стора должны использоваться в компоненте. Она вызывается самим коннектом и передает в него стэйт как аргумент
const mapStateToProps = (state) => {
    return {
        menuItems: state.menu,
        loading: state.loading,
        error: state.error
    }
}
// отправляем в редакс данные с сервера
const mapDispatchToProps = {
    menuLoaded,
    menuRequested,
    menuError,
    addedToCart
}

// рендер код
const View = ({items}) => {
    return (
        <ul className='menu__list'>
            {items}
        </ul>
    )
}
//в mapStateToProps - в нем мы говорим, какие свойства из стора должны использоваться в компоненте. mapDispatchToProps - какие экшены должны использоваться в компоненте
export default  WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));
