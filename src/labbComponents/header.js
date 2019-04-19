import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import thingstodo from './thingstodo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../style/header.css';
//
export class Header extends Component {
  //
  render(){
    return(
      <div className='headerContainer'>
        <nav  className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
              <img src={thingstodo} alt='decorative'/>
          </div>
          <div id="navbarBasicExample" >
            <div className="navbar-start">
              {this.props.logged ?
                <p className="navbar-item">
                  <legend>Användaren i sessionen är: <strong>{this.props.usrMail}</strong></legend>
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
                  <strong>Användarregistrering</strong>
                </Link>}
                {this.props.logged ?<Link to={'/'} className="button is-light">
                  <FontAwesomeIcon icon="unlock" style={{marginRight: 5}}/>Stäng Sessionen
                </Link>:
                <Link to={'/login'} className="button is-light">
                    <FontAwesomeIcon icon="lock" style={{marginRight: 5}}/>Öppna Sessionen
                </Link>
                }
              </div>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
