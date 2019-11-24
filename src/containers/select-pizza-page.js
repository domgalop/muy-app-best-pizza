import Footer from './Footer';
import React from 'react';
import StoresContainer from './Stores-container';
import '../css/Select-pizza-page.scss';

const SelectPagePizza = () => {
    return (
        <section className='select__page'>
            <button>Salir</button>
            <h2>Pizzería</h2>
            <h3>Tiendas</h3>
            <p>Escoge Tu pizzería favorita</p>
            <StoresContainer />
            <Footer />
        </section>
    );
};

export default SelectPagePizza;