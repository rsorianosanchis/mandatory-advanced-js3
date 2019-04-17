import React,{Component} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import {API_ROOT} from '../App.js';
import {token$,updateToken} from '../auth';
import {Header} from '../labbComponents/header.js';

export class TodoLista extends Component {

  componentDidMount() {
    axios.get(`${API_ROOT}/todos`,{headers:{Authorization: `Bearer `+token$._value}})
    .then(response=>{
      console.log(response);
      //render response lista
    })
    .catch(error=>{
      console.log(error);
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'skriv här error msg',
      })
    })


  }
  render(){
    console.log(token$);
    console.log(token$._value);
    return(
      <React.Fragment>
        <Header
          logged={this.props.location.state.isLogged}
          usrMail={this.props.location.state.userLogged}/>
        <h1>TODOLISTA</h1>
      </React.Fragment>
    )
  }
}
