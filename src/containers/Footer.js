import React from 'react';
import BestPizza from '../assets/Best-Pizza.png';
import '../css/Footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <span>
        <i class="fab fa-facebook-square"></i>
        <i class="fab fa-instagram"></i>
      </span>
      <img src={BestPizza} alt=''className='footer__logo'/>
    </footer>
  );
};

export default Footer;