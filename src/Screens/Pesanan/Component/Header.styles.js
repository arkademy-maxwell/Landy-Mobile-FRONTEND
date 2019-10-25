import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  dottedActive: {
    borderWidth: 1.5,
    borderStyle: 'dotted',
    width: 30,
    height: 30,
    borderRadius: 20,
    borderColor: 'white',
  },
  noticeActive: {
    color: 'white',
    fontSize: 14,
  },
  dotted: {
    borderWidth: 1.5,
    borderStyle: 'dotted',
    width: 30,
    height: 30,
    borderRadius: 20,
    borderColor: 'white',
    opacity: 0.5,
  },
  notice: {
    color: 'white',
    opacity: 0.5,
    fontSize: 14,
  },
  number: {
    textAlign: 'center',
    top: 5,
    color: 'white',
  },
});
export default styles;
