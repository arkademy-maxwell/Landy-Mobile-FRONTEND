import React, {Component} from 'react';
import {ImageBackground, TouchableOpacity} from 'react-native';
import {Text, View} from 'native-base';
import styles from './HeaderBanner.style';
import Swiper from 'react-native-swiper';

const Home = props => {
  const _renderPagination = (index, total) => {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'flex-end',
          alignSelf: 'flex-end',
          bottom: 10,
          right: 10,
        }}>
        <View style={styles.paginationPage}>
          <Text style={styles.paginationTotal}>
            <Text style={styles.paginationCurrent}>{index + 1}</Text>/{total}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.paginationShow}
          activeOpacity={0.9}
          onPress={() => props.navigation.navigate('Promo')}>
          <Text style={styles.paginationTotal}>Lihat Semua Promo</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.headSlider}>
      <Swiper
        autoplayTimeout={2}
        autoplay={true}
        onIndexChanged={index => console.log(index)}
        renderPagination={_renderPagination}>
        <View style={styles.adsBox}>
          <ImageBackground
            source={require('../../../../public/assets/Dummy/promo_1.jpg')}
            style={{width: '100%', height: 240}}
          />
        </View>
        <View style={styles.adsBox}>
          <ImageBackground
            source={require('../../../../public/assets/Dummy/promo_1.jpg')}
            style={{width: '100%', height: 240}}
          />
        </View>
        <View style={styles.adsBox}>
          <ImageBackground
            source={require('../../../../public/assets/Dummy/promo_1.jpg')}
            style={{width: '100%', height: 240}}
          />
        </View>
      </Swiper>
    </View>
  );
};

export default Home;
