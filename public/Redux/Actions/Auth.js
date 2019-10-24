import Axios from 'axios';
import { AsyncStorage } from 'react-native';
import { API_BASEURL } from 'react-native-dotenv'

// export const getAuth = (data) => {
//   return {
//     type: 'GET_AUTHENTICATION',
//     payload: new Promise(async (resolve, reject) => {
//       await Axios.post(`http://192.168.1.23:3300/api/v1/users/login`, data)
//         .then(result => resolve(result))
//         .catch(error => reject(error));
//     })
//   };
// };

export const getAuth = async data => {
  try {
    const result = await Axios.post(
      `${API_BASEURL}/api/v1/users/login`,
      data,
    );
    return {
      type: 'GET_AUTHENTICATION',
      payload: result.data,
    };
  } catch (err) {
    console.log(err);
  }
};