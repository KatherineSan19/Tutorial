import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Titulo from './componentes/Titulo';
import { hola } from './componentes/Titulo';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <Titulo></Titulo>

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
