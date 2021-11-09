import { useState, useEffect } from 'react';
import './charInfo.scss';
import { getCharacter } from '../../services/MarvelServices';
import Spinner from '../spinner/Spinner';
import Error from '../error/Error';
import Skeleton from '../skeleton/Skeleton';

const CharInfo = (props) => {

    const [char, setChar] = useState(null);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        if(!props.charId) return;
        updateChar()
    }, [props.charId])

    function updateChar () {
        setLoading(true)
        getCharacter(props.charId)
        .then(setChar)
        .then(() => setLoading(false))
        .catch(() => setError(true))
    }

    const skeleton = char || loading || error ? null : <Skeleton/>
    const load = loading ? <Spinner/> : null;
    const content = !loading && !error && char ? <View char={char}/> : null;
    const errorMessage = error ? <Error/> : null;

    return (
        <div className="char__info">
            {skeleton}
            {load}
            {errorMessage}
            {content}
        </div>
    )
}

function View ({char}) {
    const {name, descr, thumbnail, homepage, wiki, comics} = char;
    const noImage = char.thumbnail.includes("not_available") ? "contain" : "cover";
    const comics1 = comics.length > 0 ? comics.map((item, i) => {
        if (i < 10) {
            return (
                <li key={i} className="char__comics-item">
                    {item.name}
                </li>
            )
        }
        return null
    }) : <h2>"No comics"</h2>
    return (
        <>
            <div className="char__basics">
                <img src={thumbnail} alt={name} style={{objectFit: `${noImage}`}}/>
                <div>
                    <div className="char__info-name">{name}</div>
                    <div className="char__btns">
                        <a href={homepage} className="button button__main">
                            <div className="inner">homepage</div>
                        </a>
                        <a href={wiki} className="button button__secondary">
                            <div className="inner">Wiki</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="char__descr">
                {descr}
            </div>
            <div className="char__comics">Comics:</div>
            <ul className="char__comics-list">
                {comics1}
            </ul>
        </>
    )
}

export default CharInfo;