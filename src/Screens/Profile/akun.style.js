import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  marginTop: {
    marginTop: 1,
  },
  profile: {
    width: 100,
    height: 100,
    backgroundColor: '#00aeef',
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 30,
    overflow: 'hidden',
    position: 'relative',
    borderWidth: 2,
    borderColor: '#0184ef',
  },
  imageProfile: {
    position: 'absolute',
    width: 100,
    height: 100,
  },
  editProfile: {
    position: 'absolute',
    right: 100,
    bottom: 20,
  },
  buttonSimpan: {
    elevation: 0,
    borderRadius: 20,
    backgroundColor: '#fff6d6',
    marginTop: 30,
    marginBottom: 30,
  },
  outIcon: {
    alignSelf: 'flex-end',
    color: '#00aeef',
    fontSize: 27,
  },
  outText: {
    marginTop: 5,
    marginLeft: 5,
    color: '#00aeef',
    fontSize: 18,
  },
});
export default styles;
