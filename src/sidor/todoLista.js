import React,{Component} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import {API_ROOT} from '../App.js';
import {token$} from '../auth';
import {Header} from '../labbComponents/header.js';
import '../style/todoLista.css';
import {Helmet} from 'react-helmet';


export class TodoLista extends Component {
  state={
    todosList: [],
    newTodo:''
  }
  //
  _postNyTodo = (e)=>{
    e.preventDefault();
    console.log(this.state.newTodo);
    axios.post(`${API_ROOT}/todos`,
      {content: this.state.newTodo},
      {headers: {Authorization: `Bearer `+token$._value}})
    .then(response=>{
      console.log(response.data.todo.content);
      this.setState({todosList: [...this.state.todosList,response.data.todo]});
      let field = document.getElementById('todoIdInput');
      field.value = '';
      this.setState({newTodo: ''});
    })
    .catch(error=>{console.log(error);})
  }
  //
  _deleteTodo = (e) =>{
    e.preventDefault();
    console.log(e.target.id);
    axios.delete(`${API_ROOT}/todos/${e.target.id}`,
      {headers: {Authorization: `Bearer `+token$._value}}
    ).then(response=>{
      console.log('borrado')
      this._getTodos()
    }

    ).catch(

    )
  }
  //
  _getTodos = ()=>{
    axios.get(`${API_ROOT}/todos`,{headers:{Authorization: `Bearer `+token$._value}})
    .then(response=>{
      console.log(response.data.todos);
      this.setState({todosList: response.data.todos});

      //render response lista
    })
    .catch(error=>{
      console.log(error);
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'skriv här error msg',
      })
    })
  }
  //
  componentDidMount() {
    console.log('componentDidMount');
    this._getTodos();
  }
  render(){
    //console.log(token$._value);
    return(
      <div className='containerTodoLista'>
        <Helmet>
          <title>TodoLista</title>
        </Helmet>
        <Header
          logged={this.props.location.state.isLogged}
          usrMail={this.props.location.state.userLogged}/>
          <form onSubmit={this._postNyTodo}>
            <div className="field">
              <p className="control has-icons-left has-icons-right">
                <input
                  id='todoIdInput'
                  className="input"
                  type="text"
                  placeholder="new Todo"
                  onChange={(e)=>(this.setState({newTodo: e.target.value}))}/>
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
                <span className="icon is-small is-right">
                  <i className="fas fa-check"></i>
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control">
                <button className="button is-success">
                  Ladda Upp
                </button>
              </p>
            </div>
          </form>
          <ul>
            {this.state.todosList.map(todo=>{
              return(
                <div className="notification is-info" key={todo.id}>
                  <button id={todo.id} onClick={this._deleteTodo} className="delete"></button>
                  <p className='contentText'>{todo.content}</p>
                </div>
              )
            })}
          </ul>
      </div>
    )
  }
}
