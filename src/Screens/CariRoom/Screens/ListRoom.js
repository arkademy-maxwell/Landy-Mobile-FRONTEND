import React, {useState, useEffect} from 'react';
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

// Redux
import {useDispatch, useSelector} from 'react-redux';
import {getRoom} from '../../../../public/Redux/Actions/Room';

const ListRoom = props => {
  const [Data, setData] = useState([]);

  const Room = useSelector(state => state.Room.RoomList);
  const dispatch = useDispatch();

  async function getData() {
    const output = await dispatch(getRoom());
    setData(output.value.data.data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container style={{backgroundColor: '#ecf0f1'}}>
      <Header {...props} />
      <View>
        <View style={{backgroundColor: '#fff'}}>
          <View style={{margin: 10}}>
            <Image
              source={require('../../../../public/register/Capture.png')}
              style={{width: '100%'}}
            />
          </View>
        </View>
      </View>
      <Content>
        <View>
          {Data.map(item => {
            return (
              <TouchableOpacity>
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
                      <Text>{item.room}</Text>
                      <Text note numberOfLines={1}>
                        {item.locations}
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
                        {item.price}
                      </Text>
                      <Button
                        style={Style.buttonPrice}
                        onPress={() =>
                          props.navigation.navigate('DetailRoom', {
                            id: item.id,
                          })
                        }>
                        <Text style={{color: '#454643'}}>{item.price}</Text>
                      </Button>
                    </Right>
                  </ListItem>
                </Card>
              </TouchableOpacity>
            );
          })}
        </View>
      </Content>
    </Container>
  );
};

export default ListRoom;
