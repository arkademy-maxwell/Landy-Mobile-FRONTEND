import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import OpenScreen from './src/Screens/OpenScreen/OpenScreen';
import SplashScreen from './src/Screens/SplashScreen/SplashScreen';

const App = props => {
  return <OpenScreen />;
};

export default App;
