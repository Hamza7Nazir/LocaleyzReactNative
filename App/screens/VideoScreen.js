import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import GET_JOBS from '../components/api/index';
import {useQuery} from '@apollo/react-hooks';
import Spinner from 'react-native-loading-spinner-overlay';

const VideoScreen = () => {
  const [jobsList, setJobsList] = useState([]);
  const {loading, error, data} = useQuery(GET_JOBS);
  useEffect(() => {
    if (error) {
      // console.log('error ::', error);
    }
    if (data) {
      setJobsList(data.jobs);
    }
  }, [data, error]);

  return (
    <View>
      <Spinner visible={loading} />
      <View>
        <Text>This is Video Screen</Text>
      </View>
      {jobsList && (
        <FlatList
          data={jobsList}
          renderItem={(item) => {
            return (
              <View>
                <Text>{item.item.id}</Text>
                {console.log(item)}
              </View>
            );
          }}
        />
      )}
    </View>
  );
};

export default VideoScreen;
