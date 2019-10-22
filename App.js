import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import SplashScreen from './src/Screens/SplashScreen/SplashScreen';

const App = props => {
  return <SplashScreen />;
};

export default App;
