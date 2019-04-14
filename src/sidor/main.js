import React,{Component} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import {token$,updateToken} from '../auth';
import {Header} from '../labbComponents/header.js';
import {Register} from './register.js';
import {Login} from './login.js';
import {TodoLista} from './todoLista.js';

const API_ROOT= 'http://ec2-13-53-32-89.eu-north-1.compute.amazonaws.com:3000';
export class Main extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <>
    
      <Header/>


      </>
    )
  }
}
