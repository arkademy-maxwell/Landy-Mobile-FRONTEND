import React, {Component} from 'react';
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
} from 'native-base';
import {ScrollView, ImageBackground, Image} from 'react-native';
import Header from '../Components/Header';
import Styles from './DetailRoom.style';
import LinearGradient from 'react-native-linear-gradient';
// import Icon from 'react-native-vector-icons/Ionicons';
const DetailRoom = props => {
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
                  <Text
                    style={{
                      color: '#00aeef',
                      fontSize: 13,
                      textAlign: 'center',
                    }}>
                    Lihat Peta
                  </Text>
                </Col>
                <Col size={6}>
                  <View style={{marginLeft: 20}}>
                    <Text style={Styles.labelLandyRooms}>Landy Rooms</Text>
                    <Text style={Styles.titleRoom}>
                      Landy Fatmawati Abdul Majid Raya 12 Jakarta
                    </Text>
                    <Text style={Styles.subTitleRoom}>
                      Jl. Abdul Majid Raya No. 12
                    </Text>
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
                        tempat Tidur Bersih
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
              <Row>
                <Text style={{fontSize: 15, color: '#7f8c8d'}}>
                  INFORMASI PENTING
                </Text>
              </Row>
              <Row>
                <Col size={1}>
                  <View
                    style={{
                      width: 5,
                      height: 5,
                      borderRadius: 50,
                      backgroundColor: '#00aeef',
                    }}></View>
                </Col>
                <Col size={15}>
                  <Text style={{fontSize: 12}}>
                    Jam check-in mulai pukul 14.00, dan check-out sebelum pukul
                    12.00
                  </Text>
                </Col>
              </Row>
              <Row>
                <Col size={1}>
                  <View
                    style={{
                      width: 5,
                      height: 5,
                      borderRadius: 50,
                      backgroundColor: '#00aeef',
                    }}></View>
                </Col>
                <Col size={15}>
                  <Text style={{fontSize: 12}}>
                    Pihak hotet mungkin akan meminta deposit untuk menutupi
                    pembayaran tak terduga
                  </Text>
                </Col>
              </Row>
            </Grid>
          </Card>
          <Card style={Styles.cardTwo}>
            <Grid style={{padding: 15}}>
              <Row>
                <Text style={{fontSize: 15, color: '#7f8c8d'}}>
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
          </Card>
        </View>
      </Content>
    </Container>
  );
};
export default DetailRoom;
