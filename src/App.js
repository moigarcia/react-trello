import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Board from './components/Board';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Board/>
      </div>
    );
  }
}

export default App;
