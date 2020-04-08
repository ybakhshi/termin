import axios from 'axios';
import {toast} from 'react-toastify';
axios.interceptors.response.use(null, error =>{
    const expectedError = error.response && error.response.status >=400 && error.response.status < 400;
    if(!expectedError){
      console.log("logging the error", error);
      toast("An unexpected error occured! please bear with us!");
    }
    return Promise.reject(error);
  });

  export default {
      get: axios.get,
      post: axios.post,
      put: axios.put,
      delete : axios.delete
  };
