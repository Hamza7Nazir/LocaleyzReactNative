import React, {useState, useEffect, useContext} from 'react';
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
import api from '../../api/Queries';
import {useQuery} from '@apollo/react-hooks';
import MediaContext from '../../Context/MediaContext';
import {GetStorage, SetStorage, getImage} from '../../util';
import {Routes, Strings} from '../../constants';
import style from './style';

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

  const getVal = async () => {
    const idArr = await GetStorage(Strings.RecentlyViewed);

    let exist;

    idArr && (exist = idArr.find((item) => item === catId.toString()));

    if (!exist && catId) {
      const newArr = [];
      newArr.push(catId);
      idArr && idArr[0] && newArr.push(idArr[0]);
      idArr && idArr[1] && newArr.push(idArr[1]);

      setSelectedOrgs(newArr);
      SetStorage(Strings.RecentlyViewed, newArr);
      console.log('new Arr is =', newArr);
    }
  };
  const getFirstVal = async () => {
    const idArr = await GetStorage(Strings.RecentlyViewed);
    setSelectedOrgs(idArr);
  };
  useEffect(() => {
    getFirstVal();
  });
  useEffect(() => {
    getVal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [catId]);

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

  const thumbImage = getImage(data, orgId);

  // navigation.setOptions({
  //   header: () => <Header title={'Localeyz'} />,
  // });

  // HomeScreen.defaultNavigationOptions = () => {
  //   /// Adding something in the header of the app
  //   return {
  //     headerLeft: () => <Text>Right</Text>,
  //   };
  // };
  return (
    <ScrollView style={style.pageStyle}>
      <Text style={style.headingStyle}>Your recent picks</Text>

      <CenterComponent
        OrgIds={selectedOrgs}
        selectedId={orgId}
        onPress1={() => navigation.navigate(Routes.SearchCenter)}
        onPress2={(id) => {
          setOrgId(id);
          setSelectedOrgId(id);
        }}
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
