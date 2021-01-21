import {StyleSheet} from 'react-native';
import {Colors} from '../../constants';
export default StyleSheet.create({
  parentStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginBottom: 35,
  },
  unselectedImageStyle: {
    borderColor: Colors.lightGrey,
    borderRadius: 45,
    borderWidth: 2,
    height: 50,
    width: 50,
  },
  selectedImageStyle: {
    borderColor: Colors.lightBlue,
    borderRadius: 45,
    borderWidth: 3,
    height: 50,
    width: 50,
  },

  viewImageStyle: {
    flexDirection: 'row',
    marginRight: 10,
  },
  iconStyle: {
    color: Colors.lightBlue,
    fontSize: 20,
  },
  touchableParentStyle: {
    alignItems: 'center',
    borderColor: Colors.lightBlue,
    borderRadius: 30,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 10,
    paddingHorizontal: 20,
  },
  textStyle: {
    color: Colors.lightBlue,
    fontSize: 20,
    fontFamily: 'Iowan Old Style',
  },
});
