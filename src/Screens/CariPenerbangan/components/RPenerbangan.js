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
import Style from '../screens/Termurah.style';
import Icon from 'react-native-vector-icons/Ionicons';
const RPenerbangan = props => {
  return (
    <>
      <View>
        <View style={{backgroundColor: '#bdc3c7'}}>
          <Text style={{fontSize: 14}}>Penerbangan</Text>
        </View>
        {/* <TouchableOpacity
            onPress={() => props.navigation.navigate('DetailRoom')}> */}
        <Card style={Style.marginBottom}>
          <ListItem thumbnail>
            <Left>
              <View style={{marginBottom: 10, marginTop: 10}}>
                <Text style={{marginBottom: 5}}>Lion Air</Text>
                <Text style={{marginBottom: 20, fontSize: 9}}>
                  Bagasi 20 kg
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <Icon
                    type="Ionicons"
                    name="ios-radio-button-on"
                    size={15}
                    style={{color: '#0185EF'}}
                  />
                  <Text
                    style={{
                      fontSize: 14,
                      marginHorizontal: 10,
                      marginVertical: -3,
                    }}>
                    Sab 26 Okt,19:30 HLP Jakarta
                  </Text>
                </View>
                <View style={{margin: 10}}>
                  <Text style={{fontSize: 12, marginHorizontal: 15}}>
                    Halim Perdanakusuma International Airport
                  </Text>
                  <View
                    style={{
                      alignItems: 'center',
                      marginLeft: -110,
                      marginTop: 5,
                    }}>
                    <Card style={{backgroundColor: '#bdc3c7'}}>
                      <Text style={{fontSize: 12}}>Durasi: 1 jam 30 menit</Text>
                    </Card>
                  </View>
                </View>
                <View style={{flexDirection: 'row', marginTop: 20}}>
                  <Icon
                    type="Ionicons"
                    name="ios-radio-button-on"
                    size={15}
                    style={{color: '#0185EF'}}
                  />
                  <Text
                    style={{
                      fontSize: 14,
                      marginHorizontal: 10,
                      marginVertical: -3,
                    }}>
                    Sab 26 Okt,19:30 HLP Jakarta
                  </Text>
                </View>
                <View style={{margin: 10}}>
                  <Text style={{fontSize: 12, marginHorizontal: 15}}>
                    Halim Perdanakusuma International Airport
                  </Text>
                </View>
              </View>
            </Left>

            <View style={{marginLeft: 120, marginTop: 15}}>
              <Right style={Style.borderWith}>
                <Text style={Style.textList}>Harga per orang</Text>
                <Text
                  style={{
                    textDecorationLine: 'line-through',
                    fontSize: 11,
                    marginRight: 15,
                  }}>
                  Rp 2.000.000
                </Text>
                <Button
                  style={Style.buttonPrice}
                  onPress={() => props.navigation.navigate('DetailRoom')}>
                  <Text style={{color: '#454643'}}>Rp 500.000</Text>
                </Button>
                <View style={{marginHorizontal: 20, marginTop: 10}}>
                  <Text style={{fontSize: 10, color: '#0185EF', marginTop: 15}}>
                    LIHAT DETAIL
                  </Text>
                </View>
              </Right>
            </View>
          </ListItem>
        </Card>
        {/* </TouchableOpacity> */}
      </View>
    </>
  );
};
export default RPenerbangan;
