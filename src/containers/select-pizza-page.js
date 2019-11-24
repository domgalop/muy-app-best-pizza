import React from 'react';
import { connect } from 'react-redux';
import { checkUser } from '../store/actions/actions';
import '../css/Select-pizza-page.scss';

const LoginButton = props => {
    return (
        <div className='select__page'>
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