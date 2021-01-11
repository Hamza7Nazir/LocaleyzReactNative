import React, {useState} from 'react';
import MediaContext from './MediaContext';

const MediaProvider = ({children}) => {
  const [data, setData] = useState('test');

  return (
    <MediaContext.Provider value={{data, setData}}>
      {children}
    </MediaContext.Provider>
  );
};
export default MediaProvider;
