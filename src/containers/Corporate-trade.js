import logo from '../assets/login-Best-Pizza.png';
import React from 'react';
import '../css/Corporate-trade.scss';

const CorporateTrade = () => {
  return (
    <div className='corporate__trade'>
        <img {...getImageProps()}/>
        <h2 className='corporate__trade__welcome'>Bienvenido</h2>
        <p className='corporate__trade__phrase'>A las mejores pizzas del país</p>
    </div>
  );
};

const getImageProps = () => {
  return {
    alt: 'Best pizza logo',
    className: 'corporate__trade__logo',
    src: logo
  };
};

export default CorporateTrade;