import React from 'react';
import {View, Text} from 'native-base';
import styles from './Header.style';
const Header = props => {
  return (
    <View style={styles.nav}>
      <Text style={styles.title}>{props.menu}</Text>
    </View>
  );
};

export default Header;
