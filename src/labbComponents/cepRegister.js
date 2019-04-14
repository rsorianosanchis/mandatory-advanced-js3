import axios from 'axios';
import Swal from 'sweetalert2';


export const _usrRegister = (url,email,password)=>{
  console.log('kontroll com');
  axios.post(`${url}/register`,{email: email,password: password})
  .then(response=>{
    console.log(response);
    //status code 201 if ok
    if (response.status) {
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
