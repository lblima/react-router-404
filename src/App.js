import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Link, Route } from 'react-router-dom';

const Home = () => (
  <h1>
    Hello guys! Let's deal with 404?
  </h1>
);

const About = () => (
  <h1>
    About this example....
  </h1>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Router Example</h1>
        </header>
        <BrowserRouter>
          <div>
            <p className="App-intro">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
              </ul>
            </p>

            <Route path="/" exact component={Home}/>
            <Route path="/about" component={About}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;