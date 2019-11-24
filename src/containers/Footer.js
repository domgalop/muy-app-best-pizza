import Anime from 'react-anime';
import BestPizza from '../assets/Best-Pizza.png';
import React from 'react';
import { iconMove } from '../utils/animations/animate';
import '../css/Footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <span>
        <Anime {...iconMove}>
          <a href='https://www.facebook.com/MUYRestauranteCol/'><i class="fab fa-facebook-square"></i></a>
          <a href='https://www.instagram.com/muyrestaurantecol/'><i class="fab fa-instagram"></i></a>
        </Anime>
      </span>
      <img src={BestPizza} alt=''className='footer__logo'/>
    </footer>
  );
};

export default Footer;