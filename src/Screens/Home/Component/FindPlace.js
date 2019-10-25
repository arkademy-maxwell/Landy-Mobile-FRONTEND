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
import Styles from './FindPlace.style';
import LinearGradient from 'react-native-linear-gradient';

const FindPlace = props => {
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
                  <Text style={{color: '#fff', marginTop: 2}}>
                    Meninap Dimana?
                  </Text>
                </Col>
              </Row>
              <Row style={{alignItems: 'center'}}>
                <Col size={5}>
                  <Item regular style={Styles.InputFindPlace}>
                    <Input
                      placeholder="Ketik Region, Landmark"
                      placeholderTextColor="#000"
                      style={{fontSize: 13}}
                    />
                  </Item>
                </Col>
                {/* <Col size={1}>
                  <Icon
                    name="ios-close"
                    style={{marginLeft: 20, color: '#fff'}}
                  />
                </Col> */}
              </Row>
            </Grid>
          </View>
        </LinearGradient>

        <View>
          <TouchableOpacity>
            <Grid style={{marginLeft: 20, marginTop: 5}}>
              <Row style={{alignItems: 'center'}}>
                <Col size={1}>
                  <Icon type="Entypo" name="location" style={Styles.iconBox} />
                </Col>
                <Col
                  size={5}
                  style={{
                    borderBottomWidth: 1,
                    borderColor: '#ecf0f1',
                    paddingBottom: 15,
                  }}>
                  <Col>
                    <Text>Jakarta</Text>
                  </Col>
                  <Col>
                    <Text style={{color: '#b0b8b9', fontSize: 13}}>region</Text>
                  </Col>
                </Col>
              </Row>
            </Grid>
          </TouchableOpacity>
          <TouchableOpacity>
            <Grid style={{marginLeft: 20, marginTop: 5}}>
              <Row style={{alignItems: 'center'}}>
                <Col size={1}>
                  <Icon type="Entypo" name="location" style={Styles.iconBox} />
                </Col>
                <Col
                  size={5}
                  style={{
                    borderBottomWidth: 1,
                    borderColor: '#ecf0f1',
                    paddingBottom: 15,
                  }}>
                  <Col>
                    <Text>Jakarta</Text>
                  </Col>
                  <Col>
                    <Text style={{color: '#b0b8b9', fontSize: 13}}>region</Text>
                  </Col>
                </Col>
              </Row>
            </Grid>
          </TouchableOpacity>
        </View>
      </Content>
    </Container>
  );
};

export default FindPlace;
