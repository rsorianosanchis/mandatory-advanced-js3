import axios from 'axios';
import Swal from 'sweetalert2';
import API_ROOT from '../App.js';


export const _postNyTodo = (myTodo)=>{
  axios.post(`${API_ROOT}/todos/:id`,{content: myTodo})
}
