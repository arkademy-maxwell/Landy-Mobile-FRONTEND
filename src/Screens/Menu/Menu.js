import React from 'react';
import {Image} from 'react-native';
import {
  Container,
  Content,
  Text,
  View,
  Grid,
  Row,
  Col,
  Button,
  Icon,
} from 'native-base';
import {TouchableOpacity, AsyncStorage} from 'react-native';
import {useSelector} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../../Components/Header/child/Header';
import Styles from './Menu.style';

const LoginMenu = props => (
  <View>
    <View style={Styles.viewTextWelcome}>
      <View style={Styles.roundedActive} />
      <Text style={Styles.welcome}>Selamat Datang, </Text>
      <Text style={Styles.nameUser}>{props.name}</Text>
    </View>
    <TouchableOpacity onPress={() => props.navigation.navigate('Akun')}>
      <View style={Styles.listView}>
        <View style={Styles.listLogo}>
          <Icon type="Feather" name="users" style={Styles.icon} />
        </View>
        <Text>Travel Partner</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => props.navigation.navigate('Akun')}>
      <View style={Styles.listView}>
        <View style={Styles.listLogo}>
          <Icon type="AntDesign" name="user" style={Styles.icon} />
        </View>
        <Text>Akun</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => props.navigation.navigate('Akun')}>
      <View style={Styles.listView}>
        <View style={Styles.listLogo}>
          <Icon type="EvilIcons" name="refresh" style={Styles.icon} />
        </View>
        <Text>Refund</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => props.navigation.navigate('Akun')}>
      <View style={Styles.listView}>
        <View style={Styles.listLogo}>
          <Icon
            type="Ionicons"
            name="ios-notifications-outline"
            style={Styles.icon}
          />
        </View>
        <Text>Pengaturan Notifikasi</Text>
      </View>
    </TouchableOpacity>
  </View>
);

const Menu = props => {
  const result = useSelector(state => state.Auth.Authentication);
  return (
    <Container>
      <Content>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#0180ef', '#018eef']}
          style={Styles.linearGradient}>
          <Header menu="Menu" />
          <View style={Styles.headerMenu}>
            <View style={{margin: 20}}>
              <Text style={Styles.title}>Menjady Landy Traveler</Text>
              <Grid>
                <Row>
                  <Col size={2}>
                    <Image
                      source={require('../../../public/register/menjadiairy.png')}
                      style={Styles.image}
                    />
                  </Col>
                  <Col size={4}>
                    <Text style={Styles.text}>
                      Masuk atau daftar sekarang dan nikmati kenyamanan
                      pemesanan kamar & tiket pesawat melalui aplikasi landy
                    </Text>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button
                      full
                      warning
                      style={Styles.button}
                      onPress={() => props.navigation.navigate('Main')}>
                      <Text>Masuk atau Daftar</Text>
                    </Button>
                  </Col>
                </Row>
              </Grid>
            </View>
          </View>
        </LinearGradient>
        {result.token ? <LoginMenu name={result.name} /> : null}
        <TouchableOpacity onPress={() => props.navigation.navigate('Akun')}>
          <View style={Styles.listView}>
            <View style={Styles.listLogo}>
              <Icon
                type="Ionicons"
                name="ios-help-circle-outline"
                style={Styles.icon}
              />
            </View>
            <Text>Bantuan</Text>
          </View>
        </TouchableOpacity>
        <View style={Styles.wrapLayananPelanggan}>
          <Text style={Styles.layananPelanggan}>Layanan Pelanggan</Text>
          <View style={Styles.layananContent}>
            <View style={Styles.listLogo}>
              <Icon type="AntDesign" name="phone" style={Styles.icon} />
            </View>
            <View style={Styles.listTitle}>
              <View>
                <Text style={Styles.mainText}>904859458</Text>
              </View>
              <View>
                <Text style={Styles.subText}>Via Telephone</Text>
              </View>
            </View>
          </View>
          <View style={Styles.layananContent}>
            <View style={Styles.listLogo}>
              <Icon type="AntDesign" name="mail" style={Styles.icon} />
            </View>
            <View style={Styles.listTitle}>
              <View>
                <Text style={Styles.mainText}>cs@Landyrooms.com</Text>
              </View>
              <View>
                <Text style={Styles.subText}>Via Email</Text>
              </View>
            </View>
          </View>
          <View style={Styles.layananContent}>
            <View style={Styles.listLogo}>
              <Icon type="AntDesign" name="message1" style={Styles.icon} />
            </View>
            <View style={Styles.listTitle}>
              <View>
                <Text style={Styles.mainText}>LandyIndonesiaCS</Text>
              </View>
              <View>
                <Text style={Styles.subText}>Via Facebook Messenger</Text>
              </View>
            </View>
          </View>
          <View style={Styles.layananContent}>
            <View style={Styles.listLogo}>
              <Icon
                type="MaterialIcons"
                name="chat-bubble-outline"
                style={Styles.icon}
              />
            </View>
            <View style={Styles.listTitle}>
              <View>
                <Text style={Styles.mainText}>Live Chat</Text>
              </View>
              <View>
                <Text style={Styles.subText}>Layanan Pelanggan 24 jam</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={Styles.wrapLayananPelanggan}>
          <Text style={Styles.layananPelanggan}>Kerjasama</Text>
          <View style={Styles.layananContent}>
            <View style={Styles.listLogo}>
              <Icon type="FontAwesome" name="building-o" style={Styles.icon} />
            </View>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Properti')}>
              <View>
                <Text style={Styles.mainText}>Daftarkan Properti</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={Styles.border} />
        <Text style={Styles.layananPelanggan}>Tentang Landy Rooms App</Text>
        <View style={Styles.layananContent}>
          <View style={Styles.listLogo}>
            <Icon
              type="Ionicons"
              name="ios-information-circle-outline"
              style={Styles.icon}
            />
          </View>
          <View style={Styles.listTitle}>
            <View>
              <Text style={Styles.mainText}>V.1.0.0</Text>
            </View>
            <View>
              <Text style={Styles.subText}>Versi Aplikasi</Text>
            </View>
          </View>
        </View>
      </Content>
    </Container>
  );
};

export default Menu;
