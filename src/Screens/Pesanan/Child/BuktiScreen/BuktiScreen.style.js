import {Dimensions, StyleSheet} from 'react-native';

const HEIGHT_DEVICE = Dimensions.get('window').height;
const WIDTH_DEVICE = Dimensions.get('window').width;
export const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  nav: {
    backgroundColor: '#017fef',
    height: 60,
    flexDirection: 'row',
  },
  iconNav: {
    textAlignVertical: 'center',
    marginHorizontal: 20,
    color: '#fff',
    fontSize: 20,
  },
  title: {
    color: '#fff',
    textAlignVertical: 'center',
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  mainText: {
    color: '#191919',
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  secondText: {
    color: '#191919',
    textAlign: 'center',
    fontSize: 12,
  },
  buttonAction: {
    width: 'auto',
    backgroundColor: '#ffcb00',
    borderRadius: 50,
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: 30,
  },
  textSection: {
    marginTop: 10,
  },
});
