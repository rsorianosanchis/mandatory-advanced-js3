import React,{Component} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
//import jwt from 'jsonwebtoken';
import {Header} from '../labbComponents/header.js';
import {API_ROOT} from '../App.js';


export class Register extends Component {
  state = {
    usrMail: '',
    password: '',
    registered: false
  };

  _handleLoginSumbit=(e)=>{
    e.preventDefault();
    this.setState({registered: false})
    console.log(this.state.usrMail,this.state.password);
    axios.post(`${API_ROOT}/register`,{email: this.state.usrMail,password: this.state.password})
    .then(response=>{
      console.log(response);
      //status code 201 if ok
      if (response.status) {
        Swal.fire({
          position: 'top-end',
          type: 'success',
          title: 'Registration done !',
          showConfirmButton: false,
          timer: 1500
        })
      }
      this.setState({registered: true})
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
    return(
      <React.Fragment>
        <Header
          usrMail= {this.state.usrMail}/>
        <form onSubmit={this._handleLoginSumbit}>
          <div className="field">
            <p className="control has-icons-left has-icons-right">
              <input
                className="input"
                type="email"
                placeholder="Email"
                onChange={(e)=>(this.setState({usrMail: e.target.value}))}/>
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control has-icons-left">
              <input
                className="input"
                type="password"
                placeholder="Password"
                onChange={e=>{this.setState({password: e.target.value})}}/>
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control">
              <button className="button is-success">
                Submit
              </button>
            </p>
          </div>
        </form>
      </React.Fragment>
    )
  }
}
