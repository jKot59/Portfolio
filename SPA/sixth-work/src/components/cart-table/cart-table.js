import React from 'react';
import './cart-table.scss';
import { connect } from 'react-redux';
import {deleteFromCart} from '../../actions';
import { Button } from 'reactstrap';
import RestoService from '../../services/resto-service';


const CartTable = ({items, deleteFromCart}) => {
    return (
        <>
            <div className="cart__title">Ваш заказ:</div>
            <div className="cart__list">
                {
                    items.map( item => {
                        const {title, price, url, id, quantity} = item;
                        return (
                            <div key={id} className="cart__item">
                                <div className='cart__quantity'>{quantity}</div>
                                <img src={url} className="cart__item-img" alt={title}></img>
                                <div className="cart__item-title">{title}</div>
                                <div className="cart__item-price">{price}$</div>
                                <div onClick={() => deleteFromCart(id)}className="cart__close">&times;</div>
                            </div>
                        )
                    })
                }
                <Button onClick={() => {
                    const postCart = new RestoService()
                    postCart.postCart(items)
                }} color="warning">Order</Button>
            </div>
        </>
    );
};



// деструктурируем стэйт и получаем items. Получаем из редакс стора items
const mapStateToProps = ({items}) => {
    return {
        items
    }
}

// отправляем в стор
const mapDispatchToProps = {
    deleteFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);