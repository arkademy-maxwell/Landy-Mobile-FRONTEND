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

const FindPlace = props => {
  return (
    <Container>
      <Content>
        <View style={Styles.header}>
          <Grid style={Styles.HeaderView}>
            <Row>
              <Col size={1}>
                <Icon name="ios-close" style={{color: '#fff'}} />
              </Col>
              <Col size={5}>
                <Text style={{color: '#fff', marginTop: 2}}>
                  Menginap Dimana
                </Text>
              </Col>
            </Row>
            <Row>
              <Col size={5}>
                <Item regular style={Styles.InputFindPlace}>
                  <Input
                    placeholder="Ketik Region, Landmark"
                    placeholderTextColor="#000"
                  />
                </Item>
              </Col>
              <Col size={1}>
                <Icon
                  name="ios-close"
                  style={{marginLeft: 20, color: '#fff'}}
                />
              </Col>
            </Row>
          </Grid>
        </View>

        <View>
          <Grid style={{marginLeft: 20, marginTop: 5}}>
            <Col size={1}>
              <Text>Icon</Text>
            </Col>
            <Col
              size={5}
              style={{
                borderBottomWidth: 1,
                borderColor: '#b0b8b9',
                paddingBottom: 15,
              }}>
              <Col>
                <Text>Jakarta</Text>
              </Col>
              <Col>
                <Text style={{color: '#b0b8b9', fontSize: 13}}>region</Text>
              </Col>
            </Col>
          </Grid>
        </View>
      </Content>
    </Container>
  );
};

export default FindPlace;
