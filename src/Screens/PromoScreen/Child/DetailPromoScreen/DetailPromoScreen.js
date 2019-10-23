import React from 'react';
import {ImageBackground, ScrollView} from 'react-native';
import {Text, View, Icon, Button} from 'native-base';
import {styles} from './DetailPromoScreen.style';
import Swiper from 'react-native-swiper';

const DetailPromoScreen = props => {
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

export default DetailPromoScreen;
