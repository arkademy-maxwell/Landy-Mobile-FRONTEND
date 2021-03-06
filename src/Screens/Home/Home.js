import React from 'react';
import {Content, View, Tab, Tabs} from 'native-base';

import HeaderBanner from './Component/HeaderBanner';
import ScreenRoom from './Screens/Rooms';
import ScreenPlane from './Screens/Plane';

const Rooms = props => {
  return (
    <Content>
      <HeaderBanner {...props} />
      <View>
        <Tabs
          tabBarUnderlineStyle={{borderBottomWidth: 2, borderColor: '#1bb6f1'}}
          tabContainerStyle={{elevation: 0}}>
          <Tab
            heading="Kamar"
            tabStyle={{backgroundColor: '#fff'}}
            textStyle={{color: '#d0d4d7'}}
            activeTabStyle={{backgroundColor: '#fff'}}
            activeTextStyle={{
              color: '#000',
              fontWeight: 'normal',
              borderColor: 'red',
            }}>
            <ScreenRoom navigate={props.navigation.navigate} />
          </Tab>
          <Tab
            heading="Tiket Pesawat"
            tabStyle={{backgroundColor: '#fff'}}
            textStyle={{color: '#d0d4d7'}}
            activeTabStyle={{backgroundColor: '#fff'}}
            activeTextStyle={{
              color: '#000',
              fontWeight: 'normal',
            }}>
            <ScreenPlane navigate={props.navigation.navigate} />
          </Tab>
        </Tabs>
      </View>
    </Content>
  );
};
export default Rooms;
