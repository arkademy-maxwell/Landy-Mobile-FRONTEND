import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  cardParent: {
    padding: 10,
    elevation: 0,
    borderColor: 'white',
    borderBottomColor: '#e9e9e9',
  },
  title: {
    fontSize: 13,
    color: '#7f8c8d',
  },
  amount: {
    color: '#427f01',
  },
  wrapperChooseMethod: {
    padding: 10,
    elevation: 0,
    marginTop: 120,
    borderColor: 'white',
    borderBottomColor: '#e9e9e9',
    bottom: 0,
  },
  cancleIcon: {
    borderTopWidth: 1,
    borderColor: '#e9e9e9',
    marginTop: 20,
    paddingTop: 10,
  },
  payment: {
    padding: 15,
    borderRadius: 5,
    shadowOffset: {width: 5, height: 5},
    shadowColor: 'black',
    shadowOpacity: 0.6,
  },
});
export default styles;
