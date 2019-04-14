import React,{Component} from 'react';
import {Link} from 'react-router-dom';

export class Header extends Component {

  render(){
    const {usrMail}= this.props;

    return(
      <>
        <h1>HEADER</h1>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
              <img src="" width="112" height="28"/>
            </a>
          </div>
          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">

                  <p className="navbar-item">
                    {usrMail}
                  </p>

                  <hr className="navbar-divider"/>

                </div>
              </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <Link className="button is-primary">
                    <strong>Sign up</strong>
                  </Link>
                  <Link className="button is-light">
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
