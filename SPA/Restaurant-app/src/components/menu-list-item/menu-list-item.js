import React from 'react';
import './menu-list-item.scss';
import ChosenCategory from '../category/category';
import { Link } from 'react-router-dom'


const MenuListItem = ({menuItem, onAddToCart}) => {
    const {title, price, url, category} = menuItem;
    return (
        <>
            <li className="menu__item">
                <ChosenCategory category={category}/>
                <Link key= {menuItem.id} to={`/${menuItem.id}`}>
                    <div className="menu__title">{title}</div>
                    <img className="menu__img" src={url} alt={title}></img>
                </Link>
                <div className="menu__category">Category: <span>{category}</span></div>
                <div className="menu__price">Price: <span>{price}</span></div>
                <button onClick={() => onAddToCart()} className="menu__btn">Add to cart</button>
            </li>
        </>
    )
}

export default MenuListItem;