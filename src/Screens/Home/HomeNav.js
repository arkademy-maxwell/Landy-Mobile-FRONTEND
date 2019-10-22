import React, { Component } from 'react';
import { View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HeaderBanner from './Component/HeaderBanner';
import Home from './Home'
import Rooms from './Screens/Rooms'
import Plane from './Screens/Plane'
// import FindPlace from './Component/FindPlace'

const MainNavigator = createStackNavigator(
    {
        Home: { screen: Home },
        // FindPlace: { screen: FindPlace },
        Rooms: { screen: Rooms },
        Plane: { screen: Plane },
        HeaderBanner: { screen: HeaderBanner }
    },
    {
        headerMode: 'none',
        initialRouteName: 'Home',
    },
);

export default createAppContainer(MainNavigator);