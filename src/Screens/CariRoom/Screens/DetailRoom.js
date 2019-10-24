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
              <Icon active name="logo-googleplus" />
              <Text>Google Plus</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
          </Card>
        </View>
      </Content>
    </Container>
  );
};
export default DetailRoom;
