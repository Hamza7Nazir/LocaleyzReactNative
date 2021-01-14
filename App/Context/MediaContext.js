import React from 'react';

const MediaContext = React.createContext({
  data: [],
  id: Number,
});
MediaContext.displayName = 'This Media Context';

export default MediaContext;
