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
import {ScrollView} from 'react-native';
import Header from '../Components/Header';
import Style from './ListRoom.style';
import Icon from 'react-native-vector-icons/Ionicons';
const ListRoom = props => {
  return (
    <Container>
      <Header />
      <View>
        <Card style={{marginBottom: 10}}>
          <ListItem thumbnail>
            <Left>
              <View>
                <Thumbnail
                  style={{margin: 20}}
                  square
                  source={require('../../../Assets/Images/ListRoom.jpg')}
                />
              </View>
            </Left>
            <Body>
              <Text>
                Ada{' '}
                <Text style={{fontWeight: 'bold'}}>
                  Jaminan Kenyamanan di setiap kamar Landy!
                </Text>
                <Text style={{color: '#74D3F6'}}>Lihat Selengkapnya</Text>
              </Text>
            </Body>
            <Right />
          </ListItem>
        </Card>
      </View>
      <Content>
        <View>
          <Card style={{marginBottom: 10}}>
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
                    <Text style={{fontSize: 11, color: '#74D3F6'}}>
                      Excellent
                    </Text>
                  </Icon>
                </View>
              </Left>
              <Body>
                <Text>Airy Beji Margonda Raya 88 Bogor</Text>
                <Text note numberOfLines={1}>
                  Bogor
                </Text>
              </Body>
              <Right>
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
          <Card style={{marginBottom: 10}}>
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
                    <Text style={{fontSize: 11, color: '#74D3F6'}}>
                      Excellent
                    </Text>
                  </Icon>
                </View>
              </Left>
              <Body>
                <Text>Airy Beji Margonda Raya 88 Bogor</Text>
                <Text note numberOfLines={1}>
                  Bogor
                </Text>
              </Body>
              <Right>
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
          <Card style={{marginBottom: 10}}>
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
                    <Text style={{fontSize: 11, color: '#74D3F6'}}>
                      Excellent
                    </Text>
                  </Icon>
                </View>
              </Left>
              <Body>
                <Text>Airy Beji Margonda Raya 88 Bogor</Text>
                <Text note numberOfLines={1}>
                  Bogor
                </Text>
              </Body>
              <Right>
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
          <Card style={{marginBottom: 10}}>
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
                    <Text style={{fontSize: 11, color: '#74D3F6'}}>
                      Excellent
                    </Text>
                  </Icon>
                </View>
              </Left>
              <Body>
                <Text>Airy Beji Margonda Raya 88 Bogor</Text>
                <Text note numberOfLines={1}>
                  Bogor
                </Text>
              </Body>
              <Right>
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
          <Card style={{marginBottom: 10}}>
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
                    <Text style={{fontSize: 11, color: '#74D3F6'}}>
                      Excellent
                    </Text>
                  </Icon>
                </View>
              </Left>
              <Body>
                <Text>Airy Beji Margonda Raya 88 Bogor</Text>
                <Text note numberOfLines={1}>
                  Bogor
                </Text>
              </Body>
              <Right>
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
          <Card style={{marginBottom: 10}}>
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
                    <Text style={{fontSize: 11, color: '#74D3F6'}}>
                      Excellent
                    </Text>
                  </Icon>
                </View>
              </Left>
              <Body>
                <Text>Airy Beji Margonda Raya 88 Bogor</Text>
                <Text note numberOfLines={1}>
                  Bogor
                </Text>
              </Body>
              <Right>
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
          <Card style={{marginBottom: 10}}>
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
                    <Text style={{fontSize: 11, color: '#74D3F6'}}>
                      Excellent
                    </Text>
                  </Icon>
                </View>
              </Left>
              <Body>
                <Text>Airy Beji Margonda Raya 88 Bogor</Text>
                <Text note numberOfLines={1}>
                  Bogor
                </Text>
              </Body>
              <Right>
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
