import React from 'react';
import {NotFound, LoadingSpinner, RenderLive} from '../../components';
import {Strings} from '../../constants';
const LatestEpisodeComponent = ({
  data,
  onPress,
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
      onPress={onPress}
      component={Strings.Episode}
    />
  );
};

export default LatestEpisodeComponent;
