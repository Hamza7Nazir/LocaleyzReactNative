import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  parentStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginBottom: 35,
  },
  imageStyle: {
    borderColor: '#34b7eb',
    borderRadius: 45,
    borderWidth: 2,
    height: 50,
    width: 50,
  },
  viewImageStyle: {
    flexDirection: 'row',
    marginRight: 10,
  },
  iconStyle: {
    color: '#34b7eb',
    fontSize: 20,
  },
  touchableParentStyle: {
    alignItems: 'center',
    borderColor: '#34b7eb',
    borderRadius: 30,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 10,
    paddingHorizontal: 20,
  },
  textStyle: {
    color: '#34b7eb',
    fontSize: 20,
    fontFamily: 'Iowan Old Style',
  },
});
