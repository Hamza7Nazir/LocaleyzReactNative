import React from 'react';
import LoadingSpinner from '../LoadingSpinner';
import NotFound from '../NotFound';
import RenderLive from '../RenderLive';

const LiveNowComponent = ({
  onPress,
  videos,
  channelName,
  emptyMessage,
  loading,
  thumbImage,
}) => {
  return loading ? (
    <LoadingSpinner />
  ) : !videos.length ? (
    <NotFound typeName={emptyMessage} />
  ) : (
    <RenderLive
      data={videos}
      thumbImage={thumbImage}
      channelName={channelName}
      onPress={onPress}
    />
  );
};

export default LiveNowComponent;
