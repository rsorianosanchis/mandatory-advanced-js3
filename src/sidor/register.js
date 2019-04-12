import React,{Component} from 'react';
import jwt from 'jsonwebtoken';

export class Register extends Component {
  state = {
    usrMail: '',
    password: ''};

  _handleLoginSumbit=(e)=>{
    e.preventDefault();
    console.log('tetsting ');
    console.log(this.state.usrMail,this.state.password);
  }
  

  _createToken = ()=>{
    const token = jwt.sign({a:10},'secret');
    console.log(token);
  }

  render(){
    return(
      <React.Fragment>
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
