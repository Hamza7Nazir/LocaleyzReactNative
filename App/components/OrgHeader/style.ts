import {StyleSheet} from 'react-native';
import {Colors} from '../../constants';
export default StyleSheet.create({
  imageStyle: {
    height: 30,
    width: 30,
    marginRight: 5,
    borderRadius: 45,
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
    fontSize: 21,
  },
  iconTextViewStyle: {
    borderColor: Colors.lightBlue,
    borderWidth: 1,
    borderRadius: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 5,
    paddingHorizontal: 10,
  },
});
