import React, {Component} from 'react';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
} from 'native-base';
import Style from './Header.style';
const Headers = props => {
  return (
    <Header style={Style.Header}>
      <Left>
        <Button transparent onPress={() => props.navigation.goBack()}>
          <Icon name="arrow-back" />
        </Button>
      </Left>
      <Body>
        <Title>Locations</Title>
      </Body>
      <Right>
        <Button transparent>
          <Icon type="Ionicons" name="ios-search" />
        </Button>
      </Right>
    </Header>
  );
};

export default Headers;
