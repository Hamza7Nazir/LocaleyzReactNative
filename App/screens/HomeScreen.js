import React from 'react';
import {ScrollView, Text, StyleSheet} from 'react-native';
import CenterComponent from '../components/FindCenter';

import {LatestEpisode, LiveNow, LiveRadio} from '../components';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const channelList = [
    {
      key: 4,
      title: 'Brown Cat',
      imageUrl: require('../assets/images/cat3.jpg'),
    },
    {
      key: 5,
      title: 'Big Cat',
      imageUrl: require('../assets/images/tiger1.jpg'),
    },
    {key: 6, title: 'Cat', imageUrl: require('../assets/images/cat2.jpg')},
    {key: 7, title: 'Snap', imageUrl: require('../assets/images/snap.png')},
  ];
  const videos = [
    {
      key: 1,
      detail: 'This is test',
      title: 'Telvue Connect HLS Invisible now',
      videoUrl: require('../assets/images/earthmoving.mp4'),
    },
    {
      key: 2,
      title: 'Access Framingham Invisible now',
      videoUrl: require('../assets/images/earthmoving.mp4'),
    },
    {
      key: 3,
      detail: 'This is a rare cat',
      title: 'Silver Cat Video',
      videoUrl: require('../assets/images/silvercat.mov'),
    },
  ];

  const radios = [
    {
      key: 1,
      title: 'A lion cub ',
      videoUrl: require('../assets/images/lioncub.mp4'),
    },
    {
      key: 3,
      title: 'Silver Cat Video',
      videoUrl: require('../assets/images/silvercat.mov'),
    },
    {
      key: 2,
      detail: 'Debunking the myth of spherical earth',
      title: 'Flat Earth Invisible now',
      videoUrl: require('../assets/images/earthmoving.mp4'),
    },
  ];
  return (
    <ScrollView>
      <Text style={style.headingStyle}>Your recent picks</Text>
      <CenterComponent />
      <LatestEpisode
        channelList={channelList}
        onPress={(id) => {
          navigation.navigate('Video', {id: id});
          console.log('id:: ', id);
        }}
      />
      <LiveNow
        iconName="videocam-1"
        headingName="Live now"
        channelName="Channel5"
        videos={videos}
        onPress={(id) => {
          navigation.navigate('Video', {id: id});
          console.log(id);
        }}
      />
      <LiveNow
        iconName="signal"
        headingName="Live Radio"
        channelName="106.5 FM"
        videos={radios}
        onPress={(id) => {
          navigation.navigate('Video', {id: id});
          console.log(id);
        }}
      />
    </ScrollView>
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
