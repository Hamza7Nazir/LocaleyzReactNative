import React from 'react';
import {View, Image, Text, FlatList, TouchableOpacity} from 'react-native';
import style from './style';
import Video from 'react-native-video';

const LiveNowComponent = ({onPress, videos, channelName}) => {
  return (
    <View style={style.parentStyle}>
      <FlatList
        data={videos}
        keyExtractor={(video) => video.title}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={() => onPress(item.key)}>
              <View>
                <Video style={style.videoStyle} source={item.videoUrl} />
                <View style={style.iconViewStyle}>
                  <Image
                    style={style.iconOnImageStyle}
                    source={require('../../assets/images/af.jpg')}
                  />
                  <Text style={style.iconTextStyle}>{channelName}</Text>
                </View>
                <Text numberOfLines={1} style={style.listTextStyle}>
                  {item.title}
                </Text>
                <Text numberOfLines={2} style={style.listTextDetailStyle}>
                  {item.detail}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default LiveNowComponent;
