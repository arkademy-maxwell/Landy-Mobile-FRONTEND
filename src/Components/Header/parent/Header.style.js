
import { Dimensions, StyleSheet } from 'react-native';

const HEIGHT_DEVICE = Dimensions.get('window').height;
const WIDTH_DEVICE = Dimensions.get('window').width;
const styles = StyleSheet.create({
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
})

export default styles