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
import HeaderDotted from '../../Component/Header';

import Rupiah from 'rupiah-format'
import Axios from 'axios'
import { API_BASEURL } from 'react-native-dotenv'

const KonfirmasiPesanan = props => {
  const [Room, setRoom] = useState('');
  const [Address, setAddress] = useState('');
  const [Price, setPrice] = useState('');
  const [RoomID, setRoomID] = useState('');

  const setParam = () => {
    setRoomID(props.navigation.getParam('id'))
    setRoom(props.navigation.getParam('room'))
    setAddress(props.navigation.getParam('address'))
    setPrice(props.navigation.getParam('price'))
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
      `${API_BASEURL}/api/v1/roomTransaction`,
      createForm({
        room_id: RoomID,
        durations: 1,
        users_id: 1,
        transaction_id: 1
      }),
      {
        headers: {
          'Content-Type': 'multipart/formdata',
        },
      },
    )
      .then(res => {
        props.navigation.navigate('MetodePembayaran', {
          price: Price
        });
      })
      .catch(error => {
        console.log(email);
        ToastAndroid.show('Register Failed!', ToastAndroid.LONG);
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
              <Row>
                <Col size={2}>
                  <Image
                    source={require('../../../../Assets/Images/promo.png')}
                    style={{ width: 75, height: 75, borderRadius: 5 }}
                  />
                </Col>
                <Col size={6}>
                  <View style={{ marginLeft: 20 }}>
                    <Text style={{ fontSize: 13 }}>{Room}</Text>
                    <Text style={{ fontSize: 13, color: '#7f8c8d' }}>
                      {Address}
                    </Text>
                    <Text style={{ fontSize: 13, color: '#7f8c8d' }}>
                      25 - 30 Oktober 2019
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

export default KonfirmasiPesanan;
