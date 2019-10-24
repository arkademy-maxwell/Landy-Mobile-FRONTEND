import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#ecf0f1',
  },
  buttonPrice: {
    marginTop: 10,
    borderRadius: 20,
    elevation: 0,
    backgroundColor: '#fdcf1b',
  },
  iconShare: {
    alignSelf: 'flex-end',
    color: '#fff',
  },
  mainImage: {
    height: 230,
    width: '100%',
    position: 'absolute',
    zIndex: -999,
  },
  subImage: {
    height: 100,
    width: '100%',
  },
  otherImage: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    position: 'absolute',
    opacity: 0.5,
  },
  textOtherImage: {
    textAlign: 'center',
    zIndex: 999999,
    color: '#fff',
    paddingTop: 25,
  },
  map: {
    width: 75,
    height: 75,
    borderRadius: 50,
    backgroundColor: '#eaeaea',
  },
  labelLandyRooms: {
    color: '#fff',
    fontSize: 13,
    backgroundColor: '#00aeef',
    width: 80,
    padding: 3,
    paddingLeft: 8,
    borderRadius: 5,
  },
  titleRoom: {
    fontSize: 14,
    lineHeight: 30,
  },
  subTitleRoom: {
    fontSize: 13,
    color: '#606060',
    lineHeight: 30,
  },
  cardBorder: {
    borderBottomWidth: 1,
    margin: 5,
    borderColor: '#ecf0f1',
  },
  linearGradient: {
    height: 230,
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    width: '100%',
  },
  imagePadding: {
    paddingRight: 3,
  },
  card: {
    borderRadius: 5,
    overflow: 'hidden',
  },
});

export default styles;
