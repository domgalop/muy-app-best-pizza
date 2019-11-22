import CorporateTrade from  './Corporate-trade';
import LoginButton from  '../components/Login-button';
import LoginInput from  '../components/Input-login';
import React from 'react';
import RecoveryLink from  '../components/Password-recovery';
import '../css/Login-container.scss'

const LoginContainer = () => {
  return (
    <section className='login_container'>
        <CorporateTrade />
        <LoginInput />
        <RecoveryLink />
        <LoginButton />
    </section>
  );
};

export default LoginContainer;