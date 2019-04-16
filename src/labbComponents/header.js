import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import thingstodo from './thingstodo.jpg';

export class Header extends Component {
  state = {}

  render(){
    const {usrMail,isLogged}= this.props;

    return(
      <>
        <h1>HEADER</h1>
        <nav style={{backgroundColor: '#aeb4c1'}} className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
              <img src={thingstodo} alt='decorative' height="50" />
          </div>
          <div id="navbarBasicExample" >
            <div className="navbar-start">
              {isLogged ?
                <p className="navbar-item">
                Current user is: {usrMail}
                </p>
                :null}
                <hr className="navbar-divider"/>
            </div>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                {isLogged ? null
                :<Link to={'/register'} className="button is-primary">
                  <strong>Sign up</strong>
                </Link>}
                {isLogged ?<Link to={'/'} className="button is-light">
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
      </>
    )
  }
}
