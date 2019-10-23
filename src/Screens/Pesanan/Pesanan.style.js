import {Dimensions, StyleSheet} from 'react-native';

const HEIGHT_DEVICE = Dimensions.get('window').height;
const WIDTH_DEVICE = Dimensions.get('window').width;
export const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  header: {
    backgroundColor: '#017fef',
    width: '100%',
    height: 220,
  },
  nav: {
    backgroundColor: '#017fef',
    height: 60,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  title: {
    color: '#fff',
  },
  scrollViewArea: {
    flex: 1,
    paddingVertical: 20,
  },
  contentHeader: {
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
  mainCard: {
    width: WIDTH_DEVICE - 130,
    height: 120,
    justifyContent: 'center',
    backgroundColor: '#00aeef',
    borderRadius: 5,
    marginRight: 10,
    elevation: 2,
  },
  listCard: {
    width: 115,
    height: 120,
    backgroundColor: '#00aeef',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleTop: {
    backgroundColor: '#017fef',
    width: 20,
    height: 10,
    position: 'absolute',
    right: 70,
    top: 0,
    borderBottomStartRadius: 50,
    borderBottomEndRadius: 50,
  },
  circleBottom: {
    backgroundColor: '#017fef',
    width: 20,
    height: 10,
    position: 'absolute',
    right: 70,
    bottom: 0,
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
  },
  contentMainCard: {
    paddingHorizontal: 20,
  },
  textCard: {
    color: '#fff',
    fontSize: 12,
  },
  iconSection: {
    width: 40,
    height: 40,
    backgroundColor: '#18b5f1',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  textIconSection: {
    color: '#fff',
    fontSize: 10,
    marginTop: 5,
    textDecorationLine: 'underline',
  },
  mainContent: {
    flex: 1,
    paddingVertical: 80,
    backgroundColor: '#ecf0f1',
  },
  mainText: {
    color: '#191919',
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  secondText: {
    color: '#191919',
    textAlign: 'center',
    fontSize: 12,
    marginBottom: 15,
  },
  linkText: {
    color: '#14b3ef',
    textAlign: 'center',
    fontSize: 13,
    fontWeight: 'bold',
  },
  textSection: {
    marginTop: 10,
  },
});
