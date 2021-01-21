import React from 'react';

const MediaContext = React.createContext({
  data: [],
});
MediaContext.displayName = 'This Media Context';

export default MediaContext;
