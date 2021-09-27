import React, {Component} from 'react';
import RestoService from '../../services/resto-service'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button} from 'reactstrap';
import './cesar.scss';


class CesarSalad extends Component {
    state = {
        item: null,
        loaded: false
    }
    componentDidMount () {
        const getData = new RestoService()
        getData.getMenuItems()
        .then( res => res.map( item => {
            if(item.id === +this.props.id) {
                return this.setState({item})
            }
            return null
        }))
        .then( () => {
            this.setState({loaded: !this.state.loaded})
        })

    }

    render() {
        const {loaded} = this.state
        if (!loaded){
            return <h2>Loading</h2>
        }
        // !!!!! всегда делать загрузку перед тем как запрашивать данные с сервера, это не пустит код дальше и не вызовет ошибку
        const {title, price, url} = this.state.item
        return (
            <div>
            <Card>
              <CardImg  src={url} alt={title}/>
              <CardBody>
                <CardTitle tag="h3">{title}</CardTitle>
                <CardSubtitle tag="h4" className="mb-2 text-muted">Price {price}</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.<br/>
                    
                <Button>Add to cart</Button>
                <button onClick={() => this.props.onAddToCart()} className="menu__btn">Add to cart</button>
                </CardText>
              </CardBody>
            </Card>
          </div>
        )
    }
} 

export default CesarSalad