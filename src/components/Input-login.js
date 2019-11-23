import React, { Component } from 'react';
import iconPassword from '../assets/ic_contraseña.png';
import iconUser from '../assets/ic_usuario.png';
import { connect } from 'react-redux';
import { getInputUser, getInputPassword } from '../store/actions/actions';
import '../css/Input-login.scss';

class InputLogin extends Component {

    state = {
        inputContainer: 'input__field__container__text'
    };

    render () {
        return (
            <div className='input__field__container'>
                <img src={iconUser} className='input__field__container__icon--user icon' aria-hidden='true' alt=''/>
                <img src={iconPassword} className='input__field__container__icon--password icon' aria-hidden='true' alt=''/>
                <fieldset>
                    <legend>Ingrese sus datos personales para Iniciar sesión</legend>
                    <label for="userName">Ingresa tu nombre</label>
                    <input type="text" {...this.getUserProps()} required/>
                    <label for="password">Ingresa tu Contraseña</label>
                    <input type="password" {...this.getPasswordClassName()} required/>
                </fieldset>
            </div>
        );
    };

    getUserProps() {
        return {
            'aria-required':"true",
            className: this.state.inputContainer,
            id: 'name',
            name: 'userName',
            onChange: event => this.props.getInputUser(event),
            placeholder: 'Usuario'
        };
    };

    getPasswordClassName() {
        return {
            'aria-required':"true",
            className: this.state.inputContainer,
            id: 'password',
            name: 'password',
            onChange: event => this.props.getInputPassword(event),
            placeholder: 'Contraseña'
        };
    };
};

const mapDispatchToProps = {
    getInputUser,
    getInputPassword
};

export default connect(
  null,
  mapDispatchToProps
)(InputLogin);