import React, {useState, useEffect, useContext} from 'react';
import {ScrollView, Text, StyleSheet} from 'react-native';
import CenterComponent from '../../components/FindCenter';
import {
  LatestEpisode,
  LiveNow,
  Heading,
  PodcastEpisode,
} from '../../components';
import {useNavigation} from '@react-navigation/native';
import api from '../../APIs/Queries';
import {useQuery} from '@apollo/react-hooks';
import MediaContext from '../../Context/MediaContext';
import {GetStorage, SetStorage, getImage} from '../../util';
import {Routes} from '../../util';
import style from './style';

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [catId]);

  const {data, setData} = useContext(MediaContext);

  const [LatestEpisodes, SetLatestEpisodes] = useState([]);
  const [LiveNowState, SetLiveNow] = useState([]);
  const [LiveRadioState, SetLiveRadio] = useState([]);
  const [PodcastState, SetPodcasts] = useState([]);

  const {data: episodeData, loading: episodeLoading} = useQuery(
    api.EPISODES_QUERY_FILTER,
    {
      variables: {
        limit: 10,
        offset: 10,
        searchQuery: '',
        dateQuery: '',
        organizationId: orgId,
      },
    },
  );
  const {data: liveData, loading: liveLoading} = useQuery(
    api.LIVE_VIDEOS_QUERY,
    {
      variables: {
        organizationId: orgId,
      },
    },
  );
  const {data: radioData, loading: radioLoading} = useQuery(
    api.ALL_RADIO_QUERY,
    {
      variables: {
        organizationId: orgId,
      },
    },
  );
  const {data: podcastData, loading: podcastLoading} = useQuery(
    api.ALL_PODCASTS_QUERY,
    {
      variables: {
        organizationId: orgId,
      },
    },
  );
  const {data: mediaData} = useQuery(api.MEDIA_CENTERS_QUERY, {
    variables: {
      $lat: '',
      $long: '',
    },
  });
  useEffect(() => {
    if (episodeData) {
      SetLatestEpisodes(episodeData.allEpisodes);
    }
    if (liveData) {
      SetLiveNow(liveData.onAirLiveVideosByOrganization);
    }
    if (radioData) {
      SetLiveRadio(radioData.radioByOrganization);
    }
    if (podcastData) {
      SetPodcasts(podcastData.podcastsByOrganization);
    }
    if (mediaData) {
      setData(mediaData.organizations);
    }
    //----------------------------------------------
  }, [episodeData, liveData, radioData, podcastData, mediaData, setData]);

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
    <ScrollView style={style.pageStyle}>
      <Text style={style.headingStyle}>Your recent picks</Text>

      <CenterComponent
        thumbImage={TImages}
        onPress1={() => navigation.navigate(Routes.SearchCenter)}
        onPress2={(id) => setOrgId(id)}
      />

      <Heading iconName="videocam-1" headingName="Latest espisodes" />
      <LatestEpisode
        channelList={LatestEpisodes}
        thumbImage={thumbImage}
        loading={episodeLoading}
        emptyMessage="latest episodes"
        onPress={(id) => {
          navigation.navigate(Routes.Video, {id: id});
        }}
      />

      <Heading iconName="videocam-1" headingName="Live Now" />
      <LiveNow
        channelName="stations"
        thumbImage={thumbImage}
        loading={liveLoading}
        emptyMessage="Live episodes"
        videos={LiveNowState}
        onPress={(id) => {
          navigation.navigate(Routes.Video, {id: id});
        }}
      />

      <Heading iconName="signal" headingName="Live Radio" />
      <LiveNow
        channelName="station"
        thumbImage={thumbImage}
        loading={radioLoading}
        emptyMessage="Radios"
        videos={LiveRadioState}
        onPress={(id) => {
          navigation.navigate(Routes.Video, {id: id});
        }}
      />

      <Heading iconName="signal" headingName="Latest podcast espisodes" />
      <PodcastEpisode
        podcastList={PodcastState}
        loading={podcastLoading}
        onPress={(id) => {
          navigation.navigate(Routes.Video, {id: id});
        }}
      />
    </ScrollView>
  );
};

export default HomeScreen;
