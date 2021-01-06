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
}) => {
  if (videos === undefined) {
    return <NotFound typeName={emptyMessage} />;
  }

  return (
    <RenderLive data={videos} channelName={channelName} onPress={onPress} />
  );
};

export default LiveNowComponent;
