import CardInfo from './Card-info';
import React from 'react';
import storeInfo from '../utils/storesInfo/stores-info';
import '../css/Stores-container.sass';

const StoreContainer = props => {
  return (
    <div className={props.className}>
        {renderStoresContainer(storeInfo)}
    </div>
  );
};

const renderStoresContainer = store => {
  return store.map( e => {
    return <CardInfo {...getCardInfoProps(e)} />;
  });
};


const getCardInfoProps = cardInfoProps => {
  return {
    image: cardInfoProps.logo,
    key: Math.floor(Math.random()*(999-100+1)+100),
    text: cardInfoProps.address,
    title: cardInfoProps.storeName
  };
};

export default StoreContainer;