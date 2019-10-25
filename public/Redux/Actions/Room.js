import Axios from 'axios';
import { AsyncStorage } from 'react-native';
import { API_BASEURL } from 'react-native-dotenv';

export const getRoom = () => {
  return {
    type: 'GET_ROOM',
    payload: new Promise((resolve, reject) => {
      Axios.get(`${API_BASEURL}/api/v1/rooms`)
        .then(result => resolve(result))
        .catch(error => reject(error));
    }),
  };
};
