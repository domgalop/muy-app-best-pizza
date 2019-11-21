import logo from '../assets/logo.png';
import React from 'react';
import '../css/CorporateTrade.scss';

const CorporateTrade = () => {
  return (
    <article>
        <img src={logo} alt="Best pizza logo"/>
        <h2>Bienvenido</h2>
        <p>A las mejores pizzas del país</p>
    </article>
  );
};

export default CorporateTrade;