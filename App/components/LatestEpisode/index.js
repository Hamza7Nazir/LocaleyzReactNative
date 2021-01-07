import React from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import NotFound from '../NotFound';
import LoadingSpinner from '../LoadingSpinner';
import style from './style';
import {TrimDescription} from '../../util/TrimDescription';

const LatestEpisodeComponent = ({
  channelList,
  onPress,
  emptyMessage,
  loading,
  thumbImage,
}) => {
  if (channelList === undefined) {
    return <NotFound typeName={emptyMessage} />;
  }

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <View style={style.parentStyle}>
      <FlatList
        data={channelList}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(obj) => obj.title}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={() => onPress(item.id)}>
              <View style={style.listBlockStyle}>
                <Image
                  style={style.imageStyle}
                  source={{
                    uri:
                      item?.thumbnail?.url || '../../assets/images/imgNot.jpg',
                  }}
                />
                <Image
                  style={style.iconOnImageStyle}
                  source={{uri: thumbImage}}
                />
                <Text numberOfLines={1} style={style.listTextStyle}>
                  {item.title}
                </Text>
                <Text numberOfLines={2} style={style.listDetailStyle}>
                  {TrimDescription(item.description)}
                  {/* This trims the <p></p> tags */}
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
