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
import BuatPesanan from './Screens/Pesanan/Screens/BuatPesanan';
import KonfirmasiPesanan from './Screens/Pesanan/Screens/KonfirmasiPesanan/KonfirmasiPesanan';
import MetodePembayaran from './Screens/Pesanan/Screens/MetodePembayaran/MetodePembayarn';
import Durasi from './Screens/Home/Component/Durasi';
import ListPenerbangan from './Screens/CariPenerbangan/screens/ListPenerbangan';
import DetailPenerbangan from './Screens/CariPenerbangan/screens/DetailPenerbangan';
import DataTamu from './Screens/Pesanan/Screens/DataTamu';
import Bayar from './Screens/Pesanan/Screens/Bayar/bayar';
import BuatPesananPesawat from './Screens/CariPenerbangan/screens/Pemesanan/BuatPesanan';
import DataPenumpang from './Screens/CariPenerbangan/screens/DataPenumpang';
import KonfirmasiPesananPesawat from './Screens/CariPenerbangan/screens/Konfirmasi/KonfirmasiPesanan';
import MetodePembayaranPesawat from './Screens/CariPenerbangan/screens/MetodePembayaran/MetodePembayaran';
import BayarPesawat from './Screens/CariPenerbangan/screens/BayarPesawat/BayarPesawat';

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
    BuatPesanan,
    KonfirmasiPesanan,
    MetodePembayaran,
    Durasi,
    ListPenerbangan,
    DetailPenerbangan,
    DataTamu,
    Bayar,
    BuatPesananPesawat,
    DataPenumpang,
    KonfirmasiPesananPesawat,
    MetodePembayaranPesawat,
    BayarPesawat,
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
    initialRouteName: 'OpenScreen',
  },
);

export default createAppContainer(MainNavigator);
