import React from 'react';
import LoadingSpinner from '../LoadingSpinner';
import NotFound from '../NotFound';
import RenderList from '../RenderList';

const PodcastEpisode = ({podcastList, onPress, loading}) => {
  if (loading) {
    return <LoadingSpinner />;
  }
  if (!podcastList.length) {
    return <NotFound typeName="Podcasts" />;
  }
  return loading ? (
    <LoadingSpinner />
  ) : !podcastList.length ? (
    <NotFound typeName="Podcasts" />
  ) : (
    <RenderList
      data={podcastList}
      onPress={onPress}
      iconName="right-dir"
      descriptionType="desc"
    />
  );
};
export default PodcastEpisode;
