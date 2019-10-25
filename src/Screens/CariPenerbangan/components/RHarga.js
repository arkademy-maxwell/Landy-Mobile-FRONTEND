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
} from 'native-base';
import {TouchableOpacity} from 'react-native';
import Header from './Header';
const RPenerbangan = props => {
  return (
    <>
      <View>
        <List>
          <ListItem>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 15}}>Lion Air</Text>
              <Text style={{fontSize: 15}}>(Dewasa)</Text>
              <Text style={{fontSize: 15}}>(x1)</Text>
            </View>
            <View style={{marginHorizontal: 120}}>
              <Left>
                <Text style={{fontSize: 15}}>Rp 5.000.000</Text>
              </Left>
            </View>
          </ListItem>
          <ListItem itemHeader>
            <View>
              <Text style={{fontSize: 15}}>Sub Total</Text>
              <Text style={{fontSize: 15, marginVertical: 30}}>Tax</Text>
            </View>
            <View style={{marginLeft: 200}}>
              <Left>
                <Text style={{fontSize: 15}}>Rp 5.000.000</Text>
                <Text style={{fontSize: 15, marginVertical: 30}}>Include</Text>
              </Left>
            </View>
          </ListItem>
          <ListItem>
            <View>
              <Text>Total</Text>
            </View>
            <View style={{marginLeft: 230}}>
              <Left>
                <Text style={{fontSize: 15}}>Rp 5.000.000</Text>
              </Left>
            </View>
          </ListItem>
        </List>
      </View>
    </>
  );
};
export default RPenerbangan;
