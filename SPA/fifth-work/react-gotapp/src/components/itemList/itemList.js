import React, {Component} from 'react';
import Spinner from '../spinner';
import getUniqueId from '../getUniqueId';
import ErrorMessage from '../errorMessage';
import styled from 'styled-components';
import getResource from '../../services/fetchRequest';

const StyledItemList = styled.ul`
    cursor: pointer;
    margin: 60px;
    user-select: none;
    padding-left: 0;
    border: 3px solid red;
    border-radius: 5px;
    li:hover {
        background-color: grey;
        color: white;
    }
`

class ItemList extends Component {
   
    renderItems(arr) {
        const {page, size} =this.props
        return arr.map ( (item, i) => {
            const id = getUniqueId()
            const label = this.props.renderItem(item) // это возвращается вверх там вынимаем то что нам надо, например item.name и возвращаем сюда
            return(
                <li 
                    key={id}
                    className="list-group-item"
                    onClick={() => this.props.onItemSelected( ((page - 1) * size + 1) + i)}>
                       {label}
                </li>
            )
        })
    }



    render() {
        const {data} = this.props
        const items = this.renderItems(data)
        return (
            <StyledItemList>
                {items}
            </StyledItemList>
        );
    }
}
const withData = (View, getData) => {
    return class extends Component {
        state = {
            itemList: null,
            error: false,
        }
    
        componentDidMount () {
            // const {page, size} =this.state
            getData()
            .then( itemList => {
                this.setState({
                    itemList
                })
            })
        }

        componentDidCatch () {
            this.setState({error: true})
        }

        render() {
            const {itemList, error} = this.state;
    
            if(!itemList) {
                return <Spinner/>
            }
    
            if(error) {
                return <ErrorMessage/>
            }
            
            return <View {...this.props} data={itemList}/>
        }
    }
}
const x = () => getResource('https://www.anapioficeandfire.com/api/characters?page=5&pageSize=10')
export default withData(ItemList, x);