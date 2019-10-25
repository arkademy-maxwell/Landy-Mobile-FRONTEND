import React, {useState, useEffect} from 'react';
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
  Icon,
  Grid,
  Col,
  Row,
  CardItem,
  CheckBox,
} from 'native-base';
import {
  ScrollView,
  ImageBackground,
  Image,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native';
import Header from '../Components/Header';
import Styles from './DetailRoom.style';
import LinearGradient from 'react-native-linear-gradient';
// import {prependOnceListener} from 'cluster';
// import Icon from 'react-native-vector-icons/Ionicons';

import Axios from 'axios';
import {API_BASEURL} from 'react-native-dotenv';

const DetailRoom = props => {
  const [Room, setRoom] = useState('');
  const [Address, setAddress] = useState('');
  const [Description, setDescription] = useState('');
  const [Price, setPrice] = useState('');
  const [RoomID, setRoomID] = useState('');

  const getRoom = () => {
    setRoomID(props.navigation.getParam('id'));
    Axios.get(`${API_BASEURL}/api/v1/rooms/${RoomID}`)
      .then(result => {
        setRoom(result.data.data[0].room);
        setAddress(result.data.data[0].address);
        setDescription(result.data.data[0].description);
        setPrice(result.data.data[0].price);
      })
      .catch(error => {
        console.log(error);
        ToastAndroid.show('Cannot Get Data', ToastAndroid.LONG);
      });
  };

  useEffect(() => {
    getRoom();
  }, [Room, Address, Description, Price]);

  return (
    <Container style={Styles.body}>
      <Content>
        <View style={{height: 232}}>
          <View style={Styles.linearGradient}>
            <Grid>
              <Col>
                <Icon
                  type="Ionicons"
                  name="md-arrow-back"
                  style={{color: '#fff'}}
                />
              </Col>
              <Col>
                <Icon
                  type="EvilIcons"
                  name="share-google"
                  style={Styles.iconShare}
                />
              </Col>
            </Grid>
          </View>
          <ImageBackground
            source={require('../../../Assets/Images/promo.png')}
            style={Styles.mainImage}
          />
        </View>
        <Grid>
          <Col style={Styles.imagePadding}>
            <Image
              source={require('../../../Assets/Images/promo.png')}
              style={Styles.subImage}
            />
          </Col>
          <Col style={Styles.imagePadding}>
            <Image
              source={require('../../../Assets/Images/promo.png')}
              style={Styles.subImage}
            />
          </Col>
          <Col style={Styles.imagePadding}>
            <Image
              source={require('../../../Assets/Images/promo.png')}
              style={Styles.subImage}
            />
            <View style={Styles.otherImage}>
              <Text style={Styles.textOtherImage}>+12 Foto</Text>
              <Text
                style={{
                  textAlign: 'center',
                  zIndex: 999999,
                  color: '#fff',
                }}>
                Lainnya
              </Text>
            </View>
          </Col>
        </Grid>

        <View style={{margin: 5}}>
          <Card style={Styles.card}>
            <CardItem>
              <Grid style={{marginLeft: 10}}>
                <Col size={2}>
                  <View style={Styles.map}></View>
                  <TouchableOpacity
                    onPress={() =>
                      Linking.openURL(
                        'https://www.google.com/maps/search/bundaran+hi/@-6.1939337,106.8199394,17z',
                      )
                    }>
                    <Text
                      style={{
                        color: '#00aeef',
                        fontSize: 13,
                        textAlign: 'center',
                      }}>
                      Lihat Peta
                    </Text>
                  </TouchableOpacity>
                </Col>
                <Col size={6}>
                  <View style={{marginLeft: 20}}>
                    <Text style={Styles.labelLandyRooms}>Landy Rooms</Text>
                    <Text style={Styles.titleRoom}>{Room}</Text>
                    <Text style={Styles.subTitleRoom}>{Address}</Text>
                  </View>
                </Col>
              </Grid>
            </CardItem>
            <CardItem style={Styles.cardBorder} />
            <CardItem>
              <Grid>
                <Row style={{marginBottom: 20}}>
                  <Text style={{color: '#7f8c8d', fontSize: 12}}>
                    STANDARD KENYAMANAN
                  </Text>
                </Row>
                <Row>
                  <Col>
                    <View style={{width: '100%'}}>
                      <Icon
                        type="AntDesign"
                        name="wifi"
                        style={Styles.iconColor}
                      />
                      <Text style={Styles.titleIconFacility}>Wifi Gratis</Text>
                    </View>
                  </Col>
                  <Col>
                    <View style={{width: '100%'}}>
                      <Icon type="Entypo" name="tv" style={Styles.iconColor} />
                      <Text style={Styles.titleIconFacility}>
                        TV Layar Datar
                      </Text>
                    </View>
                  </Col>
                  <Col>
                    <View style={{width: '100%'}}>
                      <Icon
                        type="FontAwesome"
                        name="shower"
                        style={Styles.iconColor}
                      />
                      <Text style={Styles.titleIconFacility}>Hot Shower</Text>
                    </View>
                  </Col>
                  <Col>
                    <View style={{width: '100%'}}>
                      <Icon type="Entypo" name="air" style={Styles.iconColor} />
                      <Text style={Styles.titleIconFacility}>AC</Text>
                    </View>
                  </Col>
                  <Col>
                    <View style={{width: '100%'}}>
                      <Icon
                        type="FontAwesome"
                        name="bed"
                        style={Styles.iconColor}
                      />
                      <Text style={Styles.titleIconFacility}>
                        Tempat Tidur Bersih
                      </Text>
                    </View>
                  </Col>
                </Row>
              </Grid>
            </CardItem>
          </Card>
          <Card style={Styles.cardTwo}>
            <View>
              <ImageBackground
                source={require('../../../Assets/Images/promo.png')}
                style={Styles.cardTwoImage}
              />
            </View>
            <View style={Styles.cardTwoImageShadow}>
              <View style={Styles.wrapperTextTwo}>
                <Text style={Styles.textTwoCard}>
                  Pelayanannya ramah fasilitasnya baik.
                </Text>
                <Text style={Styles.textTwoCard}>.14 Mei 2019</Text>
              </View>
            </View>
          </Card>

          <Card style={Styles.cardTwo}>
            <Grid style={{padding: 15}}>
              <Text style={{fontSize: 15, color: '#7f8c8d', marginBottom: 5}}>
                INFORMASI PENTING
              </Text>
              <Row>
                {/* <Col size={1}>
                  <View
                    style={{
                      width: 5,
                      height: 5,
                      borderRadius: 50,
                      backgroundColor: '#00aeef',
                    }}></View>
                </Col> */}
                <Col size={15}>
                  <Text style={{fontSize: 12}}>{Description}</Text>
                </Col>
              </Row>
            </Grid>
          </Card>
          <Card style={Styles.cardFour}>
            <Grid style={{padding: 15}}>
              <Row>
                <Text
                  style={{fontSize: 15, color: '#7f8c8d', marginBottom: 20}}>
                  KETERSEDIAAN KAMAR
                </Text>
              </Row>
              <Row>
                <Col style={Styles.checkin}>
                  <Row>
                    <Text style={Styles.ketKamarTitle}>Check-in</Text>
                  </Row>
                  <Row>
                    <Text>24 Okt 2019</Text>
                    <View style={Styles.ketKamarRounded}></View>
                  </Row>
                </Col>
                <Col style={Styles.durasi}>
                  <Row>
                    <Text style={Styles.ketKamarTitle}>Durasi Menginap</Text>
                  </Row>
                  <Row>
                    <Text>10 Malam</Text>
                    <View style={Styles.ketKamarRounded}></View>
                  </Row>
                </Col>
              </Row>
            </Grid>
            <Grid>
              <Col>
                <ListItem style={{borderColor: '#fff'}}>
                  <Body>
                    <Text style={{textAlign: 'center', fontSize: 13}}>
                      Tampilkan Harga 10 Malam
                    </Text>
                  </Body>
                  <CheckBox style={{borderColor: '#7f8c8d', borderRadius: 2}} />
                </ListItem>
              </Col>
            </Grid>
            <CardItem style={{borderTopWidth: 1, borderColor: '#ecf0f1'}}>
              <Grid>
                <Row>
                  <Text
                    style={{
                      fontSize: 13,
                      color: '#00aeef',
                      textDecorationLine: 'underline',
                    }}>
                    Landy Rooms Superior Twin
                  </Text>
                </Row>
                <Row>
                  <Col>
                    <Row style={{alignItems: 'center', marginTop: 15}}>
                      <Col size={1}>
                        <Icon
                          type="MaterialIcons"
                          name="free-breakfast"
                          style={{fontSize: 15, color: '#6e9d3c'}}
                        />
                      </Col>
                      <Col size={6}>
                        <Text style={{fontSize: 13, color: '#6e9d3c'}}>
                          Sarapan Gratis
                        </Text>
                      </Col>
                    </Row>
                    <Row style={{alignItems: 'center', marginTop: 15}}>
                      <Col size={1}>
                        <Icon
                          type="Zocial"
                          name="guest"
                          style={{fontSize: 15}}
                        />
                      </Col>
                      <Col size={6}>
                        <Text style={{fontSize: 13}}>2 Tamu / kamar</Text>
                      </Col>
                    </Row>
                    <Row style={{alignItems: 'center', marginTop: 15}}>
                      <Col size={1}>
                        <Icon
                          type="Ionicons"
                          name="ios-bed"
                          style={{fontSize: 15}}
                        />
                      </Col>
                      <Col size={6}>
                        <Text style={{fontSize: 13}}>Twin</Text>
                      </Col>
                    </Row>
                    <Row style={{alignItems: 'center', marginTop: 15}}>
                      <Col size={1}>
                        <Icon
                          type="Entypo"
                          name="lock"
                          style={{fontSize: 15}}
                        />
                      </Col>
                      <Col size={6}>
                        <Text style={{fontSize: 13}}>
                          Tidak dapat dibatalkan
                        </Text>
                      </Col>
                    </Row>
                  </Col>
                  <Col style={{alignItems: 'center'}}>
                    <Text style={{fontSize: 13}}>Harga Per Malam</Text>
                    {/* <Text
                      style={{
                        fontSize: 13,
                        textDecorationLine: 'line-through',
                      }}>
                      Rp476.480
                    </Text> */}
                    <Text style={{fontSize: 17, color: '#6e9d3c'}}>
                      {Price}
                    </Text>
                    <Button
                      warning
                      style={{
                        borderRadius: 20,
                        elevation: 0,
                        marginTop: 10,
                        paddingLeft: 10,
                        paddingRight: 10,
                        backgroundColor: '#ffcb00',
                      }}
                      onPress={() => props.navigation.navigate('BuatPesanan')}>
                      <Text style={{color: '#000'}}>Pilih</Text>
                    </Button>
                  </Col>
                </Row>
              </Grid>
            </CardItem>
          </Card>
        </View>
      </Content>
      <View style={Styles.wrapChoose}>
        <Grid style={{marginLeft: 20, marginRight: 20}}>
          <Row style={{alignItems: 'center'}}>
            <Col size={3} style={{alignItems: 'flex-start'}}>
              <Text style={{fontSize: 12}}>Pesan kamar mulai dari</Text>
              <Text style={{fontSize: 15, color: '#427f01'}}>Rp.150000</Text>
              <Text style={{fontSize: 13, color: '#97a1a2'}}>
                (Harga nett per malam)
              </Text>
            </Col>
            <Col size={2}>
              <Button
                warning
                style={Styles.buttonChoose}
                onPress={() => props.navigation.navigate('KonfirmasiPesanan')}>
                <Text style={{color: '#000'}}>Pilih Kamar</Text>
              </Button>
            </Col>
          </Row>
        </Grid>
      </View>
    </Container>
  );
};
export default DetailRoom;
