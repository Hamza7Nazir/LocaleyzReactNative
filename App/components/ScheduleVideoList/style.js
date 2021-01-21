import {StyleSheet} from 'react-native';
import {Colors} from '../../constants';
export default StyleSheet.create({
  parentStyle: {
    flexDirection: 'row',
    marginHorizontal: 15,
  },
  iconStyle: {
    left: 330,
    top: 20,
    position: 'absolute',
  },
  PlayingtimeStyle: {
    borderLeftColor: Colors.lightBlue,
  },
  timeStyle: {
    borderBottomColor: Colors.lightGrey,
    borderTopColor: Colors.lightGrey,
    borderRightColor: Colors.lightGrey,
    borderLeftColor: Colors.lightGrey,
    borderWidth: 1,
    borderRightWidth: 0,
    borderTopWidth: 0,
    alignSelf: 'center',
    padding: 5,
    width: 50,
    height: 76,
  },
  doubleBorderStyle: {
    borderColor: Colors.lightGrey,
    borderWidth: 1,
    borderTopWidth: 0,
    flex: 1,
  },
  playingdetailStyle: {
    borderColor: Colors.lightBlue,
  },
  detailStyle: {
    borderColor: Colors.lightGrey, // light blue when selected
    borderWidth: 1,
    borderRadius: 5,
    flex: 1,
    margin: 10,
    paddingLeft: 10,
    paddingVertical: 5,
  },
  mainHeadingStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    width: 250,
  },
  descriptionStyle: {
    fontSize: 14,
    color: Colors.lightGrey,
  },
});
