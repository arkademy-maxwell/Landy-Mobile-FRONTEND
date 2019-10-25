import Axios from 'axios';
import { AsyncStorage } from 'react-native';
import { API_BASEURL } from 'react-native-dotenv';

export const getFlight = () => {
  return {
    type: 'GET_FLIGHT',
    payload: new Promise((resolve, reject) => {
      Axios.get(`${API_BASEURL}/api/v1/flightRoutes`)
        .then(result => resolve(result))
        .catch(error => reject(error));
    }),
  };
};
