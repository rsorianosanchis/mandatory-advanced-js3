import React,{Component} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Redirect} from 'react-router-dom';
import {Header} from '../labbComponents/header.js';
import {API_ROOT} from '../App.js';
//
export class Register extends Component {
  state = {
    usrMail: '',
    password: '',
    registered: false
  };
  //
  _handleLoginSumbit=(e)=>{
    e.preventDefault();
    console.log(this.state.usrMail,this.state.password);
    axios.post(`${API_ROOT}/register`,{email: this.state.usrMail,password: this.state.password})
    .then(response=>{
      console.log(response);
      if (response.status) {
        Swal.fire({
          position: 'top-end',
          type: 'success',
          title: `Konto till ${this.state.usrMail} skapat !`,
          showConfirmButton: false,
          timer: 2000
        })
      }
      this.setState({registered: true})
    })
    .catch(error=>{
      console.log(error);
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Detta konto existerar inte',
      })
    })
  }
  render(){
    return(
      this.state.registered
      ?<Redirect to='/'/>
      :<React.Fragment>
        <Header/>
        <form onSubmit={this._handleLoginSumbit}>
          <div className="field">
            <p className="control has-icons-left has-icons-right">
              <input
                className="input"
                type="email"
                placeholder="E-post"
                onChange={(e)=>(this.setState({usrMail: e.target.value}))}/>
              <span className="icon is-small is-left">
                <FontAwesomeIcon icon='envelope'/>
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control has-icons-left">
              <input
                className="input"
                type="password"
                placeholder="Lösenord"
                onChange={e=>{this.setState({password: e.target.value})}}/>
              <span className="icon is-small is-left">
                <FontAwesomeIcon icon="key" />
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control">
              <button className="button is-success">
                Bekräfta
              </button>
            </p>
          </div>
        </form>
      </React.Fragment>
    )
  }
}
