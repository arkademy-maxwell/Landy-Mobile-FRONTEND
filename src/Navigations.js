import React, {Component} from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

// ANCHOR Import Screen
import HomeNav from './Screens/Home/HomeNav';

// ANCHOR Import Pesanan : Family
import Pesanan from './Screens/Pesanan/Pesanan';
import Bukti from './Screens/Pesanan/Child/BuktiScreen/BuktiScreen';
import TiketVoucher from './Screens/Pesanan/Child/TiketVoucherScreen/TiketVoucherScreen';

import Menu from './Screens/Menu/Menu';
import FindPlace from './Screens/Home/Component/FindPlace';
import OpenScreen from './Screens/OpenScreen/OpenScreen';
import SplashScreen from './Screens/SplashScreen/SplashScreen';

const MainNavigator = createStackNavigator(
  {
    OpenScreen,
    SplashScreen,
    FindPlace,
    Bukti,
    TiketVoucher,
    Index: createMaterialBottomTabNavigator({
      Home: {
        screen: HomeNav,
        navigationOptions: {
          tabBarLabel: 'Home',
          tabBarIcon: ({tintColor}) => (
            <View>
              <Icon
                style={[{color: tintColor}]}
                size={25}
                name={'ios-search'}
              />
            </View>
          ),
          activeColor: '#00aeef',
          inactiveColor: '#b9b9b9',
          barStyle: {backgroundColor: '#fff', elevation: 0},
        },
      },
      Pesanan: {
        screen: Pesanan,
        navigationOptions: {
          tabBarLabel: 'Pesanan',
          tabBarIcon: ({tintColor}) => (
            <View>
              <Icon style={[{color: tintColor}]} size={25} name={'ios-paper'} />
            </View>
          ),
          activeColor: '#00aeef',
          inactiveColor: '#b9b9b9',
          barStyle: {backgroundColor: '#fff', elevation: 0},
        },
      },
      Menu: {
        screen: Menu,
        navigationOptions: {
          tabBarLabel: 'Menu',
          tabBarIcon: ({tintColor}) => (
            <View>
              <Icon style={[{color: tintColor}]} size={25} name={'ios-menu'} />
            </View>
          ),
          activeColor: '#00aeef',
          inactiveColor: '#b9b9b9',
          barStyle: {backgroundColor: '#fff', elevation: 0},
        },
      },
    }),
  },
  {
    headerMode: 'none',
    initialRouteName: 'OpenScreen',
  },
);

export default createAppContainer(MainNavigator);
