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
import HeaderParent from '../../../Components/Header/parent/Header';
import HeaderDotted from '../Component/Header';
import Styles from './BuatPesanan.style';
import Rupiah from 'rupiah-format'

const BuatPesanan = props => {
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

  return (
    <Container>
      <HeaderParent menu="Akun" icon="arrow-back" {...props} />
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
                  <Col size={2}>
                    <Image
                      source={require('../../../Assets/Images/promo.png')}
                      style={{ width: 75, height: 75, borderRadius: 5 }}
                    />
                  </Col>
                  <Col size={6}>
                    <View style={{ marginLeft: 20 }}>
                      <Text style={{ fontSize: 12 }}>
                        {Room}
                      </Text>
                      <Text style={Styles.addressDate}>
                        {Address}
                      </Text>
                      <Text style={Styles.addressDate}>
                        25 - 30 Oktober 2019
                      </Text>
                    </View>
                  </Col>
                </Row>
                <Row>
                  <Card style={Styles.cardInside}>
                    <Grid>
                      <Col size={6}>
                        <Text style={{ fontSize: 12 }}>
                          Landy Rooms Superior Twin 10
                        </Text>
                        <Text style={{ fontSize: 12 }}>Max (x1)</Text>
                      </Col>
                      <Col size={3}>
                        <Text style={{ fontSize: 12 }}>{Rupiah.convert(Price)}</Text>
                      </Col>
                    </Grid>
                  </Card>
                </Row>
                <Row>
                  <Text style={Styles.dataTamu}>Data Tamu</Text>
                </Row>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate('DataTamu')}>
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
                            <Text>Isi data tamu</Text>
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
                onPress={() => props.navigation.navigate('KonfirmasiPesanan', {
                  id: RoomID,
                  room: Room,
                  address: Address,
                  price: Price
                })}>
                <Text style={{ color: '#000', fontSize: 12 }}>Lanjut</Text>
              </Button>
            </Col>
          </Row>
        </Grid>
      </View>
    </Container>
  );
};

export default BuatPesanan;
