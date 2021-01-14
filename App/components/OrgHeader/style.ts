import {StyleSheet} from 'react-native';
import {Colors} from '../../constants';
export default StyleSheet.create({
  imageStyle: {
    height: 30,
    width: 30,
    marginRight: 5,
  },
  parentStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
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
