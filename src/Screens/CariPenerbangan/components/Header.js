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
  Text,
  View,
  List,
  ListItem,
} from 'native-base';
import Style from './Header.style';
const Headers = props => {
  return (
    <>
      <Header style={Style.Header}>
        <Left>
          <Button transparent onPress={() => props.navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title style={{fontSize: 18}}>Penerbangan Pergi</Title>
          <Text style={{color: 'white', fontSize: 11}}>
            26 Okt 2019, 1 Orang
          </Text>
        </Body>
        <Right>
          <Button
            transparent
            onPress={() => props.navigation.navigate('Promo')}>
            <Icon
              type="MaterialCommunityIcons"
              name="ticket"
              style={{color: '#fdcf1b'}}
            />
          </Button>
        </Right>
      </Header>
      <View>
        <List>
          <ListItem itemDivider style={{backgroundColor: '#0185EF'}}>
            <Body style={Style.borderWith}>
              <View style={{flexDirection: 'row', marginHorizontal: 50}}>
                <Text style={{color: 'white', marginRight: 10}}>Jakarta</Text>
                <View style={{marginVertical: -2}}>
                  <Icon
                    name="ios-arrow-round-forward"
                    style={{color: 'white'}}
                  />
                </View>
                <Text style={{color: 'white', marginHorizontal: 10}}>Bali</Text>
              </View>
            </Body>
            <Right>
              <View
                style={{size: 40, marginHorizontal: 5, marginVertical: -18}}>
                <Icon
                  type="MaterialCommunityIcons"
                  name="airplane-takeoff"
                  style={{color: 'white'}}
                />
              </View>
            </Right>
          </ListItem>
        </List>
      </View>
    </>
  );
};

export default Headers;
