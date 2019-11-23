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
        <Fragment>
            <button {...getButtonProps(props)}>Iniciar sesión</button>
        </Fragment>
    );
};

const mapDispatchToProps = {
    checkUser
};

export default connect(
    null,
    mapDispatchToProps
)(LoginButton);