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
import { TouchableOpacity, ImageBackground } from 'react-native';
import Header from '../../Components/Header/parent/Header';

const EmailAktivasi = props => {
  return (
    <Container>
      <Header menu="Aktivasi Akun" icon="arrow-back" />
      <Content>
        <View style={{ margin: 20 }}>
          <ImageBackground
            source={require('../../../public/register/aktivasi.png')}
            style={{ width: '100%', height: 180 }}
          />

          <View>
            <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>
              Kode Aktivasi Telah dikirim
            </Text>
            <Text style={{ fontSize: 13 }}>
              Kami telah mengirim kode aktivasi ke email (email). segera masukan
              kode aktivasi di
            </Text>
            <Text style={{ fontSize: 13 }}>kolom berikut:</Text>
          </View>
          <View>
            <Form>
              <Item floatingLabel>
                <Label>Kode Aktivasi</Label>
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
                  style={{ color: '#989794' }}
                  onPress={() => props.navigation.navigate('Login')}>
                  Aktifkan
                </Text>
              </Button>
            </Form>
            <TouchableOpacity>
              <Text
                style={{ fontSize: 13, textAlign: 'center', color: '#00aeef' }}>
                Kirim Ulang Kode Verifikasi
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Content>
    </Container>
  );
};
export default EmailAktivasi;
