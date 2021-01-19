import React, {useState, useEffect, useContext, useLayoutEffect} from 'react';
import {ScrollView, Text} from 'react-native';
import CenterComponent from '../../components/FindCenter';
import {
  LatestEpisode,
  LiveNow,
  Heading,
  PodcastEpisode,
  Header,
} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {useQuery} from '@apollo/react-hooks';
import MediaContext from '../../Context/MediaContext';
import {GetStorage, SetStorage, getImage} from '../../util';
import {Routes, Strings} from '../../constants';
import style from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Queries} from '../../api';

const HomeScreen = ({route}) => {
  const catId = route?.params?.id;
  const navigation = useNavigation();
  const [orgId, setOrgId] = useState();
  const [selectedOrgs, setSelectedOrgs] = useState([]);

  const {data, setData, setSelectedOrgId} = useContext(MediaContext);

  const [LatestEpisodes, SetLatestEpisodes] = useState([]);
  const [LiveNowState, SetLiveNow] = useState([]);
  const [LiveRadioState, SetLiveRadio] = useState([]);
  const [PodcastState, SetPodcasts] = useState([]);

  const thumbImage = getImage(data, orgId);

  const getVal = async () => {
    const idArr = await GetStorage(Strings.RecentlyViewed);

    let exist;

    idArr && (exist = idArr.find((item) => item === catId.toString()));

    if (!exist && catId) {
      const newArr = [];
      newArr.push(catId);

      setCurrentSelectedMedia(catId);
      setOrgId(catId);
      idArr && idArr[0] && newArr.push(idArr[0]);
      idArr && idArr[1] && newArr.push(idArr[1]);

      setSelectedOrgs(newArr);
      SetStorage(Strings.RecentlyViewed, newArr);
    }
  };
  const getFirstVal = async () => {
    const idArr = await GetStorage(Strings.RecentlyViewed);
    const current = await AsyncStorage.getItem(Strings.CurrentSelectedMediaId);

    setOrgId(current);
    setSelectedOrgs(idArr);
  };
  const setCurrentSelectedMedia = async (id) => {
    await AsyncStorage.setItem(Strings.CurrentSelectedMediaId, id);
  };
  useEffect(() => {
    getFirstVal();
  }, []);
  useEffect(() => {
    getVal();
  }, [catId]);

  const {data: episodeData, loading: episodeLoading} = useQuery(
    Queries.EPISODES_QUERY_FILTER,
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
    Queries.LIVE_VIDEOS_QUERY,
    {
      variables: {
        organizationId: orgId,
      },
    },
  );
  const {data: radioData, loading: radioLoading} = useQuery(
    Queries.ALL_RADIO_QUERY,
    {
      variables: {
        organizationId: orgId,
      },
    },
  );
  const {data: podcastData, loading: podcastLoading} = useQuery(
    Queries.ALL_PODCASTS_QUERY,
    {
      variables: {
        organizationId: orgId,
      },
    },
  );
  const {data: mediaData} = useQuery(Queries.MEDIA_CENTERS_QUERY, {
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
  }, [episodeData, liveData, radioData, podcastData, mediaData, setData]);

  return (
    <>
      <Header title={'Localeyz'} />
      <ScrollView style={style.pageStyle}>
        <Text style={style.headingStyle}>Your recent picks</Text>
        <CenterComponent
          OrgIds={selectedOrgs}
          selectedId={orgId}
          onPress1={() => navigation.navigate(Routes.SearchCenter)}
          onPress2={(id) => {
            setOrgId(id);
            setSelectedOrgId(id);
            setCurrentSelectedMedia(id);
          }}
        />

        <Heading iconName="videocam-1" headingName="Latest espisodes" />
        <LatestEpisode
          data={LatestEpisodes}
          thumbImage={thumbImage}
          loading={episodeLoading}
          emptyMessage="latest episodes"
          onPress={(id) => {
            navigation.navigate(Routes.Schedule, {id: id});
          }}
        />

        <Heading iconName="videocam-1" headingName="Live Now" />
        <LiveNow
          channelName="stations"
          thumbImage={thumbImage}
          loading={liveLoading}
          emptyMessage="Live episodes"
          data={LiveNowState}
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
          data={LiveRadioState}
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
    </>
  );
};

export default HomeScreen;
