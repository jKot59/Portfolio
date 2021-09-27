import React, {Component} from 'react';
import ItemList from '../../itemList';
import getResource from '../../../services/fetchRequest';
import {withRouter} from 'react-router-dom';

class BooksPage extends Component {
    state = {
        error: false
    }

    componentDidCatch () {
        this.setState({
            error: true
        })
    }

    render() {
        const {history} = this.props
        return (
            <ItemList
            onItemSelected={ itemId => {
                history.push(`${itemId}`)
            }}
            getData={ () => getResource('https://www.anapioficeandfire.com/api/books')}
            renderItem={ item => `${item.name}`}
            page={1}
            size={10}/>
        )
    }
}

export default withRouter(BooksPage)