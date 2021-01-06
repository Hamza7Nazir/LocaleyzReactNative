import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import api from '../components/api';
import {useQuery} from '@apollo/react-hooks';
import RenderList from '../components/RenderList';
import LoadingSpinner from '../components/LoadingSpinner';

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
  console.log('Media Center obj--- ', MediaCentersState);

  if (MediaCentersState === null) {
    return <LoadingSpinner />;
  }
  return (
    <ScrollView>
      <SearchBar />
      <RenderList
        data={MediaCentersState}
        onPress={(id) => console.log('Media with Id is pressed', id)}
        imageType="square"
        descriptionType="address"
        listType="FindMediaCenters"
      />
    </ScrollView>
  );
};
export default SearchCenterScreen;
