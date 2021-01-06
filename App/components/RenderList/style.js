import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  parentStyle: {
    marginHorizontal: 15,
    marginBottom: 30,
  },
  listBarStyle: {
    borderWidth: 1,
    borderColor: '#c9c8c5',
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  mediaCenterStyle: {
    marginBottom: 5,
    borderWidth: 0,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 2,
  },
  imageStyle: {
    height: 40,
    width: 40,
    borderRadius: 45,
    borderColor: '#34b7eb',
    borderWidth: 1,
  },
  textWrap: {
    padding: 5,
    paddingLeft: 15,
    width: 280,
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  detailStyle: {
    fontSize: 14,
    color: '#b5b2a8',
  },
  iconCameraStyle: {
    paddingLeft: 20,
    marginLeft: 15,
  },
});
