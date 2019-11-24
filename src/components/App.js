import Aside from '../containers/Aside';
import LoginContainer from  '../containers/Login-container';
import PrivateRoute from '../containers/Private-route'
import React, { Component, Fragment } from 'react';
import SelectPizzaPage from '../containers/select-pizza-page'
import { connect } from 'react-redux';
import { fetchData } from '../store/actions/actions';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import '../css/App.scss';

class App extends Component {

  componentDidMount (){
    this.props.fetchData();
  };

  render () {
    return (
      <BrowserRouter basename='/'>
        <Fragment>
        <header className='header'>
            <h1>Best pizza website</h1>
          </header>
          <main className='wrapper'>
            <Aside />
            <Switch>
              <Route exact path='/login' component={LoginContainer} />
              <PrivateRoute>
                <Route path='/select' component={SelectPizzaPage} />
              </PrivateRoute>
            </Switch>
          </main>
        </Fragment>
      </BrowserRouter>
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