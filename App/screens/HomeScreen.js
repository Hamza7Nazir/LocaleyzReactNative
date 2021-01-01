import React from 'react';
import {ScrollView, Text, StyleSheet} from 'react-native';
import CenterComponent from '../components/FindCenter';

import {LatestEpisode, LiveNow, Heading, PodcastEpisode} from '../components';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  // const channelList = [];
  const channelList = [
    {
      key: 4,
      title: 'Brown Cat',
      detail: 'Yo tengo un FX Yo quiero dos FX',
      imageUrl: require('../assets/images/cat3.jpg'),
    },
    {
      key: 5,
      title: 'Big Cat',
      detail: 'Yo come pan',
      imageUrl: require('../assets/images/tiger1.jpg'),
    },
    {
      key: 6,
      title: 'Cat',
      detail: 'Yo come una manzana',
      imageUrl: require('../assets/images/cat2.jpg'),
    },
    {
      key: 7,
      title: 'Snap',
      detail: 'Important',
      imageUrl: require('../assets/images/snap.png'),
    },
  ];
  // const videos = [];
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
  // const radios = [];
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

  // const podcastList = [];
  const podcastList = [
    {
      key: 11,
      title: 'Theater in the Rouch - December this year',
      detail: 'Yo quiero una manazana',
      imageUrl: require('../assets/images/cat.jpg'),
    },
    {
      key: 12,
      title: '458 - SPACEHEADS 2020 VEHCILE ',
      detail: 'Yo quiero una manazana',
      imageUrl: require('../assets/images/cat3.jpg'),
    },
    {
      key: 13,
      detail: 'Debunking the myth of Historical Events',
      title: 'Flat Earth Invisible now',
      imageUrl: require('../assets/images/tiger1.jpg'),
    },
    {
      key: 14,
      detail: 'Alpha Bravo Charlie',
      title: 'Lorem Ipsum meow meow',
      imageUrl: require('../assets/images/cat3.jpg'),
    },
    {
      key: 15,
      detail: 'Alpha Bravo Charlie',
      title: 'Lorem Ipsum Lorem  Yo',
      imageUrl: require('../assets/images/tank2.jpg'),
    },
    {
      key: 16,
      detail: 'Alpha Bravo Charlie',
      title: 'Yo tengo un Gato',
      imageUrl: require('../assets/images/cat2.jpg'),
    },
  ];

  return (
    <ScrollView>
      {/* <Main Heading */}
      <Text style={style.headingStyle}>Your recent picks</Text>

      {/* Center Component */}
      <CenterComponent />

      {/* Latest Espisode section below */}
      <Heading iconName="videocam-1" headingName="Latest espisodes" />
      <LatestEpisode
        channelList={channelList}
        emptyMessage="latest episodes"
        onPress={(id) => {
          navigation.navigate('Video', {id: id});
          console.log('id:: ', id);
        }}
      />
      {/* Live Now Section below */}
      <Heading iconName="videocam-1" headingName="Live Now" />
      <LiveNow
        channelName="Channel5"
        emptyMessage="Live episodes"
        videos={videos}
        onPress={(id) => {
          navigation.navigate('Video', {id: id});
          console.log(id);
        }}
      />
      {/* Live Radio Section below */}
      <Heading iconName="signal" headingName="Live Radio" />
      <LiveNow
        channelName="106.5 FM"
        emptyMessage="Radios"
        videos={radios}
        onPress={(id) => {
          navigation.navigate('Video', {id: id});
          console.log(id);
        }}
      />
      <Heading iconName="signal" headingName="Latest podcast espisodes" />
      <PodcastEpisode
        podcastList={podcastList}
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
