import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import {Switch,Route} from 'react-router-dom';
//
import {Header} from './labbComponents/header.js';
import {Main} from './sidor/main.js';
import {Register} from './sidor/register.js';
import {Login} from './sidor/Login.js';
import {TodoLista} from './sidor/todoLista.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path='/' component={Main}/>
          <Route exact path='/register' component={Register}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/todoLista' component={TodoLista}/>
        </Switch>
      </div>
    );
  }
}

export default App;
