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
  iconColor: {
    color: '#3fbdea',
    textAlign: 'center',
  },
  titleIconFacility: {
    fontSize: 10,
    textAlign: 'center',
    marginTop: 5,
  },
  cardTwo: {
    borderRadius: 5,
    overflow: 'hidden',
    height: 125,
    borderColor: '#fff',
  },
  cardTwoImage: {
    width: '100%',
    height: 125,
    position: 'relative',
  },
  cardTwoImageShadow: {
    width: '100%',
    height: 125,
    backgroundColor: 'black',
    position: 'absolute',
    opacity: 0.7,
  },
  wrapperTextTwo: {
    marginTop: 40,
  },
  textTwoCard: {
    color: '#fff',
    textAlign: 'center',
  },
  checkin: {
    borderWidth: 1,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    height: 'auto',
    paddingLeft: 20,
    paddingTop: 5,
    paddingBottom: 5,
    borderColor: '#ecf0f1',
  },
  ketKamarRounded: {
    width: 10,
    height: 10,
    borderRadius: 50,
    marginTop: 5,
    marginLeft: 5,
    backgroundColor: '#00aeef',
  },
  durasi: {
    borderWidth: 1,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    height: 'auto',
    paddingLeft: 20,
    paddingTop: 5,
    paddingBottom: 5,
    borderColor: '#ecf0f1',
  },
  ketKamarTitle: {
    color: '#7f8c8d',
    fontSize: 13,
  },
  cardFour: {
    borderRadius: 5,
    overflow: 'hidden',
    height: 'auto',
    borderColor: '#fff',
  },
  wrapChoose: {
    width: '100%',
    height: 75,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#e9e9e9',
  },
  buttonChoose: {
    borderRadius: 20,
    elevation: 0,
    marginTop: 10,
    paddingLeft: 10,
    width: 120,
    backgroundColor: '#ffcb00',
  },
});

export default styles;
