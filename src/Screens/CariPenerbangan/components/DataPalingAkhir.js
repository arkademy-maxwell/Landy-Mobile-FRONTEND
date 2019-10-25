import React, { useState, useEffect } from 'react';
import {
  Container,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button,
  View,
  Card,
  Grid,
  Row,
  Col,
} from 'native-base';
import { TouchableOpacity } from 'react-native';
import Header from './Header';
import Style from '../screens/Termurah.style';
import Icon from 'react-native-vector-icons/Ionicons';

import Axios from 'axios';
import { API_BASEURL } from 'react-native-dotenv';
import Rupiah from 'rupiah-format'

const DataPalingAkhir = props => {
  const [Data, setData] = useState([])

  const getFlight = () => {
    Axios.get(`${API_BASEURL}/api/v1/flightRoutes?sort=id&sortBy=desc`)
      .then(result => {
        setData(result.data.data)
      })
      .catch(error => {
        console.log(error);
        ToastAndroid.show('Cannot Get Data', ToastAndroid.LONG)
      })
  }

  useEffect(() => {
    getFlight()
  }, [])

  return (
    <Container>
      <Content>
        {Data.map(item => {
          return (
            <Card style={Style.marginBottom}>
              <ListItem thumbnail>
                <Grid>
                  <Row style={{ alignItems: 'center' }}>
                    <Col>
                      <Left>
                        <View style={{ marginBottom: 10, marginTop: 10 }}>
                          <Text style={{ marginBottom: 10 }}>{item.airlines}</Text>
                          <View style={{ flexDirection: 'row' }}>
                            <Icon
                              type="Ionicons"
                              name="ios-radio-button-on"
                              size={15}
                              style={{ color: '#0185EF' }}
                            />
                            <Text
                              style={{
                                fontSize: 14,
                                marginHorizontal: 10,
                                marginVertical: -3,
                              }}>
                              20:45 </Text>
                            <Text style={{ fontSize: 14, marginVertical: -3 }}>{item.origin_code}</Text>
                          </View>
                          <View style={{ margin: 10 }}>
                            <Text style={{ fontSize: 10 }}>1 jam 50 menit (langsung)</Text>
                          </View>
                          <View style={{ flexDirection: 'row' }}>
                            <Icon
                              type="Ionicons"
                              name="ios-radio-button-on"
                              size={15}
                              style={{ color: '#0185EF' }}
                            />
                            <Text
                              style={{
                                fontSize: 14,
                                marginHorizontal: 10,
                                marginVertical: -3,
                              }}>
                              20:45</Text>
                            <Text style={{ fontSize: 14, marginVertical: -3 }}>{item.destination_code}</Text>
                          </View>
                          <View style={{ margin: 5, marginTop: 10 }}>
                            <Text style={{ fontSize: 10 }}>Tidak tersedia bagasi</Text>
                          </View>
                        </View>
                      </Left>
                    </Col>
                    <Col>
                      <View>
                        < Right style={Style.borderWith} >
                          <Text style={Style.textList}>Harga per orang</Text>
                          <Button
                            style={Style.buttonPrice}
                            onPress={() => props.navigate('BuatPesananPesawat')}>
                            <Text style={{ color: '#454643' }}>{Rupiah.convert(item.price)}</Text>
                          </Button>
                          <View style={{ marginHorizontal: 20, marginTop: 10 }}>
                            <Text
                              style={{ fontSize: 10, color: '#0185EF', marginTop: 15 }}
                              onPress={() => props.navigate('DetailPenerbangan')}>
                              LIHAT DETAIL </Text>
                          </View>
                        </Right>
                      </View>
                    </Col>
                  </Row>
                </Grid>
              </ListItem>
            </Card >
          )
        })}
      </Content >
    </Container >
  );
};
export default DataPalingAkhir;
