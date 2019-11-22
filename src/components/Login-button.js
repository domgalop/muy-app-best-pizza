import React, { Fragment , Component } from 'react';
import '../css/Login-button.scss';

class LoginButton extends Component {
    render () {
        return (
            <Fragment>
                <button className='login_button'>Iniciar sesión</button>
            </Fragment>
        );
    };
};

export default LoginButton;