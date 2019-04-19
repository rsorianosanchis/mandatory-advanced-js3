import React,{Component} from 'react';
import {Header} from '../labbComponents/header.js';
import '../style/main.css';
import {Helmet} from 'react-helmet';

export class Main extends Component {
  render(){
    return(
      <div className='containerMain'>
        <Helmet>
          <title>Main</title>
        </Helmet>
        <Header/>
        <div className='legend'>
          <div className='margins'></div>
          <p>Vänligen tryck på <strong> Användarregistrering</strong> om du inte är medlem.</p>
          <div className='margins'></div>
        </div>
      </div>
    )
  }
}
