import React, { useState, useEffect } from 'react';
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
import { TouchableOpacity, Image } from 'react-native';
import Header from '../../../../Components/Header/parent/Header';
import HeaderDotted from '../../../Pesanan/Component/Header';

import Rupiah from 'rupiah-format'
import Axios from 'axios'
import { API_BASEURL } from 'react-native-dotenv'

const KonfirmasiPesananPesawat = props => {

  const [Origin, setOrigin] = useState('')
  const [Destination, setDestination] = useState('')
  const [Price, setPrice] = useState('')
  const [Airlines, setAirlines] = useState('')
  const [FlightID, setFlightID] = useState('')

  const setParam = () => {
    setOrigin(props.navigation.getParam('origin_code'))
    setDestination(props.navigation.getParam('destination_code'))
    setPrice(props.navigation.getParam('price'))
    setAirlines(props.navigation.getParam('airlines'))
    setFlightID(props.navigation.getParam('id'))
  }

  useEffect(() => {
    setParam()
  })

  const createForm = data => {
    const form = new FormData();

    Object.keys(data).forEach(key => {
      form.append(key, data[key]);
    });

    return form;
  };

  const sendData = () => {
    Axios.post(
      `${API_BASEURL}/api/v1/flightTransaction`,
      createForm({
        routes_id: FlightID,
        users_id: 1,
        total_price: Price
      }),
      {
        headers: {
          'Content-Type': 'multipart/formdata',
        },
      },
    )
      .then(res => {
        props.navigation.navigate('MetodePembayaranPesawat', {
          price: Price
        });
      })
      .catch(error => {
        ToastAndroid.show('Checkout Failed!', ToastAndroid.LONG);
      });
  }

  return (
    <Container>
      <Header menu="Konfimasi Pesanan" icon="arrow-back" {...props} />
      <HeaderDotted />
      <Content style={{ backgroundColor: '#ecf0f1' }}>
        <View style={{ marginLeft: 20, marginRight: 20, marginBottom: 20 }}>
          <Text style={{ color: '#989794', marginTop: 20, fontSize: 13 }}>
            Kontak Pemesan
          </Text>
          <Card style={{ padding: 10, elevation: 0, marginTop: 30 }}>
            <Grid>
              <Row>
                <Text style={{ paddingTop: 10, paddingBottom: 10, fontSize: 13 }}>
                  Tn. Muhammad Badrun
                </Text>
              </Row>
              <Row style={{ marginBottom: 10 }}>
                <Col size={1}>
                  <Icon
                    type="MaterialIcons"
                    name="phone-android"
                    style={{ fontSize: 20 }}
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
                    style={{ fontSize: 20 }}
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
              <Text style={{ color: '#989794', marginTop: 20, fontSize: 13 }}>
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
          <Card style={{ padding: 10, elevation: 0, marginTop: 30 }}>
            <Grid>
              <Row style={{ alignItems: 'center' }}>
                <Col size={1}>
                  {/* <Image
                    source={require('../../../../../public/Bayar/citylink.png')}
                    style={{width: 50, height: 20}}
                  /> */}
                  <Text>{Airlines}</Text>
                </Col>
              </Row>
              <Row>
                <Text style={{ fontSize: 13, color: '#7f8c8d' }}>
                  Sabtu, 26 Okt 2019, 20:15 {Origin} - 21:35 {Destination}
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
                <Text style={{ fontSize: 15 }}>1. Tn Muhammad Badrun</Text>
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
                    {Rupiah.convert(Price)}
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
        style={{ position: 'relative', bottom: 0, backgroundColor: '#ffcb00' }}
        onPress={() => sendData()}>
        <Text style={{ color: '#000' }}>Lanjutkan</Text>
      </Button>
    </Container>
  );
};

export default KonfirmasiPesananPesawat;
