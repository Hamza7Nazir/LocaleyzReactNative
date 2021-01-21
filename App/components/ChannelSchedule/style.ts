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
  titleStyle: {
    fontSize: 18,
    width: 250,
  },
  clockIconStyle: {
    marginRight: 30,
    borderRightColor: Colors.white,
    borderRightWidth: 2,
    width: 45,
  },
  arrowIconStyle: {
    marginLeft: 30,
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 120,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: Colors.lightBlue,
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
