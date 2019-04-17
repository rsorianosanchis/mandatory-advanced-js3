import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import thingstodo from './thingstodo.jpg';

export class Header extends Component {


  _logOutLogic =(e)=>{
    console.log('logOut pressed');
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (nextProps.usrMail !== this.props.usrMail){
  //     console.log('should in header');
  //     console.log(nextProps.usrMail);
  //     console.log(this.props.usrMail);
  //     console.log(this.props.logged);
  //     return true
  //   }
  //   return false
  // }

  render(){
    return(
      <React.Fragment>
        <h1>HEADER</h1>
        <nav style={{backgroundColor: '#aeb4c1'}} className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
              <img src={thingstodo} alt='decorative' height="50" />
          </div>
          <div id="navbarBasicExample" >
            <div className="navbar-start">
              {this.props.logged ?
                <p className="navbar-item">
                  Current user is: {this.props.usrMail}
                </p>
                :null}
                <hr className="navbar-divider"/>
            </div>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                {this.props.logged ? null
                :<Link to={'/register'} className="button is-primary">
                  <strong>Register</strong>
                </Link>}
                {this.props.logged ?<Link to={'/'} onClick={this._logOutLogic} className="button is-light">
                  Log Out
                </Link>:
                <Link to={'/login'} className="button is-light">
                  Log in
                </Link>
                }
              </div>
            </div>
          </div>
        </nav>
      </React.Fragment>
    )
  }
}
