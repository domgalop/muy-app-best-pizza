import Anime from 'react-anime';
import Footer from './Footer';
import React from 'react';
import StoresContainer from './Stores-container';
import { bounceUp } from '../utils/animations/animate'
import '../css/Select-pizza-page.scss';

const SelectPagePizza = () => {
    return (
        <Anime {...bounceUp}>
            <section className='select__page'>
                <div className='select__page__exit'>
                    <button >Salir</button>
                </div>
                <h2 className='select__page__title'>Pizzerías</h2>
                <div className='select__page__info'>
                    <h3>Tiendas</h3>
                    <p>Escoge Tu pizzería favorita</p>
                </div>
                <StoresContainer className='select__page__stores__container'/>
                <Footer />
            </section>
        </Anime>
    );
};

export default SelectPagePizza;