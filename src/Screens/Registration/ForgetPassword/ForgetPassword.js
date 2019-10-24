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

const ForgetPassword = props => {
  return (
    <Container>
      <Header menu="Reset password Landy Traveler" icon="arrow-back" />
      <Content>
        <View style={{margin: 20}}>
          <ImageBackground
            source={require('../../../../public/register/forgetPassword.png')}
            style={{width: '100%', height: 180}}
          />

          <View>
            <Text style={{fontWeight: 'bold', marginBottom: 10}}>
              Request kode verifikasi
            </Text>
            <Text style={{fontSize: 13}}>
              Kode verifikasi dan petunjuk pengaturan password baru akan
            </Text>
            <Text style={{fontSize: 13}}>
              dikirim ke email anda. Silahkan masukan email akun airy anda:
            </Text>
          </View>
          <View>
            <Form>
              <Item floatingLabel>
                <Label>Email</Label>
                <Input />
              </Item>
              <Button
                full
                warning
                style={{
                  elevation: 0,
                  borderRadius: 20,
                  backgroundColor: '#fff6d6',
                  marginTop: 30,
                  marginBottom: 30,
                }}>
                <Text
                  style={{color: '#989794'}}
                  onPress={() => props.navigation.navigate('resetPassword')}>
                  Submit
                </Text>
              </Button>
            </Form>
          </View>
        </View>
      </Content>
    </Container>
  );
};
export default ForgetPassword;
