import React from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import NotFound from '../NotFound';
import LoadingSpinner from '../LoadingSpinner';
import style from './style';
import {TrimDescription} from '../../util/index';

const LatestEpisodeComponent = ({
  channelList,
  onPress,
  emptyMessage,
  loading,
  thumbImage,
}) => {
  const renderEpisodes = (item) => {
    return (
      <TouchableOpacity onPress={() => onPress(item.id)}>
        <View style={style.listBlockStyle}>
          <Image
            style={style.imageStyle}
            source={{
              uri: item?.thumbnail?.url || '../../assets/images/imgNot.jpg',
            }}
          />
          <Image style={style.iconOnImageStyle} source={{uri: thumbImage}} />
          <Text numberOfLines={1} style={style.listTextStyle}>
            {item.title}
          </Text>
          <Text numberOfLines={2} style={style.listDetailStyle}>
            {TrimDescription(item.description)}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  // if (loading) {
  //   return <LoadingSpinner />;
  // }
  // if (!channelList.length) {
  //   return <NotFound typeName={emptyMessage} />;
  // }
  return loading ? (
    <LoadingSpinner />
  ) : !channelList.length ? (
    <NotFound typeName={emptyMessage} />
  ) : (
    <View style={style.parentStyle}>
      <FlatList
        data={channelList}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(obj) => obj.title}
        renderItem={({item}) => {
          return renderEpisodes(item);
        }}
      />
    </View>
  );
};

export default LatestEpisodeComponent;
