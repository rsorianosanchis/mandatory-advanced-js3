import React,{Component} from 'react';
import {Header} from '../labbComponents/header.js';

export class Main extends Component {
  render(){
    return(
      <React.Fragment>
        <Header/>
        <legend>Vänligen tryck på <strong> Användarregistrering</strong> om du inte är medlem.</legend>
      </React.Fragment>
    )
  }
}
