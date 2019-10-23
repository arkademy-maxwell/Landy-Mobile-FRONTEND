import React from 'react';
import {ImageBackground} from 'react-native';
import {Text, View, Icon, Button} from 'native-base';
import {styles} from './BuktiScreen.style';

const BuktiScreen = props => {
  const _renderEmptyCart = props => (
    <View style={styles.mainContent}>
      <ImageBackground
        source={require('../../../../../public/assets/Image/ic_empty_ticket.png')}
        style={{width: 180, height: 130, alignSelf: 'center'}}
      />
      <View style={styles.textSection}>
        <Text style={styles.mainText}>Belum ada bukti pembelian</Text>
        <Text style={styles.secondText}>
          Semua bukti pembelian akan ditampilkan di sini
        </Text>
        <Button style={styles.buttonAction}>
          <Text style={{color: '#191919'}}>Cari Kamar Atau Tiket Pesawat</Text>
        </Button>
      </View>
    </View>
  );

  return (
    <View style={styles.content}>
      <View style={styles.nav}>
        <Icon
          name="md-arrow-back"
          style={styles.iconNav}
          onPress={() => props.navigation.goBack()}
        />
        <Text style={styles.title}>Bukti Pembelian</Text>
      </View>
      {_renderEmptyCart()}
    </View>
  );
};

export default BuktiScreen;
