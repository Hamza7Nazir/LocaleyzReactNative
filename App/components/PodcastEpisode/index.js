import React from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';

import LoadingSpinner from '../LoadingSpinner';
import NotFound from '../NotFound';
import style from './style';
import RenderList from '../RenderList';

const PodcastEpisode = ({podcastList, onPress, loading}) => {
  if (podcastList === undefined) {
    return <NotFound typeName="Podcasts" />;
  }
  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <View style={style.parentStyle}>
      <FlatList
        data={podcastList}
        horizontal={false}
        // Added toString to remove a warning
        keyExtractor={(pod) => pod.id.toString()}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={() => onPress(item.id)}>
              <RenderList item={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
export default PodcastEpisode;
