import axios from 'axios';
import Swal from 'sweetalert2';
import API_ROOT from '../App.js';

export const _usrRegister = (email,password)=>{
  axios.post(`${API_ROOT}/register`,{email: email,password: password})
  .then(response=>{
    console.log(response.data);
    //status code 201 if ok
    if (true) {
      Swal.fire({
        position: 'top-end',
        type: 'success',
        title: 'Registration done !',
        showConfirmButton: false,
        timer: 1500
      })
    }
    //return response;
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
