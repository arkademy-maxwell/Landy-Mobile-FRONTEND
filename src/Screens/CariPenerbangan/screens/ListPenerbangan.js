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
  Tab,
  Tabs,
  ScrollableTab,
} from 'native-base';
import {TouchableOpacity} from 'react-native';
import Header from '../components/Header';
import Style from './Termurah.style';
import Icon from 'react-native-vector-icons/Ionicons';
import Termurah from '../components/DataTermurah';
import PalingAwal from '../components/DataPalingAwal';
import PalingAkhir from '../components/DataPalingAkhir';
const ListPenerbangan = props => {
  return (
    <Container style={{backgroundColor: '#ecf0f1'}}>
      <Header {...props} />
      <Content>
        <View style={{flexDirection: 'row', margin: 5}}>
          <Tabs
            tabBarUnderlineStyle={{
              borderBottomWidth: 2,
            }}
            tabContainerStyle={{elevation: 0}}
            scrollWithoutAnimation={true}>
            <Tab
              heading="TERMURAH"
              tabStyle={{backgroundColor: '#fff'}}
              textStyle={{color: '#000'}}
              activeTabStyle={{backgroundColor: '#fff'}}
              activeTextStyle={{
                color: '#d0d4d7',
                fontWeight: 'normal',
              }}>
              <Termurah navigate={props.navigation.navigate} />
            </Tab>
            <Tab
              heading="PALING AWAL"
              tabStyle={{backgroundColor: '#fff'}}
              textStyle={{color: '#000'}}
              activeTabStyle={{backgroundColor: '#fff'}}
              activeTextStyle={{
                color: '#d0d4d7',
                fontWeight: 'normal',
              }}>
              <PalingAwal navigate={props.navigation.navigate} />
            </Tab>
            <Tab
              heading="PALING AKHIR"
              tabStyle={{backgroundColor: '#fff'}}
              textStyle={{color: '#000'}}
              activeTabStyle={{backgroundColor: '#fff'}}
              activeTextStyle={{
                color: '#d0d4d7',
                fontWeight: 'normal',
              }}>
              <PalingAkhir navigate={props.navigation.navigate} />
            </Tab>
          </Tabs>
        </View>
      </Content>
    </Container>
  );
};
export default ListPenerbangan;
