import Axios from 'axios';
import { AsyncStorage } from 'react-native';
// import { API_BASEURL } from 'react-native-dotenv'

export const getRoom = (options) => {
  return {
    type: 'GET_ROOM',
    payload: new Promise(async (resolve, reject) => {
      const { search = "", sort = "", page = "1", order = "" } = options;

      // Axios.get(`${API_BASEURL}/api/v1/rooms?search=${search}`, {
      //   headers: {
      //     Authorization: await AsyncStorage.getItem('keyToken'),
      //   },
      // })
      //   .then(result => resolve(result))
      //   .catch(error => reject(error));
      Axios.get(`http://192.168.1.23:3300/api/v1/rooms?search=${search}`, {
        headers: {
          Authorization: await AsyncStorage.getItem('auth-token'),
        },
      })
        .then(result => resolve(result))
        .catch(error => reject(error));
    }),
  };
};
