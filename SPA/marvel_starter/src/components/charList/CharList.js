import React, { useState, useEffect } from 'react';
import './charList.scss';
// import CharListItem from '../charListItem/CharListItem';
import { getAllCharacters } from '../../services/MarvelServices';
import Spinner from '../spinner/Spinner';
import Error from '../error/Error';
import PropTypes from 'prop-types';

const CharList = (props) => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const [loading2, setLoading2] = useState(false)
    const [error, setError] = useState(false)
    const [amountCards, setAmountCards] = useState(1549)
    const [ended, setEnded] = useState(false)

    
    useEffect(() => {
        getAllCharacters(amountCards)
        .then(onCharListLoaded)
        .catch(() => {
            setError(true)
            setLoading(false)
        })
    } ,[amountCards])

    function onCharListLoaded (charList) {
        if(charList.length < 9) {
            setEnded(true)
        }
        setItems([...items, ...charList])
        setLoading(false)
        setLoading2(false)

    }

    function showMoreCards () {
        setAmountCards(amountCards + 9)
        setLoading2(true)
    }

    const Content = (props) => {
        
        return props.items.map( item => {
            const noImage = item.thumbnail.includes("not_available") ? "contain" : "cover";
            return (
                <li key={item.id} 
                    className="char__item"
                    onClick={() => props.onSetCharId(item.id)}
                    >
                    <img src={item.thumbnail} alt={item.name} style={{objectFit: `${noImage}`}}/>
                    <div className="char__name">{item.name}</div>
                </li>
            )
        })

    } 

    const load = loading ? <Spinner/> : null;
    const load2 = loading2 ? <Spinner/> : null;
    const content = !loading && !error ? <Content items={items} onSetCharId={props.onSetCharId}/> : null;
    const errorMessage = error ? <Error/> : null;
    const listEnded = ended ? "none" : "block"
    
    return (
        <div className="char__list">
                {errorMessage}
                {load}
            <ul className="char__grid">
                {content}
            </ul>
                {load2}
            <button className="button button__main button__long" onClick={showMoreCards} disabled={load2} style={{display: `${listEnded}`}}>
                <div className="inner">load more</div>
            </button>
        </div>
    )
}

CharList.propTypes = {
    onSetCharId: PropTypes.func.isRequired
}

export default CharList;