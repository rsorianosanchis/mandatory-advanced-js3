import React,{Component} from 'react';
import {Header} from '../labbComponents/header.js';
import {Register} from './register.js';
import {Login} from './login.js';
import {TodoLista} from './todoLista.js';

export class Main extends Component {
  render(){
    return(
      <>
      <Header usrMail='pepito'/>
      <Login/>
      </>
    )
  }
}
