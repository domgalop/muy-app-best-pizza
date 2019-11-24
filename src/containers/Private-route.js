import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const PrivateRoute = props => {;
    return (
        <Fragment>
            { props.validUser ? props.children : <Redirect to='/login' /> }
        </Fragment>
    );
};

const mapStateToProps = state => {
    return {
        validUser: state.validUser
    };
};

export default connect(
    mapStateToProps,
    null
)(PrivateRoute);
