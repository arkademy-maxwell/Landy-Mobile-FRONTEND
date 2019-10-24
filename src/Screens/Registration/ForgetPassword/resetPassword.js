import React from 'react';
import {
  Container,
  Content,
  View,
  Text,
  Button,
  Form,
  Item,
  Input,
  Label,
  Grid,
  Col,
  Row,
  Image,
} from 'native-base';
import {TouchableOpacity, ImageBackground} from 'react-native';
import Header from '../../../Components/Header/parent/Header';

const resetPassword = props => {
  return (
    <Container>
      <Header menu="Reset password Landy Traveler" icon="arrow-back" />
      <Content>
        <View style={{margin: 20}}>
          <ImageBackground
            source={require('../../../../public/register/reset.png')}
            style={{width: '100%', height: 180}}
          />

          <View>
            <Text style={{fontWeight: 'bold', marginBottom: 10}}>
              Reset Passsword
            </Text>
            <Text style={{fontSize: 13}}>
              Petunjuk pengaturan password baru telah kami kirim ke email
            </Text>
            <Text style={{fontSize: 13}}>
              (email). Silahkan periksa email anda dan ikuti petunjuk pembuatan
              password baru
            </Text>
          </View>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderTopWidth: 1,
            borderColor: '#d8d8d8',
            padding: 30,
          }}>
          <Text style={{textAlign: 'center', fontSize: 13}}>
            Belum menerima email?
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 14,
              color: '#00aeef',
              marginTop: 10,
            }}>
            Kirim ulang email
          </Text>
        </View>
        <Grid style={{marginTop: 20}}>
          <Col size={5}>
            <Text
              style={{
                fontSize: 12,
                alignSelf: 'flex-end',
              }}>
              Sudah mendapat Eamil?
            </Text>
          </Col>
          <Col size={3}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Login')}>
              <Text style={{color: '#5ecbf5', fontSize: 12}}>Login</Text>
            </TouchableOpacity>
          </Col>
        </Grid>
      </Content>
    </Container>
  );
};
export default resetPassword;
