import Aside from '../containers/Aside';
import LoginContainer from  '../containers/Login-container';
import React, { Fragment } from 'react';
import '../css/App.scss';

const App = () => {
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

export default App;