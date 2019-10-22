import React, {useState} from 'react';
import Carousel from 'pinar';
import Dots from 'react-native-dots-pagination';
import {ImageBackground} from 'react-native';
import {View, Text, Button, Content} from 'native-base';
import {styles} from './OpenScreen.style';

const OpenScreen = props => {
  return (
    <View style={styles.content}>
      <ImageBackground
        source={require('../../../public/assets/Logo/Logo.png')}
        style={styles.Logo}
      />
    </View>
  );
};

export default OpenScreen;
