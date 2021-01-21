import React, {useState} from 'react';
import MediaContext from './MediaContext';

const MediaProvider = ({children}) => {
  let date = new Date().toDateString();
  const [data, setData] = useState([]);
  const [selectedOrgId, setSelectedOrgId] = useState(1);
  const [selectedDate, setSelectedDate] = useState(date);
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
