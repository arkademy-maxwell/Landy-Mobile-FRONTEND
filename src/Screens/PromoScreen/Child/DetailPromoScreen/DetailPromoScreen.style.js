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

  // Content
  body: {
    padding: 15,
  },
  cardContent: {
    width: '100%',
    height: 'auto',
    backgroundColor: '#fff',
    paddingVertical: 20,
    borderRadius: 2,
  },
  lineTopText: {
    width: 53,
    height: 2,
    backgroundColor: '#14b3ef',
    marginBottom: 5,
  },
  textTitle: {
    fontSize: 20,
  },
  textDesc: {
    fontSize: 16,
    color: '#8d999a',
    marginVertical: 10,
  },
  textDescDetail: {
    fontSize: 12,
  },
  contentHead: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#8d999a',
  },
  contentBody: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#8d999a',
  },
  contentFooter: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
});
