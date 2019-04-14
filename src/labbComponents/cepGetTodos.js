import axios from 'axios';
import Swal from 'sweetalert2';
import API_ROOT from '../App.js';


export const _getLista = (token$)=>{/*token här kommer från magasinet*/
  console.log(token$);
  axios.get(`${API_ROOT}/todos`,{headers:{Authorization: `Bearer `+token$}})
  .then(response=>{
    console.log(response);
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
