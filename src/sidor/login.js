import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Swal from 'sweetalert2';
import {API_ROOT} from '../App.js';
import {Header} from '../labbComponents/header.js';
import {updateToken} from '../auth.js';


export class Login extends Component {
  state = {
    formMail: '',
    formPassword: '',
    serverMail:'',
    serverPassword:'',
    logged: false
  };

  //
  _usrLogin = (e)=>{
    e.preventDefault();
    console.log(this.state.formMail,this.state.formPassword);
    axios.post(`${API_ROOT}/auth`,{email: this.state.formMail, password: this.state.formPassword})
    .then(response=>{
      console.log(response);
      updateToken(response.data.token);
      /*fn upsdate här updatera vi token i store */
      /*till magasin*/
      //if 200
      if (true) {
        Swal.fire({
          position: 'top-end',
          type: 'success',
          title: 'Email and Password Correct !!',
          showConfirmButton: false,
          timer: 1500
        })
      }
      console.log(typeof(response.config.data));
      const strServer = JSON.parse(response.config.data);
      console.log(strServer.email);
      this.setState({serverMail: strServer.email});
      this.setState({serverPassword: strServer.password});
      this.setState({logged: true});
    })
    .catch(error=>{
      console.log(error);
      Swal.fire({
        type: 'error',
        title: 'Anmäl dig innan LogIn',
        text: `Login Error`+ error,
      })
    })
  }
  render(){
    return(
      <React.Fragment>
        <Header/>
        {this.state.logged === true && this.state.serverMail !==''
          ?<Redirect to={{
            pathname: '/todoLista',
            state: {
              isLogged: true,
              userLogged: this.state.serverMail
            }
          }}/>
          :<form onSubmit={this._usrLogin}>
            <div className="field">
              <p className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  type="email"
                  placeholder="E-post"
                  onChange={(e)=>(this.setState({formMail: e.target.value}))}/>
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
                  onChange={e=>{this.setState({formPassword: e.target.value})}}/>
                <span className="icon is-small is-left">
                  <FontAwesomeIcon icon="key" />
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control">
                <button className="button is-success">
                  Logga In
                </button>
              </p>
            </div>
          </form>
        }
      </React.Fragment>
    )
  }
}

// usrMail= {this.state.serverMail}
// password = {this.state.serverPassword}
// logged = {this.state.logged}
