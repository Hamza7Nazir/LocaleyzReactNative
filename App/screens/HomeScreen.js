import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CenterComponent from '../components/FindCenter/CenterComponent';
// import FontTelloIcon from '../components/FontTelloIcon';
import LatestEpisodeComponent from '../components/LatestEpisode/LatestEpisodeComponent';
import LiveNowComponent from '../components/LiveNow/LiveNowComponent';

const HomeScreen = () => {
  return (
    <View>
      <Text style={style.headingStyle}>Your recent picks</Text>
      <CenterComponent />
      <LatestEpisodeComponent />
      <LiveNowComponent />
      {/* <FontTelloIcon name={'glass'} color={'#3496eb'} size={35} /> */}
    </View>
  );
};
const style = StyleSheet.create({
  headingStyle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginHorizontal: 15,
    marginVertical: 15,
  },
});

export default HomeScreen;
