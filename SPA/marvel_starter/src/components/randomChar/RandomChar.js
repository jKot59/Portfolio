import React, { useState, useEffect } from 'react';
import './randomChar.scss';
import mjolnir from '../../resources/img/mjolnir.png';
import Spinner from '../spinner/Spinner';
import Error from '../error/Error';

import { getCharacter } from '../../services/MarvelServices';


const RandomChar = () => {
    const [name, setName] = useState(null);
    const [descr, setDescr] = useState(null);
    const [thumbnail, setThumbnail] = useState(null);
    const [homepage, setHomepage] = useState(null);
    const [wiki, setWiki] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(updateChar, [])

    function updateChar () {
        setLoading(true)
        setError(false)
        const id = Math.round(Math.random() * (1011400 - 1011000) + 1011000)
        getCharacter(id).then( res => {
            setName(res.name)
            setDescr(res.descr === undefined ? "Information is absent" : res.descr.slice(0, 170) + "...")
            setThumbnail(res.thumbnail)
            setHomepage(res.url)
            setWiki(res.wiki)
            setLoading(false)
        })
        .catch(() => {
            setLoading(false)
            setError(true)
        })

    }
    
    return (
        <div className="randomchar">
            {error ? <Error/> : null}
            {loading && !error ? <Spinner/> : null}
            {!loading && !error ? <View name={name} descr={descr} thumbnail={thumbnail} homepage={homepage} wiki={wiki}/> : null}
            <div className="randomchar__static">
                <p className="randomchar__title">
                    Random character for today!<br/>
                    Do you want to get to know him better?
                </p>
                <p className="randomchar__title">
                    Or choose another one
                </p>
                <button className="button button__main" onClick={updateChar}>
                    <div className="inner">try it</div>
                </button>
                <img src={mjolnir} alt="mjolnir" className="randomchar__decoration"/>
            </div>
        </div>
    )

}

const View = (props) => {
    const noImage = props.thumbnail.includes("not_available") ? "contain" : "cover";
    return (
        <div className="randomchar__block">
            <img src={props.thumbnail} alt="Random character" className="randomchar__img" style={{objectFit: `${noImage}`}}/>
            <div className="randomchar__info">
                <p className="randomchar__name">{props.name}</p>
                <p className="randomchar__descr">
                {props.descr}
                </p>
                <div className="randomchar__btns">
                    <a href={props.homepage} className="button button__main">
                        <div className="inner">Homepage</div>
                    </a>
                    <a href={props.wiki} className="button button__secondary">
                        <div className="inner">Wiki</div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default RandomChar;