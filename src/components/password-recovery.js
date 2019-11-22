import React, { Fragment } from 'react';
import '../css/Password-recovery.scss';

const getAnchorProps = () => {
  return {
    className:'recovery',
    href: '#'
  };
};

const PasswordRecovery = () => {
  return (
    <Fragment>
        <a {...getAnchorProps()}>¿Olvidaste tu contraseña?</a>
    </Fragment>
  );
};

export default PasswordRecovery;