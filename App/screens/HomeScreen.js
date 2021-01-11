import React, {useState, useEffect, useContext} from 'react';
import {ScrollView, Text, StyleSheet} from 'react-native';
import CenterComponent from '../components/FindCenter';

import {LatestEpisode, LiveNow, Heading, PodcastEpisode} from '../components';
import {useNavigation} from '@react-navigation/native';

import api from '../components/api';
import {useQuery} from '@apollo/react-hooks';
import MediaContext from '../Context/MediaContext';
import {GetStorage, SetStorage, getImage} from '../util';

const HomeScreen = ({route}) => {
  const navigation = useNavigation();
  const [Qid, SetQid] = useState({
    id1: '1',
    id2: '1',
    id3: '1',
  });
  let obj = {};
  let catId = '';
  if (route.params !== undefined) {
    catId = route.params;
  }
  const [Counter, SetCounter] = useState(1);

  useEffect(() => {
    GetStorage('id', SetQid);
    if (catId !== '') {
      if (Counter === 1) {
        obj.id1 = catId;
        obj.id2 = Qid.id2;
        obj.id3 = Qid.id3;

        SetCounter(Counter + 1);
      }
      if (Counter === 2) {
        obj.id1 = Qid.id1;
        obj.id2 = catId;
        obj.id3 = Qid.id3;

        SetCounter(Counter + 1);
      }
      if (Counter === 3) {
        obj.id1 = Qid.id1;
        obj.id2 = Qid.id2;
        obj.id3 = catId;

        SetCounter(1);
      }

      SetStorage('id', obj);
    }

    // if navigating from Search screen then setStorage
  }, [catId]);

  // useEffect(() => {
  //   GetStorage('id', SetQid);
  // }, [catId]); // if navigated from Search screen then fetch new id

  console.log('Qid is ::::', Qid);

  //-------------------------------------------------------------------
  // const [Qid, SetQid] = useState(0);

  // let catId = 0;
  // if (route.params !== undefined) {
  //   catId = route.params;
  //   SetStorage('id', catId); // if navigating from Search screen then setStorage
  // }

  // useEffect(() => {
  //   GetStorage('id', SetQid);
  // }, [catId]); // if navigated from Search screen then fetch new id

  // console.log('Qid is ::::', Qid);

  const {data, setData} = useContext(MediaContext);

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
      organizationId: Qid.id1.id,
    },
  });
  const live = useQuery(api.LIVE_VIDEOS_QUERY, {
    variables: {
      organizationId: Qid.id1.id,
    },
  });
  const radio = useQuery(api.ALL_RADIO_QUERY, {
    variables: {
      organizationId: Qid.id1.id,
    },
  });
  const podcast = useQuery(api.ALL_PODCASTS_QUERY, {
    variables: {
      organizationId: Qid.id1.id,
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
      console.log('Episode', episode.data.allEpisodes);
      SetLatestEpisodes(episode.data.allEpisodes);
    }
    if (live.data) {
      console.log('Live', live.data.onAirLiveVideosByOrganization);
      SetLiveNow(live.data.onAirLiveVideosByOrganization);
    }
    if (radio.data) {
      console.log('Radio', radio.data.radioByOrganization);
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

  const thumbImage = getImage(data, Qid.id1.id);
  const thumbImage1 = getImage(data, Qid.id2.id);
  const thumbImage2 = getImage(data, Qid.id3.id);
  let TImages = [
    {id: 1, image: thumbImage1},
    {id: 2, image: thumbImage},
    {id: 3, image: thumbImage2},
  ];

  return (
    <ScrollView>
      {/* <Main Heading */}
      <Text style={style.headingStyle}>Your recent picks</Text>

      {/* Center  */}
      <CenterComponent
        thumbImage={TImages}
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
