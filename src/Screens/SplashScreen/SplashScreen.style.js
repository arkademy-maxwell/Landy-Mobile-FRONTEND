import {Dimensions, StyleSheet} from 'react-native';

const HEIGHT_DEVICE = Dimensions.get('window').height;
const WIDTH_DEVICE = Dimensions.get('window').width;
export const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  button: {
    marginHorizontal: 5,
  },
  nextButton: {
    height: 40,
    width: 180,
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: '#ffcb00',
    elevation: 0,
  },
  prevButton: {
    height: 40,
    width: 180,
    justifyContent: 'center',
    borderRadius: 50,
    elevation: 0,
  },
  textNextButton: {
    color: '#000',
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
  },
  textPrevButton: {
    color: '#00aeef',
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
  },
  footerSplash: {
    flex: 1.1,
    flexDirection: 'row',
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  carousel: {
    height: HEIGHT_DEVICE * 0.8,
    paddingTop: 50,
  },
  buttonSpace: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  imageHeader: {
    width: 250,
    height: 200,
    alignSelf: 'center',
  },
  splash: {
    paddingHorizontal: 60,
  },
  title: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 10,
    fontFamily: 'Montserrat-SemiBold',
  },
  subTitle: {
    fontSize: 12,
    textAlign: 'center',
    lineHeight: 23,
    fontFamily: 'Montserrat-Medium',
  },
});
