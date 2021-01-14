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
  dateStyle: {
    fontSize: 20,
  },
  iconStyle: {
    marginRight: 40,
  },
});
