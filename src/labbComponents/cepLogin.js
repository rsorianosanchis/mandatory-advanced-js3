import axios from 'axios';
import Swal from 'sweetalert2';
import API_ROOT from '../App.js';

export const _usrLogin = (email,password,fn)=>{
  axios.post(`${API_ROOT}/auth`,{email: email,password: password})
  .then(response=>{
    //response with status 200 ok
    //and token
    console.log(response);
    fn(response.data.token);
    /*fn upsdate här updatera vi token i store */
    /*till magasin*/
    //if 200
    if (true) {
      Swal.fire({
        position: 'top-end',
        type: 'success',
        title: 'Email and Password Correct !!',
        showConfirmButton: false,
        timer: 1500
      })
    }
  })
  .catch(error=>{
    console.log(error);
    Swal.fire({
      type: 'error',
      title: 'Oops...',
      text: `Login Error`+ error,
    })
  })
}
