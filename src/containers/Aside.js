import React from 'react';
import logoBestPizza from '../assets/logo.png';
import pizzaImage from '../assets/pizza.png';
import '../css/Aside.scss';
import { withRouter } from 'react-router-dom';

const Aside = props => {
  return (
    <aside {...getAsideProps()}>
        {renderIconLog(props)}
        <img {...getAsideImageProps()}/>
    </aside>
  );
};

const renderIconLog = props => {
  let component = null;

  if (props.showIconLogo && props.location.pathname === '/select/') {
    component = (
      <img {...getLogoProps()}/>
    );
  }

  return component;
};

const getLogoProps = () => {
  return {
    alt: '',
    className:'aside__image__logo',
    src: logoBestPizza
  };
};

const getAsideProps = () => {
  return {
    'aria-hidden': true,
    className:'aside'
  };
};

const getAsideImageProps = () => {
  return {
    alt: '',
    className:'aside__image',
    src: pizzaImage
  };
};

export default withRouter(Aside);