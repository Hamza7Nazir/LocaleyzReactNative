import React from 'react';

const MediaContext = React.createContext({
  data: 'cat',
});
MediaContext.displayName = 'This Media Context';

export default MediaContext;
