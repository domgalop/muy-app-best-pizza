import Aside from '../containers/Aside';
import LoginContainer from  '../containers/Login-container';
import React, {Fragment} from 'react';
import '../css/App.scss';

const App = () => {
  return (
    <Fragment>
      <h1 className='header_info'>Best pizza website</h1>
      <Aside />
      <section>
        <LoginContainer />
      </section>
    </Fragment>
  );
};

export default App;