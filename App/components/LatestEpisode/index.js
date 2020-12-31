import React from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import style from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';

const LatestEpisodeComponent = ({channelList, onPress}) => {
  return (
    <View style={style.parentStyle}>
      <View style={style.headingStyle}>
        <Ionicons
          name={'videocam-outline'}
          style={style.iconCameraStyle}
          light
        />
        <Text style={style.episodeText}>Latest episodes</Text>
      </View>

      <FlatList
        data={channelList}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(obj) => obj.title}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={() => onPress(item.key)}>
              <View style={style.listBlockStyle}>
                <Image style={style.imageStyle} source={item.imageUrl} />
                <Image
                  style={style.iconOnImageStyle}
                  source={require('../../assets/images/af.jpg')}
                />
                <Text numberOfLines={2} style={style.listTextStyle}>
                  {item.title}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default LatestEpisodeComponent;
