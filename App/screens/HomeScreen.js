import React, {useState, useEffect} from 'react';
import {ScrollView, Text, StyleSheet} from 'react-native';
import CenterComponent from '../components/FindCenter';

import {LatestEpisode, LiveNow, Heading, PodcastEpisode} from '../components';
import {useNavigation} from '@react-navigation/native';

import api from '../components/api';
import {useQuery} from '@apollo/react-hooks';

const HomeScreen = () => {
  const navigation = useNavigation();
  let queryId = 5;
  const [LatestEpisodes, SetLatestEpisodes] = useState([]);
  const [LiveNowState, SetLiveNow] = useState([]);
  const [LiveRadioState, SetLiveRadio] = useState([]);
  const [PodcastState, SetPodcasts] = useState([]);

  const episode = useQuery(api.EPISODES_QUERY_FILTER, {
    variables: {
      limit: 10,
      offset: 10,
      searchQuery: '',
      dateQuery: '',
      organizationId: queryId.toString(),
    },
  });
  const live = useQuery(api.LIVE_VIDEOS_QUERY, {
    variables: {
      organizationId: queryId.toString(),
    },
  });
  const radio = useQuery(api.ALL_RADIO_QUERY, {
    variables: {
      organizationId: queryId.toString(),
    },
  });
  const podcast = useQuery(api.ALL_PODCASTS_QUERY, {
    variables: {
      organizationId: queryId.toString(),
    },
  });

  useEffect(() => {
    if (episode.error) {
      console.log('error ::', episode.error);
    }
    if (live.error) {
      console.log('error ::', live.error);
    }
    if (radio.error) {
      console.log('error ::', radio.error);
    }
    if (podcast.error) {
      console.log('error ::', podcast.error);
    }
    //----------------------------------------------
    if (episode.data) {
      console.log(episode.data);
      SetLatestEpisodes(episode.data.allEpisodes);
    }
    if (live.data) {
      console.log(live.data.onAirLiveVideosByOrganization);
      SetLiveNow(live.data.onAirLiveVideosByOrganization);
    }
    if (radio.data) {
      console.log(radio.data.radioByOrganization);
      SetLiveRadio(radio.data.radioByOrganization);
    }
    if (podcast.data) {
      console.log(podcast.data.podcastsByOrganization);
      SetPodcasts(podcast.data.podcastsByOrganization);
    }
  }, [
    episode.data,
    episode.error,
    live.data,
    live.error,
    radio.error,
    radio.data,
    podcast.error,
    podcast.data,
  ]);

  //  const channelList = [];
  // const channelList = [
  //   {
  //     key: 4,
  //     title: 'Brown Cat',
  //     description: 'Yo tengo un FX Yo quiero dos FX',
  //     url: require('../assets/images/cat3.jpg'),
  //   },
  //   {
  //     key: 5,
  //     title: 'Big Cat',
  //     description: 'Yo come pan',
  //     url: require('../assets/images/tiger1.jpg'),
  //   },
  //   {
  //     key: 6,
  //     title: 'Cat',
  //     description: 'Yo come una manzana',
  //     url: require('../assets/images/cat2.jpg'),
  //   },
  //   {
  //     key: 7,
  //     title: 'Snap',
  //     description: 'Important',
  //     url: require('../assets/images/snap.png'),
  //   },
  // ];

  // const videos = [];
  // const videos = [
  //   {
  //     id: 1,
  //     description: 'This is test',
  //     title: 'Telvue Connect HLS Invisible now',
  //     streamUrl: require('../assets/images/earthmoving.mp4'),
  //   },
  //   {
  //     id: 2,
  //     title: 'Access Framingham Invisible now',
  //     streamUrl: require('../assets/images/earthmoving.mp4'),
  //   },
  //   {
  //     id: 3,
  //     description: 'This is a rare cat',
  //     title: 'Silver Cat Video',
  //     streamUrl: require('../assets/images/silvercat.mov'),
  //   },
  // ];
  // const radios = [];
  // const radios = [
  //   {
  //     id: 1,
  //     title: 'A lion cub ',
  //     videoUrl: require('../assets/images/lioncub.mp4'),
  //   },
  //   {
  //     id: 3,
  //     title: 'Silver Cat Video',
  //     videoUrl: require('../assets/images/silvercat.mov'),
  //   },
  //   {
  //     id: 2,
  //     description: 'Debunking the myth of spherical earth',
  //     title: 'Flat Earth Invisible now',
  //     videoUrl: require('../assets/images/earthmoving.mp4'),
  //   },
  // ];

  // const podcastList = [];
  // const podcastList = [
  //   {
  //     id: 11,
  //     title: 'Theater in the Rouch - December this year',
  //     description: 'Yo quiero una manazana',
  //     image: require('../assets/images/cat.jpg'),
  //   },
  //   {
  //     id: 12,
  //     title: '458 - SPACEHEADS 2020 VEHCILE ',
  //     description: 'Yo quiero una manazana',
  //     image: require('../assets/images/cat3.jpg'),
  //   },
  //   {
  //     id: 13,
  //     description: 'Debunking the myth of Historical Events',
  //     title: 'Flat Earth Invisible now',
  //     image: require('../assets/images/tiger1.jpg'),
  //   },
  //   {
  //     id: 14,
  //     description: 'Alpha Bravo Charlie',
  //     title: 'Lorem Ipsum meow meow',
  //     image: require('../assets/images/cat3.jpg'),
  //   },
  //   {
  //     id: 15,
  //     description: 'Alpha Bravo Charlie',
  //     title: 'Lorem Ipsum Lorem  Yo',
  //     image: require('../assets/images/tank2.jpg'),
  //   },
  //   {
  //     id: 16,
  //     description: 'Alpha Bravo Charlie',
  //     title: 'Yo tengo un Gato',
  //     image: require('../assets/images/cat2.jpg'),
  //   },
  // ];

  return (
    <ScrollView>
      {/* <Main Heading */}
      <Text style={style.headingStyle}>Your recent picks</Text>

      {/* Center  */}
      <CenterComponent />

      {/* Latest Espisode */}
      <Heading iconName="videocam-1" headingName="Latest espisodes" />
      <LatestEpisode
        channelList={LatestEpisodes}
        emptyMessage="latest episodes"
        onPress={(id) => {
          console.log('id', id);
          navigation.navigate('Video', {id: id});
        }}
      />
      {/* Live Now */}
      <Heading iconName="videocam-1" headingName="Live Now" />
      <LiveNow
        channelName="Channel5"
        emptyMessage="Live episodes"
        videos={LiveNowState}
        onPress={(id) => {
          navigation.navigate('Video', {id: id});
          console.log(id);
        }}
      />
      {/* Live Radio*/}
      <Heading iconName="signal" headingName="Live Radio" />
      <LiveNow
        channelName="106.5 FM"
        emptyMessage="Radios"
        videos={LiveRadioState}
        onPress={(id) => {
          navigation.navigate('Video', {id: id});
          console.log(id);
        }}
      />
      {/* Latest Podcast */}
      <Heading iconName="signal" headingName="Latest podcast espisodes" />
      <PodcastEpisode
        podcastList={PodcastState}
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
