import React,{Component} from 'react';
import axios from 'axios';
import {Header} from '../labbComponents/header.js';
import {Register} from './register.js';
import {Login} from './login.js';
import {TodoLista} from './todoLista.js';

const API_ROOT= 'http://ec2-13-53-32-89.eu-north-1.compute.amazonaws.com:3000';
export class Main extends Component {
  constructor(props){
    super(props)


  }

  // communication to backend
  _usrRegister = (email,password)=>{
    axios.post({ + '/resgister',{email, password})

  }
  render(){
    return(
      <>
      <Header usrMail='pepito'/>
      <Register/>
      </>
    )
  }
}
