import {StyleSheet} from 'react-native';
import {Colors} from '../../constants';
export default StyleSheet.create({
  parentStyle: {
    justifyContent: 'flex-start',
    marginHorizontal: 15,
    flexDirection: 'row',
    backgroundColor: Colors.veryLightGrey,
    borderRadius: 6,
    alignItems: 'center',
    margin: 8,
    padding: 5,
  },
  dateStyle: {
    fontSize: 18,
  },
  iconStyle: {
    marginRight: 40,
  },
  popUpStyle: {},
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: Colors.Blue,
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: Colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
