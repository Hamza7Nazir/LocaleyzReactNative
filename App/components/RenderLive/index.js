import React from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import style from './style';
import LoadingSpinner from '../LoadingSpinner';

const RenderLive = ({data, channelName, thumbImage, onPress}) => {
  const renderLive = (item) => {
    return (
      <TouchableOpacity onPress={() => onPress(item.id)}>
        <View>
          <Image
            style={style.videoStyle}
            source={{uri: item.image || '../../assets/images/imgNot.jpg'}}
          />
          <View style={style.iconViewStyle}>
            <Image style={style.iconOnImageStyle} source={{uri: thumbImage}} />
            <Text style={style.iconTextStyle} numberOfLines={2}>
              {channelName === 'station'
                ? (channelName = item.station)
                : (channelName = item.stations)}
            </Text>
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
  };
  return (
    <View style={style.parentStyle}>
      <FlatList
        data={data}
        keyExtractor={(video) => video.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={<LoadingSpinner />}
        renderItem={({item}) => {
          return renderLive(item);
        }}
      />
    </View>
  );
};
export default RenderLive;
