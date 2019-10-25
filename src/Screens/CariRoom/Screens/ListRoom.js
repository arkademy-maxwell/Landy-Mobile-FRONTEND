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
import {TouchableOpacity, Image} from 'react-native';
import Header from '../Components/Header';
import Style from './ListRoom.style';
import Icon from 'react-native-vector-icons/Ionicons';
const ListRoom = props => {
  return (
    <Container style={{backgroundColor: '#ecf0f1'}}>
      <Header />
      <Content>
        <View>
          <TouchableOpacity>
            <View style={{backgroundColor: '#fff'}}>
              <View style={{margin: 10}}>
                <Image
                  source={require('../../../../public/register/Capture.png')}
                  style={{width: '98%'}}
                />
              </View>
            </View>
          </TouchableOpacity>
          <Card style={Style.marginBottom}>
            <ListItem thumbnail>
              <Left>
                <View>
                  <Thumbnail
                    style={{marginTop: 30}}
                    square
                    source={require('../../../Assets/Images/ListRoom.jpg')}
                  />
                  <Icon
                    style={{marginTop: 15, marginBottom: 10}}
                    size={15}
                    color={'#74D3F6'}
                    type="Ionicons"
                    name="ios-thumbs-up">
                    <Text> </Text>
                    <Text style={{fontSize: 11, color: '#74D3F6'}}>
                      Excellen
                    </Text>
                  </Icon>
                </View>
              </Left>
              <Body style={Style.borderWith}>
                <Text>Airy Beji Margonda Raya 88 Bogor</Text>
                <Text note numberOfLines={1}>
                  Bogor
                </Text>
              </Body>
              <Right style={Style.borderWith}>
                <Text style={Style.textList}>Harga/malam</Text>
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
              </Right>
            </ListItem>
          </Card>
          {/* </TouchableOpacity> */}
          <Card style={Style.marginBottom}>
            <ListItem thumbnail>
              <Left>
                <View>
                  <Thumbnail
                    style={{marginTop: 30}}
                    square
                    source={require('../../../Assets/Images/ListRoom.jpg')}
                  />
                  <Icon
                    style={{marginTop: 15, marginBottom: 10}}
                    size={15}
                    color={'#74D3F6'}
                    type="Ionicons"
                    name="ios-thumbs-up">
                    <Text> </Text>
                    <Text style={{fontSize: 11, color: '#74D3F6'}}>
                      Excellent
                    </Text>
                  </Icon>
                </View>
              </Left>
              <Body style={Style.borderWith}>
                <Text>Airy Beji Margonda Raya 88 Bogor</Text>
                <Text note numberOfLines={1}>
                  Bogor
                </Text>
              </Body>
              <Right style={Style.borderWith}>
                <Text style={Style.textList}>Harga/malam</Text>
                <Text
                  style={{
                    textDecorationLine: 'line-through',
                    fontSize: 11,
                    marginRight: 15,
                  }}>
                  Rp 2.000.000
                </Text>
                <Button style={Style.buttonPrice}>
                  <Text style={{color: '#454643'}}>Rp 500.000</Text>
                </Button>
              </Right>
            </ListItem>
          </Card>

          <Card style={Style.marginBottom}>
            <ListItem thumbnail>
              <Left>
                <View>
                  <Thumbnail
                    style={{marginTop: 30}}
                    square
                    source={require('../../../Assets/Images/ListRoom.jpg')}
                  />
                  <Icon
                    style={{marginTop: 15, marginBottom: 10}}
                    size={15}
                    color={'#74D3F6'}
                    type="Ionicons"
                    name="ios-thumbs-up">
                    <Text> </Text>
                    <Text style={{fontSize: 11, color: '#74D3F6'}}>
                      Excellent
                    </Text>
                  </Icon>
                </View>
              </Left>
              <Body style={Style.borderWith}>
                <Text>Airy Beji Margonda Raya 88 Bogor</Text>
                <Text note numberOfLines={1}>
                  Bogor
                </Text>
              </Body>
              <Right style={Style.borderWith}>
                <Text style={Style.textList}>Harga/malam</Text>
                <Text
                  style={{
                    textDecorationLine: 'line-through',
                    fontSize: 11,
                    marginRight: 15,
                  }}>
                  Rp 2.000.000
                </Text>
                <Button style={Style.buttonPrice}>
                  <Text style={{color: '#454643'}}>Rp 500.000</Text>
                </Button>
              </Right>
            </ListItem>
          </Card>
          <Card style={Style.marginBottom}>
            <ListItem thumbnail>
              <Left>
                <View>
                  <Thumbnail
                    style={{marginTop: 30}}
                    square
                    source={require('../../../Assets/Images/ListRoom.jpg')}
                  />
                  <Icon
                    style={{marginTop: 15, marginBottom: 10}}
                    size={15}
                    color={'#74D3F6'}
                    type="Ionicons"
                    name="ios-thumbs-up">
                    <Text> </Text>
                    <Text style={{fontSize: 11, color: '#74D3F6'}}>
                      Excellent
                    </Text>
                  </Icon>
                </View>
              </Left>
              <Body style={Style.borderWith}>
                <Text>Airy Beji Margonda Raya 88 Bogor</Text>
                <Text note numberOfLines={1}>
                  Bogor
                </Text>
              </Body>
              <Right style={Style.borderWith}>
                <Text style={Style.textList}>Harga/malam</Text>
                <Text
                  style={{
                    textDecorationLine: 'line-through',
                    fontSize: 11,
                    marginRight: 15,
                  }}>
                  Rp 2.000.000
                </Text>
                <Button style={Style.buttonPrice}>
                  <Text style={{color: '#454643'}}>Rp 500.000</Text>
                </Button>
              </Right>
            </ListItem>
          </Card>
          <Card style={Style.marginBottom}>
            <ListItem thumbnail>
              <Left>
                <View>
                  <Thumbnail
                    style={{marginTop: 30}}
                    square
                    source={require('../../../Assets/Images/ListRoom.jpg')}
                  />
                  <Icon
                    style={{marginTop: 15, marginBottom: 10}}
                    size={15}
                    color={'#74D3F6'}
                    type="Ionicons"
                    name="ios-thumbs-up">
                    <Text> </Text>
                    <Text style={{fontSize: 11, color: '#74D3F6'}}>
                      Excellent
                    </Text>
                  </Icon>
                </View>
              </Left>
              <Body style={Style.borderWith}>
                <Text>Airy Beji Margonda Raya 88 Bogor</Text>
                <Text note numberOfLines={1}>
                  Bogor
                </Text>
              </Body>
              <Right style={Style.borderWith}>
                <Text style={Style.textList}>Harga/malam</Text>
                <Text
                  style={{
                    textDecorationLine: 'line-through',
                    fontSize: 11,
                    marginRight: 15,
                  }}>
                  Rp 2.000.000
                </Text>
                <Button style={Style.buttonPrice}>
                  <Text style={{color: '#454643'}}>Rp 500.000</Text>
                </Button>
              </Right>
            </ListItem>
          </Card>
          <Card style={Style.marginBottom}>
            <ListItem thumbnail>
              <Left>
                <View>
                  <Thumbnail
                    style={{marginTop: 30}}
                    square
                    source={require('../../../Assets/Images/ListRoom.jpg')}
                  />
                  <Icon
                    style={{marginTop: 15, marginBottom: 10}}
                    size={15}
                    color={'#74D3F6'}
                    type="Ionicons"
                    name="ios-thumbs-up">
                    <Text> </Text>
                    <Text style={{fontSize: 11, color: '#74D3F6'}}>
                      Excellent
                    </Text>
                  </Icon>
                </View>
              </Left>
              <Body style={Style.borderWith}>
                <Text>Airy Beji Margonda Raya 88 Bogor</Text>
                <Text note numberOfLines={1}>
                  Bogor
                </Text>
              </Body>
              <Right style={Style.borderWith}>
                <Text style={Style.textList}>Harga/malam</Text>
                <Text
                  style={{
                    textDecorationLine: 'line-through',
                    fontSize: 11,
                    marginRight: 15,
                  }}>
                  Rp 2.000.000
                </Text>
                <Button style={Style.buttonPrice}>
                  <Text style={{color: '#454643'}}>Rp 500.000</Text>
                </Button>
              </Right>
            </ListItem>
          </Card>
          <Card style={Style.marginBottom}>
            <ListItem thumbnail>
              <Left>
                <View>
                  <Thumbnail
                    style={{marginTop: 30}}
                    square
                    source={require('../../../Assets/Images/ListRoom.jpg')}
                  />
                  <Icon
                    style={{marginTop: 15, marginBottom: 10}}
                    size={15}
                    color={'#74D3F6'}
                    type="Ionicons"
                    name="ios-thumbs-up">
                    <Text> </Text>
                    <Text style={{fontSize: 11, color: '#74D3F6'}}>
                      Excellent
                    </Text>
                  </Icon>
                </View>
              </Left>
              <Body style={Style.borderWith}>
                <Text>Airy Beji Margonda Raya 88 Bogor</Text>
                <Text note numberOfLines={1}>
                  Bogor
                </Text>
              </Body>
              <Right style={Style.borderWith}>
                <Text style={Style.textList}>Harga/malam</Text>
                <Text
                  style={{
                    textDecorationLine: 'line-through',
                    fontSize: 11,
                    marginRight: 15,
                  }}>
                  Rp 2.000.000
                </Text>
                <Button style={Style.buttonPrice}>
                  <Text style={{color: '#454643'}}>Rp 500.000</Text>
                </Button>
              </Right>
            </ListItem>
          </Card>
        </View>
      </Content>
    </Container>
  );
};
export default ListRoom;
