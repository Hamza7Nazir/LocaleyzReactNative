import React, {useState} from 'react';
import MediaContext from './MediaContext';

const MediaProvider = ({children}) => {
  const [data, setData] = useState([]);
  const [selectedOrgId, setSelectedOrgId] = useState(1);
  const [selectedDate, setSelectedDate] = useState(new Date().toDateString());
  return (
    <MediaContext.Provider
      value={{
        data,
        setData,
        selectedOrgId,
        setSelectedOrgId,
        selectedDate,
        setSelectedDate,
      }}>
      {children}
    </MediaContext.Provider>
  );
};
export default MediaProvider;
