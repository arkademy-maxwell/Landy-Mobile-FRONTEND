import React, {useState} from 'react';
import Carousel from 'pinar';
import Dots from 'react-native-dots-pagination';
import {ImageBackground} from 'react-native';
import {View, Text, Button} from 'native-base';
import {styles} from './SplashScreen.style';

const SplashScreen = props => {
  const [dotsActive, setDotsActive] = useState(0);
  const [dotsAction, setDotsAction] = useState(0);
  const [dotsTotal] = useState(4);

  const renderDots = () => {
    return (
      <View>
        <Dots length={dotsTotal} active={dotsActive} activeColor="#00aeef" />
      </View>
    );
  };

  const PrevButton = () => {
    const prevAction = () => {
      if (dotsActive >= 0 && dotsAction === dotsActive) {
        setDotsActive(dotsActive - 1);
        return carousel.scrollToPrev();
      }
    };

    return (
      <Button
        transparent
        onPress={() => prevAction()}
        style={[styles.prevButton, styles.button]}>
        <Text style={styles.textPrevButton}>Kembali</Text>
      </Button>
    );
  };

  const NextButton = () => {
    const nextAction = () => {
      if (dotsActive < 3 && dotsAction === dotsActive) {
        setDotsActive(dotsActive + 1);
        carousel.scrollToNext();
      }

      if (dotsActive === 3) {
        return props.navigation.navigate('Home');
      }
    };

    return (
      <Button
        onPress={() => nextAction()}
        style={[styles.nextButton, styles.button]}>
        <Text style={styles.textNextButton}>
          {dotsActive !== dotsTotal - 1 ? 'Selanjutnya' : 'Pesan Sekarang'}
        </Text>
      </Button>
    );
  };

  const DataSplash = [
    {
      title: 'HARGA MURAH',
      desc:
        'Dengan memesan tiket pesawat atau kamar hotel di Landy,  Anda sudah mendapatkan jaminan termurah.',
      image: require('../../../public/assets/SplashScreen/1.png'),
    },
    {
      title: 'PEMESANAN MUDAH',
      desc:
        'Hanya dengan beberapa langkah, lakukan pemesanan kapan pun, di mana pun secara mudah dan cepat.',
      image: require('../../../public/assets/SplashScreen/2.png'),
    },
    {
      title: 'KEAMANAN PEMBAYARAN',
      desc:
        'Landy menawarkan berbagai macam metode pembayaran yang didukung oleh teknologi terkini.',
      image: require('../../../public/assets/SplashScreen/3.png'),
    },
    {
      title: 'CUSTOMER SERVICE 24 JAM',
      desc:
        'Apabila Anda memerlukan bantuan, hubungi Customer Service Landy yang tersedia 24 jam setiap harinya.',
      image: require('../../../public/assets/SplashScreen/4.png'),
    },
  ];

  const LayoutSplash = item => {
    return (
      <View style={styles.splash}>
        <ImageBackground style={styles.imageHeader} source={item.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subTitle}>{item.desc}</Text>
      </View>
    );
  };

  const hasIndexChanged = index => {
    setDotsAction(index);
    setDotsActive(index);
  };

  let carousel;
  return (
    <View style={styles.content}>
      <View style={{flex: 5}}>
        <Carousel
          ref={Carousel => (carousel = Carousel)}
          showsControls={false}
          style={styles.carousel}
          renderDots={renderDots}
          onIndexChanged={({index}) => hasIndexChanged(index)}
          scrollEventThrottle={16}>
          {DataSplash.map((item, idx) => {
            return (
              <LayoutSplash
                key={idx}
                image={item.image}
                title={item.title}
                desc={item.desc}
              />
            );
          })}
        </Carousel>
      </View>
      <View style={styles.footerSplash}>
        <View style={styles.buttonSpace}>
          {dotsAction !== 0 && <PrevButton />}
        </View>
        <View style={styles.buttonSpace}>
          <NextButton />
        </View>
      </View>
    </View>
  );
};

export default SplashScreen;
