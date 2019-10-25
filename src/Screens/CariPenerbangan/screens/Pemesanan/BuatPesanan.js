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
  Picker,
  Left,
  Body,
  Right,
} from 'native-base';
import { TouchableOpacity, Image, ScrollView } from 'react-native';
import HeaderParent from '../../../../Components/Header/parent/Header';
import HeaderDotted from '../../../Pesanan/Component/Header';
import Styles from './BuatPesanan.style';

import Rupiah from 'rupiah-format'

const BuatPesananPesawat = props => {
  const [Origin, setOrigin] = useState('')
  const [Destination, setDestination] = useState('')
  const [OriginCode, setOriginCode] = useState('')
  const [DestinationCode, setDestinationCode] = useState('')
  const [Price, setPrice] = useState('')
  const [Airlines, setAirlines] = useState('')
  const [FlightID, setFlightID] = useState('')

  const setParam = () => {
    setOrigin(props.navigation.getParam('origin'))
    setDestination(props.navigation.getParam('destination'))
    setOriginCode(props.navigation.getParam('origin_code'))
    setDestinationCode(props.navigation.getParam('destination_code'))
    setPrice(props.navigation.getParam('price'))
    setAirlines(props.navigation.getParam('airlines'))
    setFlightID(props.navigation.getParam('id'))
  }

  useEffect(() => {
    setParam()
  })
  return (
    <Container>
      <HeaderParent menu="Pemesanan Anda" icon="arrow-back" {...props} />
      <HeaderDotted a={props.active} />
      <Content>
        <View style={{ marginLeft: 20, marginRight: 35, marginBottom: 20 }}>
          <Text style={Styles.title}>INFORMASI KONTAK</Text>
          <Form>
            <Item picker style={{ marginLeft: 10 }}>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Select your SIM"
                placeholderStyle={{ color: '#bfc6ea' }}
                placeholderIconColor="#007aff"
              // selectedValue={this.state.selected2}
              // onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="Tuan" value="tuan" />
                <Picker.Item label="Nyonya" value="nyonya" />
                <Picker.Item label="Nona" value="nyonya" />
              </Picker>
            </Item>
            <Item floatingLabel>
              <Label>Nama Depan</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Nama Belakang</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input />
            </Item>
            <Grid>
              <Col>
                <Item floatingLabel>
                  <Label>+62</Label>
                </Item>
              </Col>
              <Col>
                <Item floatingLabel>
                  <Label>No. Handphone</Label>
                  <Input />
                </Item>
              </Col>
            </Grid>
            <Item floatingLabel>
              <Label>Alamat Email</Label>
              <Input />
            </Item>
          </Form>
        </View>
        <View style={{ backgroundColor: '#ecf0f1' }}>
          <View style={Styles.wrapDetailRoom}>
            <Text style={Styles.room}>Kamar</Text>
            <Card style={Styles.card}>
              <Grid>
                <Row>
                  <Col size={2}></Col>
                  <Col size={6}>
                    <View style={{ marginLeft: 20 }}>
                      <Text style={{ fontSize: 12 }}>{Origin} - {Destination}</Text>
                    </View>
                  </Col>
                </Row>
                <Row>
                  <Text style={Styles.addressDate}>25 - 30 Oktober 2019</Text>
                </Row>
                <Row>
                  <Card style={Styles.cardInside}>
                    <Grid>
                      <Col size={5}>
                        <Text style={{ fontSize: 12 }}>
                          {Airlines} (Dewasa) (x1)
                        </Text>
                      </Col>
                      <Col size={2}>
                        <Text style={{ fontSize: 12 }}>{Rupiah.convert(Price)}</Text>
                      </Col>
                    </Grid>
                  </Card>
                </Row>
                <Row>
                  <Text style={Styles.dataTamu}>Data Penumpang</Text>
                </Row>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate('DataPenumpang')}>
                  <Row>
                    <Card style={Styles.cardInsideTwo}>
                      <Grid>
                        <Row
                          style={{
                            alignItems: 'center',
                            marginLeft: 10,
                            marginRight: 10,
                          }}>
                          <Col size={5}>
                            <Text>1. Isi Data Dewasa</Text>
                          </Col>
                          <Col size={2}>
                            <Icon
                              type="Ionicons"
                              name="md-arrow-forward"
                              style={{ color: '#00aeef', alignSelf: 'flex-end' }}
                            />
                          </Col>
                        </Row>
                      </Grid>
                    </Card>
                  </Row>
                </TouchableOpacity>
              </Grid>
            </Card>
          </View>
        </View>
      </Content>
      <View style={Styles.wrapChoose}>
        <Grid style={{ marginLeft: 20, marginRight: 20 }}>
          <Row style={{ alignItems: 'center' }}>
            <Col size={5} style={{ alignItems: 'flex-start' }}>
              <Text style={{ fontSize: 12 }}>Total Pembayaran</Text>
              <Text style={{ fontSize: 15, color: '#427f01' }}>{Rupiah.convert(Price)}</Text>
            </Col>
            <Col size={2}>
              <Button
                warning
                style={Styles.buttonChoose}
                onPress={() =>
                  props.navigation.navigate('KonfirmasiPesananPesawat', {
                    id: FlightID,
                    airlines: Airlines,
                    origin: Origin,
                    destination: Destination,
                    origin_code: OriginCode,
                    destination_code: DestinationCode,
                    price: Price
                  })
                }>
                <Text style={{ color: '#000', fontSize: 12 }}>Lanjut</Text>
              </Button>
            </Col>
          </Row>
        </Grid>
      </View>
    </Container>
  );
};

export default BuatPesananPesawat;
