import React,{Component} from 'react';
import {Header} from '../labbComponents/header.js';

export class TodoLista extends Component {
  render(){
    return(
      <React.Fragment>
        <Header logged={this.props.location.state.isLogged}/>
        <h1>tODOLISTA</h1>
      </React.Fragment>
    )
  }
}
