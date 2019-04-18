import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import {Switch,Route} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee,faEnvelope,faLock} from '@fortawesome/free-solid-svg-icons';
//
import {Header} from './labbComponents/header.js';
import {Main} from './sidor/main.js';
import {Register} from './sidor/register.js';
import {Login} from './sidor/login.js';
import {TodoLista} from './sidor/todoLista.js';
export const API_ROOT= 'http://ec2-13-53-32-89.eu-north-1.compute.amazonaws.com:3000';


class App extends Component {
  render() {
    return (
      <div className="App">
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
library.add(fab, faCheckSquare, faCoffee,faEnvelope,faLock);
export default App;
