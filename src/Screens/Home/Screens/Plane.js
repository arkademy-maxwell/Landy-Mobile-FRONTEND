import React from 'react';
import {Content, View, Button, Grid, Col, Icon, Text} from 'native-base';
import {Image, TouchableOpacity} from 'react-native';
import Styles from './Style.style';

// import { Icon, grid } from 'react-native-vector-icons/dist/FontAwesome';

const Ticket = props => {
  return (
    <Content>
      <View style={Styles.room}>
        <TouchableOpacity
          style={Styles.inputBoxItem}
          onPress={() => props.navigate('FindPlace')}>
          <View style={Styles.inputBox}>
            <Icon
              type="MaterialCommunityIcons"
              name="airplane-takeoff"
              style={Styles.iconBox}
            />
            <View style={Styles.inputAreaBox}>
              <Text style={Styles.titleBox}>Kota Asal</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={Styles.titleDesc}>Pilih kota asal</Text>
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
              name="airplane-landing"
              style={Styles.iconBox}
            />
            <View style={Styles.inputAreaBox}>
              <Text style={Styles.titleBox}>Kota Tujuan</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={Styles.titleDesc}>Pilih kota tujuan</Text>
                <View style={Styles.dot} />
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={Styles.inputBoxItem}
          onPress={() => props.navigate('FindPlace')}>
          <View style={Styles.inputBox}>
            <Icon type="AntDesign" name="calendar" style={Styles.iconBox} />
            <View style={Styles.inputAreaBox}>
              <Text style={Styles.titleBox}>Tanggal Berangkat</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={Styles.titleDesc}>25 Oktober 2019</Text>
                <View style={Styles.dot} />
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={Styles.inputBoxItem}
          onPress={() => props.navigate('FindPlace')}>
          <View style={Styles.inputBox}>
            <Icon type="Feather" name="users" style={Styles.iconBox} />
            <View style={Styles.inputAreaBox}>
              <Text style={Styles.titleBox}>Penumpang</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={Styles.titleDesc}>1 Dewasa, 1 Anak, 1 Bayi</Text>
                <View style={Styles.dot} />
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <Button full warning style={Styles.buttonCariKamar}>
          <Text style={Styles.textCariKamar}>Cari Penerbangan</Text>
        </Button>

        <View style={{marginLeft: 50, marginRight: 30, marginTop: 20}}>
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
export default Ticket;
