import React from 'react';
import {ImageBackground, ScrollView} from 'react-native';
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

  const _renderPagination = (index, total) => {
    return (
      <View style={styles.paginationBox}>
        <Text style={styles.paginationTotal}>
          <Text style={styles.paginationCurrent}>{index + 1}</Text>/{total}
        </Text>
      </View>
    );
  };

  const CardPromo = props => (
    <View style={styles.listCard}>
      <View style={styles.textHeader}>
        <Text style={styles.textPromo}>
          Periode promo{' '}
          <Text style={styles.textDatePromo}>hingga 23 Oktober 2019</Text>
        </Text>
      </View>
      <View style={styles.imageCard}>
        <ImageBackground
          source={require('../../../public/assets/Dummy/promo_2.png')}
          style={{width: '100%', height: 205}}
        />
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
      {/*  */}
      <ScrollView>
        <View style={styles.headSlider}>
          <Swiper
            autoplayTimeout={2}
            autoplay={true}
            onIndexChanged={index => console.log(index)}
            renderPagination={_renderPagination}>
            <View style={styles.adsBox}>
              <ImageBackground
                source={require('../../../public/assets/Dummy/promo_1.jpg')}
                style={{width: '100%', height: 240}}
              />
            </View>
            <View style={styles.adsBox}>
              <ImageBackground
                source={require('../../../public/assets/Dummy/promo_1.png')}
                style={{width: '100%', height: 240}}
              />
            </View>
            <View style={styles.adsBox}>
              <ImageBackground
                source={require('../../../public/assets/Dummy/promo_2.png')}
                style={{width: '100%', height: 240}}
              />
            </View>
          </Swiper>
        </View>
        {/* End Swiper */}
        {/* Body */}
        <View style={styles.section}>
          <View style={styles.lineTopText} />
          <Text style={styles.textSection}>Promo Lainnya</Text>
          <CardPromo />
          <CardPromo />
          <CardPromo />
          <CardPromo />
        </View>
        {/* End Body */}
      </ScrollView>
    </View>
  );
};

export default PromoScreen;
