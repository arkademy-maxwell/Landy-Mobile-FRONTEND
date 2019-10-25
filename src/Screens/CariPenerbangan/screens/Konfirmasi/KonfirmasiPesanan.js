import React from 'react';
import {
  Container,
  Content,
  View,
  Grid,
  Col,
  Row,
  Text,
  Input,
  Button,
  Form,
  Item,
  Label,
  Card,
  Icon,
  CardItem,
} from 'native-base';
import {TouchableOpacity, Image} from 'react-native';
import Header from '../../../../Components/Header/parent/Header';
import HeaderDotted from '../../../Pesanan/Component/Header';
const KonfirmasiPesananPesawat = props => {
  return (
    <Container>
      <Header menu="Konfimasi Pesanan" icon="arrow-back" {...props} />
      <HeaderDotted />
      <Content style={{backgroundColor: '#ecf0f1'}}>
        <View style={{marginLeft: 20, marginRight: 20, marginBottom: 20}}>
          <Text style={{color: '#989794', marginTop: 20, fontSize: 13}}>
            Kontak Pemesan
          </Text>
          <Card style={{padding: 10, elevation: 0, marginTop: 30}}>
            <Grid>
              <Row>
                <Text style={{paddingTop: 10, paddingBottom: 10, fontSize: 13}}>
                  Tn. Muhammad Badrun
                </Text>
              </Row>
              <Row style={{marginBottom: 10}}>
                <Col size={1}>
                  <Icon
                    type="MaterialIcons"
                    name="phone-android"
                    style={{fontSize: 20}}
                  />
                </Col>
                <Col size={10}>
                  <Text>+6283661635261</Text>
                </Col>
              </Row>
              <Row>
                <Col size={1}>
                  <Icon
                    type="MaterialIcons"
                    name="mail"
                    style={{fontSize: 20}}
                  />
                </Col>
                <Col size={10}>
                  <Text>badrun@gmail.com</Text>
                </Col>
              </Row>
            </Grid>
          </Card>
          <Grid>
            <Col>
              <Text style={{color: '#989794', marginTop: 20, fontSize: 13}}>
                Kamar
              </Text>
            </Col>
            <Col>
              <Text
                style={{
                  textAlign: 'right',
                  color: '#00aeef',
                  marginTop: 20,
                  fontSize: 13,
                }}>
                Rincian
              </Text>
            </Col>
          </Grid>
          <Card style={{padding: 10, elevation: 0, marginTop: 30}}>
            <Grid>
              <Row style={{alignItems: 'center'}}>
                <Col size={1}>
                  <Image
                    source={require('../../../../../public/Bayar/citylink.png')}
                    style={{width: 50, height: 20}}
                  />
                </Col>
                <Col size={6}>
                  <View style={{marginLeft: 20}}>
                    <Text style={{fontSize: 13}}>Jakarta - Surabaya</Text>
                  </View>
                </Col>
              </Row>
              <Row>
                <Text style={{fontSize: 13, color: '#7f8c8d'}}>
                  Sabtu, 26 Okt 2019, 20:15 HLP - 21:35 SUB
                </Text>
              </Row>
              <Row
                style={{
                  borderTopWidth: 1,
                  borderColor: '#e9e9e9',
                  marginTop: 10,
                }}>
                <Text
                  style={{
                    color: '#989794',
                    fontSize: 13,
                    marginTop: 10,
                    marginBottom: 5,
                  }}>
                  Data Tamu
                </Text>
              </Row>
              <Row>
                <Text style={{fontSize: 15}}>1. Tn Muhammad Badrun</Text>
              </Row>
              <Row
                style={{
                  borderTopWidth: 1,
                  borderColor: '#e9e9e9',
                  marginTop: 10,
                }}>
                <Col>
                  <Text
                    style={{
                      fontSize: 13,
                      marginTop: 10,
                      fontWeight: 'bold',
                    }}>
                    SubTotal
                  </Text>
                </Col>
                <Col>
                  <Text
                    style={{
                      fontSize: 13,
                      marginTop: 10,
                      fontWeight: 'bold',
                      textAlign: 'right',
                    }}>
                    Rp.150000
                  </Text>
                </Col>
              </Row>
            </Grid>
          </Card>
        </View>
      </Content>
      <Button
        full
        warning
        style={{position: 'relative', bottom: 0, backgroundColor: '#ffcb00'}}
        onPress={() => props.navigation.navigate('MetodePembayaranPesawat')}>
        <Text style={{color: '#000'}}>Lanjutkan</Text>
      </Button>
    </Container>
  );
};

export default KonfirmasiPesananPesawat;
