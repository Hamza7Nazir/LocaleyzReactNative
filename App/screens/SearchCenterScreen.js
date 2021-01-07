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
    <MediaContext.Consumer>
      {(value) => (
        <ScrollView>
          <SearchBar />
          <RenderList
            data={data}
            onPress={(id) => {
              console.log('id', id);
              navigation.navigate('Home', {id: id});
              // Passing organization Id to home screen
            }}
            imageType="square"
            descriptionType="address"
            listType="FindMediaCenters"
          />
        </ScrollView>
      )}
    </MediaContext.Consumer>
  );
};
export default SearchCenterScreen;
