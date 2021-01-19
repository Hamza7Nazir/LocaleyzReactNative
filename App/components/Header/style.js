import {StyleSheet} from 'react-native';
import {Colors} from '../../constants';
export default StyleSheet.create({
  imageStyle: {
    height: 30,
    width: 30,
  },
  parentStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    height: 50,
    backgroundColor: Colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textStyle: {
    fontFamily: 'sans-serif-condensed',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
