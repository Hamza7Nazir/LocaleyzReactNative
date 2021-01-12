import React, {useContext, useState} from 'react';
import {ScrollView} from 'react-native';
import SearchBar from '../../components/SearchBar';

import RenderList from '../../components/RenderList';
import MediaContext from '../../Context/MediaContext';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../util';

const SearchCenterScreen = () => {
  const {data} = useContext(MediaContext);
  const [text, setText] = useState('');
  const navigation = useNavigation();

  return (
    <ScrollView>
      <SearchBar
        autoCapitalize="none"
        autoCorrect={false}
        text={text}
        setText={(val) => setText(val)}
      />
      {data && (
        <RenderList
          data={
            text === undefined || text === ''
              ? data
              : data.filter((media) => {
                  return (
                    media.title
                      .toLowerCase()
                      .includes(text.trim().toLowerCase()) ||
                    media.address
                      .toLowerCase()
                      .includes(text.trim().toLowerCase())
                  );
                })
          }
          onPress={(id) => {
            navigation.navigate(Routes.Home, {id: id});
          }}
          imageType="square"
          descriptionType="address"
          listType="FindMediaCenters"
        />
      )}
    </ScrollView>
  );
};
export default SearchCenterScreen;
