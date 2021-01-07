import React from 'react';

import LoadingSpinner from '../LoadingSpinner';
import NotFound from '../NotFound';
import style from './style';
import RenderList from '../RenderList';

const PodcastEpisode = ({podcastList, onPress, loading}) => {
  if (podcastList === undefined) {
    return <NotFound typeName="Podcasts" />;
  } else if (loading) {
    return <LoadingSpinner />;
  } else {
    return (
      <RenderList
        data={podcastList}
        onPress={onPress}
        iconName="right-dir"
        descriptionType="desc"
      />
    );
  }
};
export default PodcastEpisode;
