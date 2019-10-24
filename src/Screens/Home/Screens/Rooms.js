import React from 'react';
import {Content, View, Button, Text, Icon} from 'native-base';
import {Image, TouchableOpacity} from 'react-native';
import Styles from './Style.style';

const Rooms = props => {
  return (
    <Content>
      <View style={Styles.room}>
        <TouchableOpacity
          style={Styles.inputBoxItem}
          onPress={() => props.navigate('FindPlace')}>
          <View style={Styles.inputBox}>
            <Icon
              type="SimpleLineIcons"
              name="location-pin"
              style={Styles.iconBox}
            />
            <View style={Styles.inputAreaBox}>
              <Text style={Styles.titleBox}>Landy Rooms di Sekitar</Text>
              <Text style={Styles.titleDesc}>Pilih Lokasi Menginap</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={Styles.inputBoxItem}
          onPress={() => props.navigate('FindPlace')}>
          <View style={Styles.inputBox}>
            <Icon type="AntDesign" name="calendar" style={Styles.iconBox} />
            <View style={Styles.inputAreaBox}>
              <Text style={Styles.titleBox}>Check-in</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={Styles.titleDesc}>Jum'at, 25 Oktober 2019</Text>
                <View style={Styles.dot} />
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={Styles.inputBoxItem}
          onPress={() => props.navigate('FindPlace')}>
          <View style={Styles.inputBox}>
            <Icon
              type="MaterialCommunityIcons"
              name="timer"
              style={Styles.iconBox}
            />
            <View style={Styles.inputAreaBox}>
              <Text style={Styles.titleBox}>Durasi Menginap</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={Styles.titleDesc}>1 Malam</Text>
                <View style={Styles.dot} />
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <Button full warning style={Styles.buttonCariKamar}>
          <Text style={Styles.textCariKamar}>Cari Kamar Landy Rooms</Text>
        </Button>

        <View
          style={{
            marginLeft: 50,
            marginRight: 30,
            marginTop: 20,
            justifyContent: 'center',
          }}>
          <View style={{flexDirection: 'row'}}>
            <Icon name="like2" type="AntDesign" style={{fontSize: 18}} />
            <Text style={{fontSize: 12, color: '#b0b8b9', marginLeft: 5}}>
              Harga Final, Booking Murah, Transaksi Aman
            </Text>
          </View>
        </View>
      </View>
      <View>
        <View style={{flexDirection: 'row', flex: 1}}>
          <View>
            <Image source={require('../../../../public/home/rooms.png')} />
          </View>
        </View>
      </View>
    </Content>
  );
};
export default Rooms;
