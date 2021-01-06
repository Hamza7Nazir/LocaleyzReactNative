import React from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import style from './style';
import LoadingSpinner from '../LoadingSpinner';

const RenderLive = ({data, channelName, onPress}) => {
  return (
    <View style={style.parentStyle}>
      <FlatList
        data={data}
        keyExtractor={(video) => video.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={<LoadingSpinner />}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={() => onPress(item.id)}>
              <View>
                <Image
                  style={style.videoStyle}
                  source={{uri: item.image || 'https://picsum.photos/200'}}
                />
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
export default RenderLive;
