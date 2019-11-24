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
                    <button className='select__page__exit__button'><i class="fas fa-lock"></i>Salir</button>
                </div>
                <input type="text" placeholder='Pizzerías' className='search__store'/>
                <div className='select__page__info'>
                    <h2>Tiendas</h2>
                    <p>Escoge Tu pizzería favorita</p>
                </div>
                <StoresContainer className='select__page__stores__container'/>
                <Footer />
            </section>
        </Anime>
    );
};

export default SelectPagePizza;