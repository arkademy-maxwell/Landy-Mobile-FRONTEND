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
import HeaderDotted from '../../Component/Header';
import Styles from './MetodePembayaran.style';
const MetodePembayaran = props => {
  return (
    <Container>
      <Header menu="Metode Pembayaran" icon="arrow-back" {...props} />
      <HeaderDotted />
      <Content style={{backgroundColor: '#ecf0f1'}}>
        <View>
          <Text
            style={{
              textAlign: 'center',
              paddingTop: 5,
              fontSize: 13,
              paddingBottom: 5,
              color: '#7f8c8d',
            }}>
            Sisa waktu: 1 jam 23 menit 11 detik
          </Text>
          <Card style={Styles.cardParent}>
            <Grid>
              <Col size={5}>
                <Row>
                  <Text style={Styles.title}>JUMLAH YANG AKAN DIBAYAR</Text>
                </Row>
                <Row>
                  <Text style={Styles.amount}>Rp.1500000</Text>
                </Row>
              </Col>
              <Col size={2} style={{color: '#00aeef', alignItems: 'flex-end'}}>
                {/* <TouchableOpacity onPress={()=> props.navigation.navigate('Konfir')}> */}
                <Text style={{color: '#00aeef', fontSize: 14}}>Pesanan</Text>
                {/* </TouchableOpacity> */}
              </Col>
            </Grid>
          </Card>
        </View>
        <View style={{marginLeft: 10, marginRight: 10, marginBottom: 20}}>
          <Text
            style={{
              fontSize: 13,
              marginTop: 10,
              marginBottom: 10,
              color: '#7f8c8d',
            }}>
            Pillih Metode Pembayaran
          </Text>
          <TouchableOpacity onPress={() => props.navigation.navigate('Bayar')}>
            <Card style={{padding: 15, borderRadius: 5}}>
              <Text>Alfamart</Text>
            </Card>
          </TouchableOpacity>
          <TouchableOpacity>
            <Card style={{padding: 15, borderRadius: 5}}>
              <Text>Indomart</Text>
            </Card>
          </TouchableOpacity>
        </View>

        <View>
          <Card style={Styles.wrapperChooseMethod}>
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
