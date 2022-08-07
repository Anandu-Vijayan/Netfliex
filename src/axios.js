import axios from 'axios'
import {baseUrl} from './constance/constance'

const instance = axios.create({
    baseURL: baseUrl,
   
    
  });

  export default instance