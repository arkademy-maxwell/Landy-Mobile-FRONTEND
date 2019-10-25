import Axios from 'axios';
import {API_BASEURL} from 'react-native-dotenv';

export const getAuth = async data => {
  const result = await Axios.post(`${API_BASEURL}/api/v1/users/login`, data);
  return {
    type: 'GET_AUTHENTICATION',
    payload: result.data,
  };
};
