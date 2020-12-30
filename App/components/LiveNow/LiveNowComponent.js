import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import style from './style';

const LiveNowComponent = () => {
  return (
    <View style={style.parentStyle}>
      <View style={style.headingStyle}>
        <Ionicons
          name={'videocam-outline'}
          style={style.iconCameraStyle}
          light
        />
        <Text style={style.liveText}>Live now</Text>
      </View>

      <FlatList />
    </View>
  );
};

export default LiveNowComponent;
