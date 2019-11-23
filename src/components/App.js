import Aside from '../containers/Aside';
import LoginContainer from  '../containers/Login-container';
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../store/actions/actions';
import '../css/App.scss';

class App extends Component {

  componentDidMount (){
    this.props.fetchData();
  };

  render () {
    return (
      <Fragment>
        <header className='header'>
          <h1>Best pizza website</h1>
        </header>
        <main className='wrapper'>
          <Aside />
          <LoginContainer />
        </main>
      </Fragment>
    );
  };
};

const mapDispatchToProps = {
  fetchData
};

export default connect(
  null,
  mapDispatchToProps
)(App);