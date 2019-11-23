import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import '../css/Page-notication.scss';

const renderNofication = data => {
    let component = null;

    if (!data && data !== null) {
        component = (
            <Fragment>
                <p className='page__notification__text'>Ups... Usuario o contraseña Errada !!</p>
            </Fragment>
        )
    }

    return component;
};

const PageNotication = props => {
    return (
        <div className='page__notification'>
            {renderNofication(props.data)}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        data: state.validUser
    };
};

export default connect(
    mapStateToProps,
    null
)(PageNotication);