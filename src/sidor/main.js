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

  // communication with backend functions
  /**************************************************************/

  
  /**************************************************************/
  _getLista = ({token$})=>{/*token här kommer från magasinet*/
    console.log({token$});
    axios.get(`${API_ROOT}/todos`,{headers:{Authorization: `Bearer `+{token$}}})
    .then(response=>{console.log(response);})
    .catch(error=>{
      console.log(error);
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'skriv här error msg',
      })
    })
  }
  /**************************************************************/
  _postNyTodo = (myTodo)=>{
    axios.post(`${API_ROOT}/todos`,{content: myTodo})
  }
  /**************************************************************/
  _de
  //

  render(){
    return(
      <>
      <Header usrMail='pepito'/>
      <Register/>
      </>
    )
  }
}
