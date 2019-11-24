import Aside from '../containers/Aside';
import LoginContainer from  '../containers/Login-container';
import PrivateRoute from '../containers/Private-route'
import React, { Component, Fragment } from 'react';
import SelectPizzaPage from './Select-pizza-page'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchData } from '../store/actions/actions';
import '../css/App.scss';

class App extends Component {

  state = {
    showIconLogo: false
  }

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
            <Aside showIconLogo={this.state.showIconLogo} />
            <Redirect from='/' to='/login' />
            <Switch>
              <Route exact path='/login' render={this.renderSelectPage()} />
              <PrivateRoute>
                <Route exact path='/select' component={SelectPizzaPage} />
              </PrivateRoute>
            </Switch>
          </main>
        </Fragment>
      </BrowserRouter>
    );
  };

  changeShowIconLogo() {
    this.setState({
      showIconLogo: true
    });
  };

  renderSelectPage() {
    return (props) => <LoginContainer {...props} changeShowIconLogo={this.changeShowIconLogo.bind(this)} />
  };
};

const mapDispatchToProps = {
  fetchData
};

export default connect(
  null,
  mapDispatchToProps
)(App);