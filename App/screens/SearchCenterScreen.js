import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import SearchBar from '../components/SearchBar';
import api from '../components/api';
import {useQuery} from '@apollo/react-hooks';
import {RenderList} from '../components';

const SearchCenterScreen = () => {
  const [MediaCentersState, SetMediaCenters] = useState([]);
  const mediaCenters = useQuery(api.MEDIA_CENTERS_QUERY, {
    variables: {
      $lat: '',
      $long: '',
    },
  });

  useEffect(() => {
    if (mediaCenters.error) {
      console.log('Media Centers error ::', mediaCenters.error);
    }
    if (mediaCenters.data) {
      console.log('Media Center--- ', mediaCenters.data.organizations);
      SetMediaCenters(mediaCenters.data.organizations);
    }
  }, [mediaCenters.data, mediaCenters.error]);

  return (
    <View>
      <SearchBar />
      <RenderList item={MediaCentersState} />
    </View>
  );
};
export default SearchCenterScreen;
