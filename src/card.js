import React, { useState } from 'react';
import './card.css'

const Card = (props) => {
    const [activeID, setActiveID] = useState('')

    return (<div className='card-container'>
        {props.movies.map(item => {
            return (
                <div className={item.imdbID === activeID ? 'card-style active' : 'card-style'} key={item.imdbID} onClick={() => setActiveID(item.imdbID)}>
                    <img alt={item.Title} className='card-img' src={item.Poster} />
                    <p className='card-title'>{item.Title}</p>
                </div>
            )
        })}

    </div>);
}

export default Card;