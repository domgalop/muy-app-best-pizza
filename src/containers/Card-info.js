import React from 'react';
import '../css/Stores-container.sass';

const CardInfo = props => {
    return (
        <div className=''>
            <img src={props.image} alt={props.title}/>
            <h3 className=''>{props.title}</h3>
            <p className=''>{props.text}</p>
        </div>
    );
};

export default CardInfo;