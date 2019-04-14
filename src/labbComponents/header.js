import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import thingstodo from './thingstodo.jpg';

export class Header extends Component {

  render(){
    const {usrMail,isRegistered}= this.props;

    return(
      <>
        <h1>HEADER</h1>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
              <img src={thingstodo} alt='decorative' height="50" />
          </div>
          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
                  <p className="navbar-item">
                    Current user is: {usrMail}
                  </p>
                  <hr className="navbar-divider"/>
                </div>
              </div>
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  {isRegistered ? null
                  :<Link to={'/register'} className="button is-primary">
                    <strong>Sign up</strong>
                  </Link>}
                  <Link to={'/login'} className="button is-light">
                    Log in
                  </Link>
                </div>
              </div>
            </div>
        </nav>
      </>
    )
  }
}
