import React from 'react';
import {ImageBackground} from 'react-native';
import {Text, View, Icon, Button} from 'native-base';
import {styles} from './PromoScreen.style';
import Swiper from 'react-native-swiper';

const PromoScreen = props => {
  const _renderEmptyPromo = props => (
    <View style={styles.mainContent}>
      <ImageBackground
        source={require('../../../public/assets/Image/ic_empty_ticket.png')}
        style={{width: 180, height: 130, alignSelf: 'center'}}
      />
      <View style={styles.textSection}>
        <Text style={styles.mainText}>Promo belum tersedia</Text>
        <Text style={styles.secondText}>
          Kami sedang berusaha menyipakan promo terbaik untuk Anda.
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
        <Text style={styles.title}>Promo Landy</Text>
      </View>
      {/* Content */}
      <View style={styles.headSlider}>
        <Swiper>
          <View>
            <Text>1</Text>
          </View>
          <View>
            <Text>2</Text>
          </View>
          <View>
            <Text>3</Text>
          </View>
        </Swiper>
      </View>
      {/* End Content */}
    </View>
  );
};

export default PromoScreen;
