import React from 'react';
import pizzaImage from '../assets/pizza.png';
import '../css/Aside.scss';

const Aside = () => {
  return (
    <aside {...getAsideProps()}>
        <img {...getImageProps()}/>
    </aside>
  );
};

const getAsideProps = () => {
  return {
    'aria-hidden': true,
    className:'aside'
  };
};

const getImageProps = () => {
  return {
    alt: '',
    className:'aside__image',
    src: pizzaImage
  };
};

export default Aside;