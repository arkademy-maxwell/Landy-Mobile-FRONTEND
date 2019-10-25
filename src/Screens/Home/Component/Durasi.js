import React, {Component} from 'react';
import {Image, ScrollView, TouchableOpacity} from 'react-native';
import {
  Container,
  Content,
  Card,
  Button,
  Segment,
  Text,
  View,
  CardItem,
  Thumbnail,
  Header,
  Item,
  Input,
  Icon,
  Body,
  Title,
  Left,
  Right,
  Grid,
  Col,
  Row,
} from 'native-base';
// import promo from '../../../Assets/Images/promo.png'
import Styles from './Durasi.style';
import LinearGradient from 'react-native-linear-gradient';

const Durasi = props => {
  return (
    <Container>
      <Content>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#017ff0', '#00aeef']}>
          <View style={Styles.header}>
            <Grid style={Styles.HeaderView}>
              <Row style={{alignItems: 'center'}}>
                <Col size={1}>
                  <Icon name="ios-close" style={Styles.close} />
                </Col>
                <Col size={5}>
                  <Text style={Styles.berapaMalam}>Berapa Malam?</Text>
                </Col>
              </Row>
            </Grid>
          </View>
        </LinearGradient>
        <View style={{padding: 10}}>
          <TouchableOpacity>
            <Grid>
              <Row style={Styles.row}>
                <Col size={4}>
                  <Text style={Styles.malam}>1 Malam</Text>
                </Col>
                <Col size={4}>
                  <Text style={Styles.date}>Check-out 27 Oktober 2019</Text>
                </Col>
                <Col size={1}>
                  <Icon
                    type="AntDesign"
                    name="check"
                    style={Styles.iconCheck}
                  />
                </Col>
              </Row>
            </Grid>
          </TouchableOpacity>
          <TouchableOpacity>
            <Grid>
              <Row style={{alignItems: 'center'}}>
                <Col size={4}>
                  <Text style={Styles.malam}>1 Malam</Text>
                </Col>
                <Col size={4}>
                  <Text style={Styles.date}>Check-out 27 Oktober 2019</Text>
                </Col>
                <Col size={1}></Col>
              </Row>
            </Grid>
          </TouchableOpacity>
        </View>
      </Content>
    </Container>
  );
};

export default Durasi;
