import React, {Component} from 'react';
import ItemList from '../../itemList';
import getResource from '../../../services/fetchRequest'
import { withRouter } from 'react-router-dom';

class HousesPage extends Component {
    state = {
        error: false
    }

    componentDidCatch () {
        this.setState({
            error: true
        })
    }

    render() {
        return (
            <ItemList
            onItemSelected={ itemId => {
                this.props.history.push(`${itemId}`)
            }}
            getData={ () => getResource('https://www.anapioficeandfire.com/api/houses')}
            renderItem={ item => item.name}
            page={1}
            size={10}/>
        )
    }
}
export default withRouter(HousesPage);