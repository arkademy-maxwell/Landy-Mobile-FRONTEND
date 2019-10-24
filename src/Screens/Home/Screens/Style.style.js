import {StyleSheet, Dimensions} from 'react-native';

const WIDTH_DEVICE = Dimensions.get('window').width;
const styles = StyleSheet.create({
  room: {
    margin: 10,
  },
  borderComponent: {
    borderBottomWidth: 1,
    borderColor: '#e8eaeb',
    paddingTop: 3,
    paddingBottom: 7,
  },
  buttonCariKamar: {
    backgroundColor: '#ffcb00',
    elevation: 0,
    marginTop: 10,
    borderRadius: 50,
    fontSize: 18,
    width: WIDTH_DEVICE - 40,
    height: 55,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  textCariKamar: {
    color: '#000',
    fontSize: 16,
  },
  // Input Box
  inputBoxItem: {
    marginVertical: 8,
  },
  inputBox: {
    flex: 1,
    flexDirection: 'row',
  },
  iconBox: {
    textAlignVertical: 'center',
    color: '#b0b8b9',
    paddingHorizontal: 18,
  },
  inputAreaBox: {
    flex: 1,
    borderBottomColor: '#b0b8b9',
    borderBottomWidth: 0.5,
  },
  titleBox: {
    color: '#b0b8b9',
    fontSize: 13,
    marginBottom: 5,
  },
  titleDesc: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 50,
    backgroundColor: '#1c9bd6',
    marginTop: 9,
    marginLeft: 4,
  },
});

export default styles;
