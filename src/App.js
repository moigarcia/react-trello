import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Board from './components/Board';
import Login from './components/Login';
import Register from './components/Register';
import './App.css';
import { Switch, Route} from 'react-router-dom'
import AddCard from './components/AddCard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Switch>
         <Route exact path="/" component={Board}/>
         <Route exact path="/columns/:columnId/new_card" component={AddCard}/>
         <Route exact path="/register" component={Register}/>
         <Route exact path="/login" component={Login}/>
        </Switch>
      </div>
    );
  }
}

export default App;
