import React, { Component } from 'react';
import '../css/Input-login.scss';

class InputLogin extends Component {
    render () {
        return (
            <div className='input_button'>
                <input type="text" />
                <input type="text"/>
            </div>
        );
    };
};

export default InputLogin;