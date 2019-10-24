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
const KonfirmasiPesanan = props => {
  return (
    <Container>
      <Header menu="Konfimasi Pesanan" icon="arrow-back" />
      <Header />
      <Content>
        <View style={{marginLeft: 20, marginRight: 35, marginBottom: 20}}>
          <Text style={{color: '#989794', marginTop: 20, fontSize: 13}}>
            Kontak Pemesan
          </Text>
          <Card style={{padding: 10, elevation: 0, marginTop: 30}}>
            <Grid>
              <Row>
                <Text>Tn. Muhammad Badrun</Text>
              </Row>
              <Row>
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
              <Row>
                <Col size={2}>
                  <Image
                    source={require('../../../../Assets/Images/promo.png')}
                    style={{width: 75, height: 75, borderRadius: 5}}
                  />
                </Col>
                <Col size={6}>
                  <View style={{marginLeft: 20}}>
                    <Text style={{fontSize: 13}}>Landy Rooms</Text>
                    <Text style={{fontSize: 13}}>
                      Landy Fatmawati Abdul Majid Raya 12 Jakarta
                    </Text>
                    <Text style={{fontSize: 13}}>
                      Jl. Abdul Majid Raya No. 12
                    </Text>
                  </View>
                </Col>
              </Row>
              <Row
                style={{
                  borderTopWidth: 1,
                  borderColor: '#e9e9e9',
                  marginTop: 10,
                }}>
                <Text style={{color: '#989794', fontSize: 13, marginTop: 10}}>
                  Data Tamu
                </Text>
              </Row>
              <Row>
                <Text>1. Tn Muhammad Badrun</Text>
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
        style={{position: 'relative', bottom: 0}}
        onPress={() => props.navigation.navigate('MetodePembayaran')}>
        <Text>Lanjutkan</Text>
      </Button>
    </Container>
  );
};

export default KonfirmasiPesanan;
