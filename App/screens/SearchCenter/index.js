import React, {useContext, useState} from 'react';
import {ScrollView} from 'react-native';
import {SearchBar, Header} from '../../components';

import RenderList from '../../components/RenderList';
import MediaContext from '../../Context/MediaContext';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../constants';

const SearchCenterScreen = () => {
  const {data} = useContext(MediaContext);
  const [text, setText] = useState('');
  const navigation = useNavigation();

  const filterData = (list) => {
    return list.filter(
      (media) =>
        media.title.toLowerCase().includes(text.trim().toLowerCase()) ||
        media.address.toLowerCase().includes(text.trim().toLowerCase()),
    );
  };

  return (
    <>
      <Header title={'Localeyz'} />
      <ScrollView>
        <SearchBar
          autoCapitalize="none"
          autoCorrect={false}
          text={text}
          setText={(val) => setText(val)}
        />
        {data && (
          <RenderList
            data={filterData(data)}
            onPress={(id) => {
              navigation.navigate(Routes.Home, {id: id});
            }}
            imageType="square"
            descriptionType="address"
            listType="FindMediaCenters"
          />
        )}
      </ScrollView>
    </>
  );
};
export default SearchCenterScreen;
