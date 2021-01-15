import {StyleSheet} from 'react-native';
import {Colors} from '../../constants';
export default StyleSheet.create({
  parentStyle: {
    justifyContent: 'flex-start',

    flexDirection: 'row',
    backgroundColor: Colors.veryLightGrey,
    borderRadius: 6,
    alignItems: 'center',
    margin: 8,
    padding: 5,
  },
  titleStyle: {
    fontSize: 18,
    width: 250,
  },
  clockIconStyle: {
    marginRight: 30,

    borderRightColor: Colors.white,
    borderRightWidth: 2,
    width: 40,
  },
  arrowIconStyle: {
    marginLeft: 30,
  },
});
