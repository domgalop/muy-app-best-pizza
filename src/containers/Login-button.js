import React, { Component } from 'react';
import { connect } from 'react-redux';
import { checkUser } from '../store/actions/actions';
import '../css/Login-button.scss';

class InputLogin extends Component {

    render() {
        return (
            <div className='login_button_container'>
                <button className='login_button' onClick={this.navigateToSelectPage.bind(this)}>Iniciar sesión</button>
            </div>
        );
    };

    navigateToSelectPage() {
        this.props.checkUser();
        this.props.routerPush.push('/select/');
        this.props.changeShowIconLogo();
    }
};

const mapDispatchToProps = {
    checkUser
};

export default connect(
    null,
    mapDispatchToProps
)(InputLogin);