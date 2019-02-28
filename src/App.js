import React, { Component } from 'react';

import Home from './paginas/Home.js'
import Lista from './paginas/Lista.js'
import Practica from './paginas/Practica.js'

import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <Home></Home>
        <Lista></Lista>
        <Practica ></Practica>
      </div>
    );
  }
}

export default App;
