import React from 'react';
import {ScrollView, Text} from 'react-native';
import style from './style';
const VideoScreen = ({route}) => {
  return (
    <ScrollView style={style.pageStyle}>
      <Text>This is Video Screen</Text>
    </ScrollView>
  );
};

export default VideoScreen;
