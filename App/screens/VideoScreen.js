import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import api from '../components/api';
import {useQuery} from '@apollo/react-hooks';
import {FlatList} from 'react-native-gesture-handler';
import Spinner from 'react-native-loading-spinner-overlay';

const VideoScreen = ({route}) => {
  // const {id} = route.params;
  // console.log(id)
  const [List, setList] = useState([]);

  return (
    <View>
      <Text>This is Video Screen</Text>
    </View>
  );
};

export default VideoScreen;
