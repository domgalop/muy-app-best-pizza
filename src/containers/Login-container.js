import CorporateTrade from  './Corporate-trade';
import LoginButton from  '../components/Login-button';
import LoginInput from  '../components/Input-login';
import React, {Fragment} from 'react';
import RecoveryLink from  '../components/password-recovery';

const LoginContainer = () => {
  return (
    <Fragment>
        <CorporateTrade />
        <LoginInput />
        <RecoveryLink />
        <LoginButton />
    </Fragment>
  );
};

export default LoginContainer;