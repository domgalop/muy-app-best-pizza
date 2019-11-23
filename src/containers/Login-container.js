import CorporateTrade from  './Corporate-trade';
import LoginButton from  './Login-button';
import LoginInput from  '../components/Input-login';
import React from 'react';
import PageNotication from './Page-notication';
import PasswordRecovery from  '../components/Password-recovery';
import '../css/Login-container.scss'

const LoginContainer = () => {
  return (
    <section className='login_container'>
        <CorporateTrade />
        <LoginInput />
        <PageNotication />
        <PasswordRecovery />
        <LoginButton />
    </section>
  );
};

export default LoginContainer;