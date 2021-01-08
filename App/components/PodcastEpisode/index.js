import React from 'react';

import LoadingSpinner from '../LoadingSpinner';
import NotFound from '../NotFound';
import style from './style';
import RenderList from '../RenderList';

const PodcastEpisode = ({podcastList, onPress, loading}) => {
  if (loading) {
    return <LoadingSpinner />;
  }
  if (!podcastList.length) {
    return <NotFound typeName="Podcasts" />;
  }
  return (
    <RenderList
      data={podcastList}
      onPress={onPress}
      iconName="right-dir"
      descriptionType="desc"
    />
  );
};
export default PodcastEpisode;
