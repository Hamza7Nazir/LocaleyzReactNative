import React from 'react';
import LoadingSpinner from '../LoadingSpinner';
import NotFound from '../NotFound';
import RenderLive from '../RenderLive';

const LiveNowComponent = ({
  onPress,
  data,
  channelName,
  emptyMessage,
  loading,
  thumbImage,
}) => {
  return loading ? (
    <LoadingSpinner />
  ) : !data.length ? (
    <NotFound typeName={emptyMessage} />
  ) : (
    <RenderLive
      data={data}
      thumbImage={thumbImage}
      channelName={channelName}
      onPress={onPress}
    />
  );
};

export default LiveNowComponent;
