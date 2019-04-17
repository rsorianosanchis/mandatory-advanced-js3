import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
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
      //return <Redirect to='/todoLista'/>
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

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.state.logged !== nextState.logged){
  //     return true
  //   }
  //   console.log(`logged prev is ${this.state.logged}`);
  //   console.log(`logged prev is ${nextState.logged}`);
  //   return false
  // }
  //
  render(){
    return(
      <React.Fragment>
        <Header
          usrMail= {this.state.serverMail}
          password = {this.state.serverPassword}
          logged = {this.state.logged}
        />
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
                  placeholder="Email"
                  onChange={(e)=>(this.setState({formMail: e.target.value}))}/>
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
                  onChange={e=>{this.setState({formPassword: e.target.value})}}/>
                <span className="icon is-small is-left">
                  <i className="fas fa-lock"></i>
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control">
                <button className="button is-success">
                  Enter
                </button>
              </p>
            </div>
          </form>
        }
      </React.Fragment>
    )
  }
}
