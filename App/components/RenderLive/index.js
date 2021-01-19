import React from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import style from './style';
import {LoadingSpinner} from '../../components';
import {TrimDescription} from '../../util';
import {Strings} from '../../constants';
const RenderLive = ({data, channelName, thumbImage, onPress, component}) => {
  const renderLive = (item) => {
    const STATION = 'station';
    const STATIONS = 'staions';
    return (
      <TouchableOpacity onPress={() => onPress(item.id)}>
        <View
          style={component === Strings.Episode ? style.listBlockStyle : null}>
          <Image
            style={
              component === Strings.Episode
                ? style.imageStyle
                : style.videoStyle
            }
            source={{
              uri:
                component === Strings.Episode
                  ? item?.thumbnail?.url
                  : item.image || require('../../assets/images/imgNot.jpg'),
            }}
          />
          <View
            style={
              component === Strings.Episode
                ? style.iconOnImageStyleEpisode
                : style.iconViewStyle
            }>
            <Image
              style={style.iconOnImageStyleLive}
              source={{uri: thumbImage}}
            />
            {component === Strings.Episode ? null : (
              <Text style={style.iconTextStyle} numberOfLines={2}>
                {channelName === 'station'
                  ? (channelName = item.station)
                  : channelName === 'stations'
                  ? (channelName = item.stations)
                  : null}
              </Text>
            )}
          </View>
          <Text
            numberOfLines={1}
            style={
              component === Strings.Episode
                ? style.listTextStyleEpisode
                : style.listTextStyleLive
            }>
            {item.title}
          </Text>
          <Text
            numberOfLines={2}
            style={
              component === Strings.Episode
                ? style.listDetailStyle
                : style.listTextDetailStyleLive
            }>
            {TrimDescription(item.description)}
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
        renderItem={({item}) => renderLive(item)}
      />
    </View>
  );
};
export default RenderLive;
