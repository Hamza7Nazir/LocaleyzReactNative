import React, {useContext} from 'react';
import {ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';

import RenderList from '../components/RenderList';
import MediaContext from '../Context/MediaContext';
import {useNavigation} from '@react-navigation/native';

const SearchCenterScreen = () => {
  const {data} = useContext(MediaContext);
  const navigation = useNavigation();

  return (
    <ScrollView>
      <SearchBar />
      <RenderList
        data={data}
        onPress={(id) => {
          console.log('id', id);
          navigation.navigate('Home', {id: id});
        }}
        imageType="square"
        descriptionType="address"
        listType="FindMediaCenters"
      />
    </ScrollView>
  );
};
export default SearchCenterScreen;
