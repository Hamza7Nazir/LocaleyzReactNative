import React from 'react';
import {View, Image, Text, FlatList, TouchableOpacity} from 'react-native';

import NotFound from '../NotFound';
import style from './style';

const LiveNowComponent = ({onPress, videos, channelName, emptyMessage}) => {
  if (!videos.length) {
    return <NotFound typeName={emptyMessage} />;
  }

  return (
    <View style={style.parentStyle}>
      <FlatList
        data={videos}
        keyExtractor={(video) => video.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={() => onPress(item.id)}>
              <View>
                <Image style={style.videoStyle} source={{uri: item.image}} />
                <View style={style.iconViewStyle}>
                  <Image
                    style={style.iconOnImageStyle}
                    source={require('../../assets/images/af.jpg')}
                  />
                  <Text style={style.iconTextStyle}>
                    {channelName === 'station'
                      ? (channelName = item.station)
                      : (channelName = item.stations)}
                  </Text>
                  {/* Same component for Live now and Live Radio but their keys for channel names are differnt  */}
                </View>
                <Text numberOfLines={1} style={style.listTextStyle}>
                  {item.title}
                </Text>
                <Text numberOfLines={2} style={style.listTextDetailStyle}>
                  {item.description}
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
