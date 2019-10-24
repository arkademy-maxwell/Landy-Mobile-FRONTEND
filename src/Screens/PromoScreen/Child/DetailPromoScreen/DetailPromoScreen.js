import React from 'react';
import {ImageBackground, ScrollView} from 'react-native';
import {Text, View, Icon} from 'native-base';
import {styles} from './DetailPromoScreen.style';

const DetailPromoScreen = props => {
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground
          source={require('../../../../../public/assets/Dummy/promo_1.jpg')}
          style={{width: '100%', height: 230}}
        />
        <View style={styles.body}>
          <View style={styles.cardContent}>
            <View style={styles.contentHead}>
              <View style={styles.lineTopText} />
              <Text style={styles.textTitle}>
                Ini Waktumu Manjakan Diri dengan Liburan Bersama Landy
              </Text>
              <Text style={styles.textDesc}>Deskripsi Promo</Text>
              <Text style={styles.textDescDetail}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                vitae dictum metus. Pellentesque tincidunt, felis ac congue
                semper, lacus neque venenatis ante, sed posuere mauris erat eu
                nisi. Aenean ex ex, suscipit sit amet molestie a, consequat a
                orci. Nullam diam ex, pulvinar a blandit non, mattis non tellus.
                Integer varius malesuada neque vel ornare. Sed facilisis
                venenatis tempus. Pellentesque condimentum diam nec magna auctor
                facilisis. Aliquam neque ipsum, rutrum ac rutrum vel, vestibulum
                id sapien. Proin sit amet elementum enim. Sed eu bibendum ex, ac
                consequat enim. Nullam ac vehicula metus.
              </Text>
            </View>
            <View style={styles.contentBody}>
              <Text style={styles.textDesc}>Kode Kupon</Text>
              <Text style={styles.textDescDetail}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                vitae dictum metus. Pellentesque tincidunt, felis ac congue
                semper, lacus neque venenatis ante, sed posuere mauris erat eu
                nisi. Aenean ex ex, suscipit sit amet molestie a, consequat a
                orci. Nullam diam ex, pulvinar a blandit non, mattis non tellus.
                Integer varius malesuada neque vel ornare. Sed facilisis
                venenatis tempus. Pellentesque condimentum diam nec magna auctor
                facilisis. Aliquam neque ipsum, rutrum ac rutrum vel, vestibulum
                id sapien. Proin sit amet elementum enim. Sed eu bibendum ex, ac
                consequat enim. Nullam ac vehicula metus.
              </Text>
            </View>
            <View style={styles.contentFooter}>
              <Text style={styles.textDesc}>Syarat & Ketentuan</Text>
              <Text style={styles.textDescDetail}>
                1. Periode promo: 24 Oktober 2019 - 25 Oktober 2019. 2. Periode
                terbang: kapan saja. 3. AIRYP125: Diskon Rp. 125.000 dengan
                minimal transaksi Rp. 2.500.000 untuk penerbangan dengan
                maskapai Citilink, Garuda Indonesia dan Batik Air bagi semua
                pelanggan Landy.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailPromoScreen;
