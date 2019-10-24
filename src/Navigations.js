import React, {Component} from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import HomeNav from './Screens/Home/HomeNav';

// ANCHOR Import Pesanan : Family
import Pesanan from './Screens/PesananScreen/PesananScreen';
import Bukti from './Screens/PesananScreen/Child/BuktiScreen/BuktiScreen';
import TiketVoucher from './Screens/PesananScreen/Child/TiketVoucherScreen/TiketVoucherScreen';
import Promo from './Screens/PromoScreen/PromoScreen';
import DetailPromo from './Screens/PromoScreen/Child/DetailPromoScreen/DetailPromoScreen';

import Menu from './Screens/Menu/Menu';
import FindPlace from './Screens/Home/Component/FindPlace';
import OpenScreen from './Screens/OpenScreen/OpenScreen';
import SplashScreen from './Screens/SplashScreen/SplashScreen';
import Main from './Screens/Registration/main';
import Login from './Screens/Registration/Login';
import Properti from './Screens/Properti/Properti';
import EmailRegister from './Screens/Registration/EmailRegister';
import EmailAktivasi from './Screens/Registration/EmailAktivasi';
import DaftarBiodata from './Screens/Registration/DaftarBiodata';
import Akun from './Screens/Profile/akun';
import ForgetPassword from './Screens/Registration/ForgetPassword/ForgetPassword';
import resetPassword from './Screens/Registration/ForgetPassword/resetPassword';
import ListRoom from './Screens/CariRoom/Screens/ListRoom';
import DetailRoom from './Screens/CariRoom/Screens/DetailRoom';

const MainNavigator = createStackNavigator(
  {
    OpenScreen,
    SplashScreen,
    FindPlace,
    Bukti,
    TiketVoucher,
    Main,
    Login,
    Menu,
    Properti,
    Promo,
    EmailRegister,
    EmailAktivasi,
    DaftarBiodata,
    Akun,
    ForgetPassword,
    resetPassword,
    ListRoom,
    DetailRoom,
    DetailPromo,
    Index: createMaterialBottomTabNavigator({
      Home: {
        screen: HomeNav,
        navigationOptions: {
          tabBarLabel: 'Cari',
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
    initialRouteName: 'SplashScreen',
  },
);

export default createAppContainer(MainNavigator);
