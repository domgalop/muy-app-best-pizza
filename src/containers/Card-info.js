import React from 'react';
import '../css/Card-info.scss';

const CardInfo = props => {
    return (
        <div className='card__info'>
            <img src={props.image} alt={props.title} className='card__info__image'/>
            <h3>{props.title}</h3>
            <p className=''>{props.text}</p>
        </div>
    );
};

export default CardInfo;