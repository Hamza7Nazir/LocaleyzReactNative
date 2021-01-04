import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import api from '../components/api';
import {useQuery} from '@apollo/react-hooks';
import {FlatList} from 'react-native-gesture-handler';
import Spinner from 'react-native-loading-spinner-overlay';

const VideoScreen = ({route}) => {
  const {id} = route.params;
  const [List, setList] = useState([]);
  const {loading, error, data} = useQuery(api.EPISODES_QUERY_FILTER, {
    variables: {
      limit: 10,
      offset: 10,
      searchQuery: '',
      dateQuery: '',
      organizationId: id.toString(),
    },
  });
  useEffect(() => {
    if (error) {
      console.log('error ::', error);
    }
    if (data) {
      console.log(data.allEpisodes);
      setList(data.allEpisodes);
    }
  }, [data, error]);

  return (
    <View>
      <Spinner visible={loading} />
      <View>
        <Text>This is Video Screen</Text>
      </View>
      {List && (
        <FlatList
          data={List}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => {
            return (
              <View>
                <Text>{item.title}</Text>
              </View>
            );
          }}
        />
      )}
    </View>
  );
};

export default VideoScreen;
