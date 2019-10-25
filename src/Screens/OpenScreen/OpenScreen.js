import React, {useState} from 'react';
import {ImageBackground, AsyncStorage} from 'react-native';
import {View, Text, Button, Content} from 'native-base';
import {styles} from './OpenScreen.style';

const OpenScreen = props => {
  const _renderItem = () => {
    setTimeout(async () => {
      const isConfigured = await AsyncStorage.getItem('isConfigured');
      return isConfigured
        ? props.navigation.replace('HomeNav')
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
