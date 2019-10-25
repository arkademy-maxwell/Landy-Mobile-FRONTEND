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
  Tab,
  Tabs,
  ScrollableTab,
} from 'native-base';
import {TouchableOpacity} from 'react-native';
import Header from '../components/HeaderDetail';
import Style from './Termurah.style';
import Icon from 'react-native-vector-icons/Ionicons';
import RPenerbangan from '../components/RPenerbangan';
import RHarga from '../components/RHarga';

const DetailPenerbangan = props => {
  return (
    <Container style={{backgroundColor: '#ecf0f1'}}>
      <Header {...props} />
      <Content>
        <View style={{flexDirection: 'row', margin: 5}}>
          <Tabs
            tabBarUnderlineStyle={{
              borderBottomWidth: 2,
              borderColor: '#1bb6f1',
            }}
            tabContainerStyle={{elevation: 0}}>
            <Tab
              heading="Rincian Penerbangan"
              tabStyle={{backgroundColor: '#fff'}}
              textStyle={{color: '#000'}}
              activeTabStyle={{backgroundColor: '#fff'}}
              activeTextStyle={{
                color: '#d0d4d7',
                fontWeight: 'normal',
              }}>
              <RPenerbangan navigate={props.navigation.navigate} />
            </Tab>
            <Tab
              heading="Rincian Harga"
              tabStyle={{backgroundColor: '#fff'}}
              textStyle={{color: '#000'}}
              activeTabStyle={{backgroundColor: '#fff'}}
              activeTextStyle={{
                color: '#d0d4d7',
                fontWeight: 'normal',
              }}>
              <RHarga navigate={props.navigation.navigate} />
            </Tab>
          </Tabs>
        </View>
        {/* <DataPalingAkhir navigation={props.navigation.navigate} /> */}
      </Content>
      <View style={{alignItems: 'center', bottom: 0}}>
        <Button full warning>
          <Text style={{color: 'black'}}>PILIH PENERBANGAN PERGI</Text>
        </Button>
      </View>
    </Container>
  );
};
export default DetailPenerbangan;
