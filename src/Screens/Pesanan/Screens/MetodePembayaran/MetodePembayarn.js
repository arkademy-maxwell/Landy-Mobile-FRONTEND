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
const MetodePembayaran = props => {
  return (
    <Container>
      <Header menu="Metode Pembayaran" icon="arrow-back" />
      <Header />
      <Content style={{backgroundColor: '#ecf0f1'}}>
        <View>
          <Card
            style={{
              padding: 10,
              elevation: 0,
              marginTop: 30,
              borderColor: 'white',
              borderBottomColor: '#e9e9e9',
            }}>
            <Grid>
              <Col size={5}>
                <Row>
                  <Text style={{fontSize: 15, color: '#7f8c8d'}}>
                    JUMLAH YANG AKAN DIBAYAR
                  </Text>
                </Row>
                <Row>
                  <Text style={{color: '#427f01'}}>Rp.1500000</Text>
                </Row>
              </Col>
              <Col size={2} style={{color: '#00aeef', alignItems: 'flex-end'}}>
                {/* <TouchableOpacity onPress={()=> props.navigation.navigate('Konfir')}> */}
                <Text style={{color: '#00aeef'}}>Pesanan</Text>
                {/* </TouchableOpacity> */}
              </Col>
            </Grid>
          </Card>
        </View>
        <View style={{marginLeft: 10, marginRight: 10, marginBottom: 20}}>
          <Text style={{fontSize: 13, marginTop: 10, marginBottom: 10}}>
            Pillih Metode Pembayaran
          </Text>
          <TouchableOpacity>
            <Card style={{padding: 15, borderRadius: 5}}>
              <Text>ALfamart</Text>
            </Card>
          </TouchableOpacity>
          <TouchableOpacity>
            <Card style={{padding: 15, borderRadius: 5}}>
              <Text>Indomart</Text>
            </Card>
          </TouchableOpacity>
        </View>

        <View>
          <Card
            style={{
              padding: 10,
              elevation: 0,
              marginTop: 120,
              borderColor: 'white',
              borderBottomColor: '#e9e9e9',
              bottom: 0,
            }}>
            <Grid>
              <Row>
                <Text style={{fontSize: 15, color: '#7f8c8d'}}>
                  Pembatalan Transaksi
                </Text>
              </Row>
              <Row>
                <Text style={{fontSize: 10, color: '#7f8c8d'}}>
                  Pembatalan ini berlaku untuk seluruh produk yang ada di dalam
                  transaksi ini
                </Text>
              </Row>
              <Row
                style={{
                  borderTopWidth: 1,
                  borderColor: '#e9e9e9',
                  marginTop: 20,
                  paddingTop: 10,
                }}>
                <Col size={1}>
                  <Icon
                    type="AntDesign"
                    name="close"
                    style={{fontSize: 15, color: '#ff5722'}}
                  />
                </Col>
                <Col size={10}>
                  <TouchableOpacity>
                    <Text style={{fontSize: 15, color: '#ff5722'}}>
                      BATALKAN TRANSAKSI
                    </Text>
                  </TouchableOpacity>
                </Col>
              </Row>
            </Grid>
          </Card>
        </View>
      </Content>
    </Container>
  );
};

export default MetodePembayaran;
