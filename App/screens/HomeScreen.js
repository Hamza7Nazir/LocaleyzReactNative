import React, {useState, useEffect, useContext} from 'react';
import {ScrollView, Text, StyleSheet} from 'react-native';
import CenterComponent from '../components/FindCenter';

import {LatestEpisode, LiveNow, Heading, PodcastEpisode} from '../components';
import {useNavigation} from '@react-navigation/native';

import api from '../components/api';
import {useQuery} from '@apollo/react-hooks';
import MediaContext from '../Context/MediaContext';
import {getImage} from '../util/getImage';

const HomeScreen = ({route}) => {
  const navigation = useNavigation();
  let queryId = '5';
  let catId = 0;
  if (route.params !== undefined) {
    catId = route.params;
    queryId = catId.id;
  }

  const {data, setData} = useContext(MediaContext);

  const thumbImage = getImage(data, queryId);

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
  const media = useQuery(api.MEDIA_CENTERS_QUERY, {
    variables: {
      $lat: '',
      $long: '',
    },
  });
  useEffect(() => {
    if (episode.error) {
      console.log('Episode error ::', episode.error);
    }
    if (live.error) {
      console.log('Live error ::', live.error);
    }
    if (radio.error) {
      console.log('Radio error ::', radio.error);
    }
    if (podcast.error) {
      console.log('Podcast error ::', podcast.error);
    }
    if (media.error) {
      console.log('media error ::', podcast.error);
    }
    //----------------------------------------------
    if (episode.data) {
      SetLatestEpisodes(episode.data.allEpisodes);
    }
    if (live.data) {
      SetLiveNow(live.data.onAirLiveVideosByOrganization);
    }
    if (radio.data) {
      SetLiveRadio(radio.data.radioByOrganization);
    }
    if (podcast.data) {
      SetPodcasts(podcast.data.podcastsByOrganization);
    }
    if (media.data) {
      setData(media.data.organizations);
    }

    //----------------------------------------------
  }, [
    episode.data,
    episode.error,
    live.data,
    live.error,
    radio.error,
    radio.data,
    podcast.error,
    podcast.data,
    media.data,
    media.error,
    setData,
  ]);

  return (
    <ScrollView>
      {/* <Main Heading */}
      <Text style={style.headingStyle}>Your recent picks</Text>

      {/* Center  */}
      <CenterComponent
        thumbImage={thumbImage}
        onPress={() => navigation.navigate('SearchCenter')}
      />

      {/* Latest Espisode */}
      <Heading iconName="videocam-1" headingName="Latest espisodes" />
      <LatestEpisode
        channelList={LatestEpisodes}
        thumbImage={thumbImage}
        loading={episode.loading}
        emptyMessage="latest episodes"
        onPress={(id) => {
          console.log('id', id);
          navigation.navigate('Video', {id: id});
        }}
      />
      {/* Live Now */}
      <Heading iconName="videocam-1" headingName="Live Now" />
      <LiveNow
        channelName="stations"
        thumbImage={thumbImage}
        loading={live.loading}
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
        channelName="station"
        thumbImage={thumbImage}
        loading={radio.loading}
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
        loading={podcast.loading}
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
