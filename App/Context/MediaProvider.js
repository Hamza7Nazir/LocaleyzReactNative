import React, {useState} from 'react';
import MediaContext from './MediaContext';

const MediaProvider = ({children}) => {
  const [data, setData] = useState([]);
  const [selectedOrgId, setSelectedOrgId] = useState(1);
  return (
    <MediaContext.Provider
      value={{data, setData, selectedOrgId, setSelectedOrgId}}>
      {children}
    </MediaContext.Provider>
  );
};
export default MediaProvider;
