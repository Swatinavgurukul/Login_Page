import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

import Navbar from './components/navbar';
import Login from './components/login';
import Register from './components/register';
import Profile from './components/profile';
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
          </div>
        </div>
      </Router>
    )
  }
}


export default App;
