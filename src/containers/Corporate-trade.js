import logo from '../assets/logo.png';
import React from 'react';
import '../css/Corporate-trade.scss';

const CorporateTrade = () => {
  return (
    <div className='corporate_trade'>
        <img {...getImageProps()}/>
        <h2>Bienvenido</h2>
        <p>A las mejores pizzas del país</p>
    </div>
  );
};

const getImageProps = () => {
  return {
    alt: 'Best pizza logo',
    src: logo
  };
};

export default CorporateTrade;