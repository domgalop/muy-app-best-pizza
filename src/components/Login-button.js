import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { checkUser } from '../store/actions/actions';
import '../css/Login-button.scss';

const getButtonProps = props => {
    return {
        className: 'login_button',
        onClick: props.checkUser
    }
};

const LoginButton = props => {
    return (
        <div className='login_button_container'>
            <button {...getButtonProps(props)}>Iniciar sesión</button>
        </div>
    );
};

const mapDispatchToProps = {
    checkUser
};

export default connect(
    null,
    mapDispatchToProps
)(LoginButton);