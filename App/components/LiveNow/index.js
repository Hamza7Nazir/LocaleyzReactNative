import React from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import LoadingSpinner from '../LoadingSpinner';
import NotFound from '../NotFound';
import style from './style';
import RenderLive from '../RenderLive';

const LiveNowComponent = ({
  onPress,
  videos,
  channelName,
  emptyMessage,
  loading,
  thumbImage,
}) => {
  if (videos === undefined) {
    return <NotFound typeName={emptyMessage} />;
  }

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <RenderLive
      data={videos}
      thumbImage={thumbImage}
      channelName={channelName}
      onPress={onPress}
    />
  );
};

export default LiveNowComponent;
