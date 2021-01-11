import React, {useState, useEffect, useContext} from 'react';
import {ScrollView, Text, StyleSheet} from 'react-native';
import CenterComponent from '../components/FindCenter';

import {LatestEpisode, LiveNow, Heading, PodcastEpisode} from '../components';
import {useNavigation} from '@react-navigation/native';

import api from '../APIs/Queries';
import {useQuery} from '@apollo/react-hooks';
import MediaContext from '../Context/MediaContext';
import {GetStorage, SetStorage, getImage} from '../util';

const HomeScreen = ({route}) => {
  const navigation = useNavigation();
  const [Counter, SetCounter] = useState(1);
  const [orgId, setOrgId] = useState();
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

  console.log('Qid is ::::', Qid);

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
      organizationId: orgId,
    },
  });
  const live = useQuery(api.LIVE_VIDEOS_QUERY, {
    variables: {
      organizationId: orgId,
    },
  });
  const radio = useQuery(api.ALL_RADIO_QUERY, {
    variables: {
      organizationId: orgId,
    },
  });
  const podcast = useQuery(api.ALL_PODCASTS_QUERY, {
    variables: {
      organizationId: orgId,
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
      console.log('Podcast', podcast.data.podcastsByOrganization);
      SetPodcasts(podcast.data.podcastsByOrganization);
    }
    if (media.data) {
      console.log('Media', media.data.organizations);
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

  const img1 = getImage(data, Qid.id1.id);
  const img2 = getImage(data, Qid.id2.id);
  const img3 = getImage(data, Qid.id3.id);
  let TImages = [
    {id: Qid.id1.id, image: img1},
    {id: Qid.id2.id, image: img2},
    {id: Qid.id3.id, image: img3},
  ];
  const thumbImage = getImage(data, orgId);
  return (
    <ScrollView>
      <Text style={style.headingStyle}>Your recent picks</Text>

      <CenterComponent
        thumbImage={TImages}
        onPress1={() => navigation.navigate('SearchCenter')}
        onPress2={(id) => setOrgId(id)}
      />

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
