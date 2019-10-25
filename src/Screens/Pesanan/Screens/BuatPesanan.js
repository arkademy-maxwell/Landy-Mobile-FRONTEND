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
} from 'native-base';
import {TouchableOpacity, Image} from 'react-native';
import Header from '../../../Components/Header/parent/Header';
const BuatPesanan = props => {
  return (
    <Container>
      <Header menu="Akun" icon="arrow-back" />
      <Header />
      <Content>
        <View style={{marginLeft: 20, marginRight: 35, marginBottom: 20}}>
          <Text style={{color: '#989794', marginTop: 20}}>
            INFORMASI KONTAK
          </Text>
          <Form>
            <Item picker style={{marginLeft: 10}}>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{width: undefined}}
                placeholder="Select your SIM"
                placeholderStyle={{color: '#bfc6ea'}}
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
        <View style={{backgroundColor: '#ecf0f1'}}>
          <View style={{marginLeft: 15, marginRight: 15, marginBottom: 20}}>
            <Text style={{color: '#7f8c8d', lineHeight: 35, fontSize: 13}}>
              Kamar
            </Text>
            <Card
              style={{
                padding: 10,
                elevation: 0,
                borderColor: '#ecf0f1',
              }}>
              <Grid>
                <Row>
                  <Col size={2}>
                    <Image
                      source={require('../../../Assets/Images/promo.png')}
                      style={{width: 75, height: 75, borderRadius: 5}}
                    />
                  </Col>
                  <Col size={6}>
                    <View style={{marginLeft: 20}}>
                      <Text style={{fontSize: 13, }}>Landy Rooms</Text>
                      <Text style={{fontSize: 13}}>
                        Landy Fatmawati Abdul Majid Raya 12 Jakarta
                      </Text>
                      <Text style={{fontSize: 13}}>
                        Jl. Abdul Majid Raya No. 12
                      </Text>
                    </View>
                  </Col>
                </Row>
                <Row>
                  <Card
                    style={{
                      elevation: 0,
                      padding: 5,
                      width: '100%',
                      marginTop: 10,
                    }}>
                    <Grid>
                      <Col size={5}>
                        <Text style={{fontSize: 12}}>
                          Landy Rooms Superior Twin 10
                        </Text>
                        <Text style={{fontSize: 12}}>Max (x1)</Text>
                      </Col>
                      <Col size={2}>
                        <Text style={{fontSize: 12}}>Rp.150000</Text>
                      </Col>
                    </Grid>
                  </Card>
                </Row>
                <Row>
                  <Text>Data Tamu</Text>
                </Row>
                <Row>
                  <Card
                    style={{
                      elevation: 0,
                      padding: 5,
                      width: '100%',
                      marginTop: 10,
                      borderColor: '#00aeef',
                      backgroundColor: '#d0f3ff',
                    }}>
                    <Grid>
                      <Row style={{alignItems: 'center'}}>
                        <Col size={5}>
                          <Text>Isi data tamu</Text>
                        </Col>
                        <Col size={2}>
                          <Icon
                            type="Ionicons"
                            name="md-arrow-forward"
                            style={{color: '#00aeef', alignSelf: 'flex-end'}}
                          />
                        </Col>
                      </Row>
                    </Grid>
                  </Card>
                </Row>
              </Grid>
            </Card>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 75,
            backgroundColor: '#fff',
            borderTopWidth: 1,
            borderColor: '#e9e9e9',
          }}>
          <Grid style={{marginLeft: 20, marginRight: 20}}>
            <Row style={{alignItems: 'center'}}>
              <Col size={5} style={{alignItems: 'flex-start'}}>
                <Text style={{fontSize: 12}}>Total Pembayaran</Text>
                <Text style={{fontSize: 15, color: '#427f01'}}>Rp.150000</Text>
              </Col>
              <Col size={2}>
                <Button
                  warning
                  style={{
                    borderRadius: 20,
                    elevation: 0,
                    marginTop: 10,
                    paddingLeft: 10,
                  }}
                  onPress={() =>
                    props.navigation.navigate('KonfirmasiPesanan')
                  }>
                  <Text style={{color: '#000'}}>Pilih</Text>
                </Button>
              </Col>
            </Row>
          </Grid>
        </View>
      </Content>
    </Container>
  );
};

export default BuatPesanan;
