import {StyleSheet} from 'react-native';

let videoAndTextWidth = 300;
let iconAndViewHeight = 30;
export default StyleSheet.create({
  headingStyle: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  iconCameraStyle: {
    fontSize: 35,
    marginRight: 15,
  },
  liveText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 15,
  },
  videoStyle: {
    borderRadius: 5,
    height: 200,
    width: videoAndTextWidth,
    marginRight: 8,
    flex: 1,
  },
  listTextStyle: {
    fontSize: 28,
    fontWeight: 'bold',
    width: videoAndTextWidth,
    left: 0,
    margin: 5,
    position: 'absolute',
    top: 130,
    color: '#fff',
  },
  listTextDetailStyle: {
    fontSize: 14,
    fontWeight: 'bold',
    width: videoAndTextWidth,
    left: 0,
    margin: 5,
    position: 'absolute',
    top: 165,
    color: '#fff',
  },
  iconOnImageStyle: {
    borderRadius: 45,
    height: iconAndViewHeight,
    width: 30,
  },
  iconViewStyle: {
    flexDirection: 'row',
    height: iconAndViewHeight,
    borderRadius: 45,
    left: 10,
    margin: 5,
    paddingRight: 8,
    position: 'absolute',
    alignItems: 'center',
    top: 15,
    backgroundColor: '#3b8dd1',
  },
  iconTextStyle: {
    paddingHorizontal: 4,
  },
  parentStyle: {
    marginHorizontal: 15,
    marginBottom: 35,
  },
});
