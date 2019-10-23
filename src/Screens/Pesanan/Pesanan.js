import React from 'react';
import {ScrollView, TouchableOpacity, ImageBackground} from 'react-native';
import {Text, View, Icon} from 'native-base';
import {styles} from './Pesanan.style';

const Pesanan = props => {
  const _renderEmptyCart = props => (
    <View style={styles.mainContent}>
      <ImageBackground
        source={require('../../../public/assets/Image/ic_empty_cart.png')}
        style={{width: 170, height: 100, alignSelf: 'center'}}
      />
      <View style={styles.textSection}>
        <Text style={styles.mainText}>Belum ada pembelian</Text>
        <Text style={styles.secondText}>
          Pembelian yang sedang berlangsung akan ditampilkan disini
        </Text>
        <TouchableOpacity onPress={() => props.navigation.navigate('Bukti')}>
          <Text style={styles.linkText}>LIHAT BUKTI PEMBELIAN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.content}>
      <View style={styles.header}>
        <View style={styles.nav}>
          <Text style={styles.title}>Pesanan Saya</Text>
        </View>
        <View style={styles.scrollViewArea}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.contentHeader}>
              <View style={styles.mainCard}>
                <View style={styles.circleTop} />
                <View style={styles.circleBottom} />
                <View style={styles.contentMainCard}>
                  <Text style={styles.textCard}>
                    Belum Ada Tiket dan Voucher Aktif
                  </Text>
                  <Text style={styles.textCard}>
                    Tiket atau voucher yang telah terbit akan ditampilkan
                    disini.
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => props.navigation.navigate('TiketVoucher')}>
                <View style={styles.listCard}>
                  <View style={styles.iconSection}>
                    <Icon
                      name="ios-list-box"
                      style={{fontSize: 20, color: '#fff'}}
                    />
                  </View>
                  <Text style={styles.textIconSection}>Lihat Semua</Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
      {_renderEmptyCart({...props})}
    </View>
  );
};

export default Pesanan;
