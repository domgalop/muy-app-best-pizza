import React, { Component } from 'react';
import iconPassword from '../assets/ic_contraseña.png';
import iconUser from '../assets/ic_usuario.png';
import { connect } from 'react-redux';
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
                <input type="text" {...this.getUserProps()}/>
                <input type="text" {...this.getPasswordClassName()}/>
            </div>
        );
    };

    getUserProps() {
        return {
            className: this.state.inputContainer,
            placeholder: 'Usuario'
        };
    };

    getPasswordClassName() {
        return {
            className: this.state.inputContainer,
            placeholder: 'Contraseña'
        };
    };
};

const mapDispatchToProps = {};

export default connect(
  null,
  mapDispatchToProps
)(InputLogin);