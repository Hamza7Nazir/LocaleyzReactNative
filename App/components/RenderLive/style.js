import {StyleSheet} from 'react-native';
import {Colors} from '../../constants';
let videoAndTextWidth = 300;
let iconAndViewHeight = 30;
export default StyleSheet.create({
  listBlockStyle: {
    alignItems: 'flex-start',
    marginRight: 8,
  },
  imageStyle: {
    borderRadius: 10,
    height: 110,
    width: 100,
  },
  iconOnImageStyleEpisode: {
    borderRadius: 45,
    height: 25,
    left: 0,
    margin: 5,
    position: 'absolute',
    top: 0,
    width: 25,
  },
  listTextStyleEpisode: {
    fontSize: 18,
    fontWeight: 'bold',
    width: 100,
  },
  headingStyle: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  spinnerStyle: {
    height: 110,
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
  listTextStyleLive: {
    fontSize: 28,
    fontWeight: 'bold',
    width: videoAndTextWidth,
    left: 0,
    margin: 5,
    position: 'absolute',
    top: 120,
    color: Colors.white,
  },
  listDetailStyle: {
    width: 100,
    color: Colors.Grey,
  },
  listTextDetailStyleLive: {
    fontSize: 14,
    fontWeight: 'bold',
    width: videoAndTextWidth,
    left: 0,
    margin: 5,
    position: 'absolute',
    top: 155,
    color: Colors.white,
  },
  iconOnImageStyleLive: {
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
    marginRight: 60,
    paddingRight: 8,
    position: 'absolute',
    alignItems: 'center',
    top: 15,
    backgroundColor: Colors.Blue,
  },
  iconTextStyle: {
    paddingHorizontal: 4,
  },
  parentStyle: {
    marginHorizontal: 15,
    marginBottom: 35,
  },
  ifIconCameraStyle: {
    fontSize: 500,
    margin: 100,
  },
  ifViewStyle: {
    margin: 100,
    alignItems: 'center',
  },
  ifTextStyle: {
    color: Colors.Grey,
  },
});
