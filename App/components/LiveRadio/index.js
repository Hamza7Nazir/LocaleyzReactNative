import React from 'react';
import {View, Image, Text, FlatList, TouchableOpacity} from 'react-native';
import FontTelloIcon from '../../components/FontTelloIcon';
import style from './style';

const LiveRadio = () => {
  return (
    <View style={style.parentStyle}>
      <View style={style.headingStyle}>
        <FontTelloIcon
          style={style.iconCameraStyle}
          name={'signal'}
          color={'#000'}
          size={35}
        />

        <Text style={style.liveText}>Live Radio</Text>
      </View>
    </View>
  );
};
export default LiveRadio;
