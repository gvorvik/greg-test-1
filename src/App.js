import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Login from './components/Login/Login';
import Home from './components/Home/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Redirect exact from="/" to="/home"/>
          <Route 
            path="/login"
            component={Login}
          />
          <Route
            path="/home"
            component={Home}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
