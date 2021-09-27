import React from 'react';
import {MainPage, CartPage, CesarSalad} from '../pages';
import AppHeader from '../app-header';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Background from './food-bg.jpg';

const App = ({totalPrice}) => {

    return (
        <Router>
            <div style={{background: `url(${Background}) center center/cover no-repeat`, height:`100vh`}} className="app">
                <AppHeader total={totalPrice}/>
            <Switch>
                <Route path='/' exact component={MainPage}/>
                <Route path='/cartPage' component={CartPage}/>
                <Route path='/:id' render={ ({match}) => {
                    const {id} = match.params
                    return <CesarSalad id={id}/>
                }}/>
            </Switch>
            </div>
        </Router>
    )
}

// получаем из стор корзину
const mapStateToProps = ({totalPrice}) => {
    return {
        totalPrice
    }
}
// подключаем стор к компоненту
export default connect(mapStateToProps)(App);