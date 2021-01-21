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
  if (loading) {
    return <LoadingSpinner />;
  }
  if (!videos.length) {
    return <NotFound typeName={emptyMessage} />;
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
