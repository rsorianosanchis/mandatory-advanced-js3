import React,{Component} from 'react';
import {Header} from '../labbComponents/header.js';
import '../style/main.css';

export class Main extends Component {
  render(){
    return(
      <div className='containerMain'>
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
