import pizzaImage from '../assets/pizza.png';
import React from 'react';
import '../css/Aside.scss';

const Aside = () => {
  return (
    <aside aria-hidden="true">
        <img src={pizzaImage} alt=""/>
    </aside>
  );
};

export default Aside;