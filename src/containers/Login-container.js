import CorporateTrade from  './Corporate-trade';
import LoginButton from  './Login-button';
import LoginInput from  '../components/Input-login';
import PageNotication from './Page-notication';
import PasswordRecovery from  './Password-recovery';
import React from 'react';
import '../css/Login-container.scss';

const LoginContainer = props => {
  return (
    <section className='login__container'>
        <CorporateTrade />
        <LoginInput />
        <PageNotication />
        <PasswordRecovery />
        <LoginButton routerPush={props.history} changeShowIconLogo={props.changeShowIconLogo} />
    </section>
  );
};

export default LoginContainer;