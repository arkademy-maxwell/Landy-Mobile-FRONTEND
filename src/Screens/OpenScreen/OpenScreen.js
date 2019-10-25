import React from 'react';
import {ImageBackground, AsyncStorage} from 'react-native';
import {View} from 'native-base';
import {styles} from './OpenScreen.style';
import {useDispatch} from 'react-redux';

const isLoggedIn = async item => {
  const userData = await AsyncStorage.getItem('user-credential');
  const userDataParse = JSON.parse(userData);
  return userDataParse;
};

const OpenScreen = props => {
  const dispatch = useDispatch();
  const _renderItem = () => {
    setTimeout(async () => {
      const userData = await isLoggedIn();
      console.log(userData);
      if (userData) {
        dispatch({type: 'GET_AUTH_FULFILLED', payload: userData});
      }
      const isConfigured = await AsyncStorage.getItem('isConfigured');
      return isConfigured
        ? props.navigation.replace('Index')
        : props.navigation.replace('SplashScreen');
    }, 2000);
    return (
      <View style={styles.content}>
        <ImageBackground
          source={require('../../../public/assets/Logo/Logo.jpeg')}
          style={styles.Logo}
        />
      </View>
    );
  };

  return _renderItem();
};

export default OpenScreen;
