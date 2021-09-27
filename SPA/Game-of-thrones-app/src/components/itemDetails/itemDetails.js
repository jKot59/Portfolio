import React, {Component} from 'react';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';
import styled from 'styled-components';

const CharDetails = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin: 60px;
    border: 3px solid red;
    border-radius: 5px;
    h4 {
        margin-bottom: 20px;
        text-align: center;
    }
`
const SelectError = styled.div`
    color: #fff;
    text-align: center;
    font-size: 26px;
    line-height: 500px;
`
const Field = ({item, field, label}) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label}</span>
            {/* после получения детей из компонента их переборе, клонировании и добавлении item из стэйта. Берем item и вынимаем свойство из переменной field */}
            <span>{item[field] ? item[field] : 'no info'}</span>
        </li>
    )
}

export {Field}

export default class ItemDetails extends Component {
    state = {
        item: null,
        loaded: false,
        error: false,
        itemId: null
    }

    componentDidMount () {
        this.updateItem()
    }
    componentDidUpdate (prevProps) {
        //сравниваем текущие пропсы с предыдущими
        if(this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }

    }
    componentDidCatch() {
        this.setState({error: true})
    }
    updateItem() {
        const {itemId, getData} = this.props;
        if(!itemId) {
            return
        }
        this.setState({loaded: false})
        getData()
        .then( item => {
            this.setState({item, loaded: true})
        })
    }
    render() {
        const {item, loaded, error} =this.state
        if(error) {
            return <ErrorMessage/>
        }
        if(!loaded) {
            return <Spinner/>
        }
        if(!item){
            return <SelectError>Please select a {this.props.select}</SelectError>
        }
        const name = this.props.renderItem(item)
        return (
            <CharDetails className=" rounded">
                <h4>{name ? name : 'no info'}</h4>
                <ul className="list-group list-group-flush">
                    {
                        // получаем всех детей этого компонента ItemDetails (это класс, в самом верху)
                        React.Children.map(this.props.children, (child) => {
                            // каждой копии ребенка (child) добавляем из стэйта item
                            return React.cloneElement(child, {item})
                        })
                    }
                </ul>
            </CharDetails>
        );
    }
}