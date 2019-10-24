import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  cardImage: {
    width: 393,
    height: 200,
    resizeMode: 'cover',
  },
  CardCover: {
    elevation: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    marginTop: -0.1,
    marginLeft: -0.1,
  },
  // Header Style
  headSlider: {
    width: '100%',
    height: 240,
  },
  paginationCurrent: {
    color: '#fff',
    fontSize: 14,
  },
  paginationTotal: {
    color: '#fff',
    fontSize: 14,
  },
  paginationPage: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    width: 50,
    height: 30,
    borderTopStartRadius: 5,
    borderBottomStartRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  paginationShow: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    width: 'auto',
    height: 30,
    paddingHorizontal: 15,
    borderTopEndRadius: 5,
    borderBottomEndRadius: 5,
    borderStartWidth: 1,
    borderStartColor: '#a1a1a1',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
});

export default styles;
