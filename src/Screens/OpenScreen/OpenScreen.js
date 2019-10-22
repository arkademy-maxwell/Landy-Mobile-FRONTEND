import React, {useState} from 'react';
import {ImageBackground} from 'react-native';
import {View, Text, Button, Content} from 'native-base';
import {styles} from './OpenScreen.style';

const OpenScreen = props => {
  const _renderItem = () => {
    setTimeout(() => props.navigation.replace('SplashScreen'), 2000);
    return (
      <View style={styles.content}>
        <ImageBackground
          source={require('../../../public/assets/Logo/Logo.png')}
          style={styles.Logo}
        />
      </View>
    );
  };

  return _renderItem();
};

export default OpenScreen;
