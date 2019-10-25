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
  Picker,
  Left,
  Body,
  Right,
} from 'native-base';
import {TouchableOpacity, Image, ScrollView} from 'react-native';
import HeaderParent from '../../../../Components/Header/parent/Header';
import HeaderDotted from '../../Component/Header';
import Styles from './bayar.style';
const BuatPesanan = props => {
  return (
    <Container>
      <HeaderParent menu="Alfamart" icon="arrow-back" {...props} />
      <HeaderDotted />
      <Content style={{backgroundColor: '#ecf0f1'}}>
        <View style={Styles.wrapper}>
          <Text style={Styles.titleOne}>Pembayaran Anda</Text>
          <Card style={Styles.card}>
            <Grid>
              <Col size={6}>
                <Text>Alfamart</Text>
              </Col>
              <Col size={2}>
                <Image
                  source={require('../../../../../public/Bayar/alfamart.png')}
                  style={Styles.paymentImage}
                />
              </Col>
              <Col size={1}>
                <TouchableOpacity>
                  <Text style={Styles.ubah}>UBAH</Text>
                </TouchableOpacity>
              </Col>
            </Grid>
          </Card>
          <View style={{marginTop: 20}}>
            <Text style={Styles.titleOne}>Airy</Text>
            <Card style={Styles.card}>
              <Grid>
                <Row>
                  <Col size={1}>
                    <Icon
                      type="FontAwesome"
                      name="building"
                      style={Styles.icon}
                    />
                  </Col>
                  <Col size={11}>
                    <Text style={Styles.nameRooms}>
                      Landy Ancol Kemayoran RE Martadinata 12 Jakarta
                    </Text>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Text style={Styles.address}>
                      Jl. R E Martadinata No.12 P-Q
                    </Text>
                    <Text style={Styles.address}>
                      25 Okt - 30 Okt (5 Malam)
                    </Text>
                  </Col>
                </Row>
                <Row style={Styles.borderTop}>
                  <Col size={5}>
                    <Text style={Styles.ketetrangan}>
                      Landy Rooms Superior Twin 5
                    </Text>
                    <Text style={Styles.ketetrangan}>Malam (x1)</Text>
                  </Col>
                  <Col size={2}>
                    <Text style={Styles.ketetrangan}>Rp.15000000</Text>
                  </Col>
                </Row>
                <Row style={Styles.borderTop}>
                  <Col size={5}>
                    <Text style={Styles.gunakanKupon}>GUNAKAN KUPON</Text>
                  </Col>
                  <Col size={2}>
                    <Icon
                      type="Ionicons"
                      name="md-arrow-forward"
                      style={Styles.iconForward}
                    />
                  </Col>
                </Row>
                <Row style={Styles.borderTop}>
                  <Col size={5}>
                    <Text style={Styles.subtotal}>Subtotal</Text>
                  </Col>
                  <Col size={2}>
                    <Text style={Styles.subtotal}>Rp15000000</Text>
                  </Col>
                </Row>
              </Grid>
            </Card>
          </View>
          <View style={{marginTop: 10}}>
            <Text style={Styles.titleOne}>Pembayaran Anda</Text>
            <Card style={Styles.card}>
              <Grid>
                <Row>
                  <Col>
                    <Text style={Styles.titelAmount}>Total transaksi</Text>
                  </Col>
                  <Col>
                    <Text style={Styles.amountRight}>Rp15000000</Text>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Text style={Styles.titelAmount}>Biaya layanan</Text>
                  </Col>
                  <Col>
                    <Text style={Styles.amountRight}>Gratis</Text>
                  </Col>
                </Row>
                <Row style={Styles.borderTop}>
                  <Col size={5}>
                    <Text style={Styles.subtotal}>Subtotal</Text>
                  </Col>
                  <Col size={2}>
                    <Text
                      style={{
                        fontSize: 13,
                        fontWeight: 'bold',
                        alignSelf: 'flex-end',
                      }}>
                      Rp15000000
                    </Text>
                  </Col>
                </Row>
              </Grid>
            </Card>
          </View>
          <Text style={Styles.syaratKetentuan}>
            Dengan melanjutkan pembayaran, maka anda telah menyetujui Syarat &
            ketentuan serta Kebijakan Privasi yang berlaku
          </Text>
        </View>
      </Content>
      <Button full style={{backgroundColor: '#ffcb00'}}>
        <Text style={{color: '#000'}}>Bayar Melalui Indomaret</Text>
      </Button>
    </Container>
  );
};

export default BuatPesanan;
