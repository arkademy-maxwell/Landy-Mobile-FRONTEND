import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Navigation from './src/Navigations';

// Redux
import { Provider } from 'react-redux'
import store from './public/Redux/store'

const App = props => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
};

export default App;
