import {Dimensions, StyleSheet} from 'react-native';

const HEIGHT_DEVICE = Dimensions.get('window').height;
const WIDTH_DEVICE = Dimensions.get('window').width;
export const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#ecf0f1',
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
  // Header Style
  headSlider: {
    width: '100%',
    height: 260,
    padding: 15,
    elevation: 2,
    backgroundColor: '#fff',
  },
  paginationCurrent: {
    color: '#fff',
  },
  paginationTotal: {
    color: '#fff',
  },
  paginationBox: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    width: 50,
    height: 30,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 20,
    right: 20,
  },

  // Content
  section: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  lineTopText: {
    width: 47,
    height: 2,
    backgroundColor: 'red',
  },
  textSection: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  listCard: {
    backgroundColor: '#fff',
    width: '100%',
    height: 250,
    marginBottom: 20,
    borderRadius: 5,
    elevation: 2,
  },
  textHeader: {
    alignItems: 'center',
    paddingTop: 8,
  },
  textPromo: {
    fontSize: 12,
  },
  textDatePromo: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  imageCard: {
    padding: 10,
  },
});
