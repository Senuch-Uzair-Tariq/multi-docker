import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import OtherPage from './OtherPage.js';
import Fib from './Fib.js';

class App extends Component {
  render(){
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Link to="/">Home</Link>
            <Link to="/otherpage">Other Page</Link>
          </header>
          <div>
            <Route exact path="/" component={Fib}/>
            <Route exact path="/otherpage" component={OtherPage}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
