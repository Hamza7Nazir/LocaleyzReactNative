import React from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import NotFound from '../NotFound';
import style from './style';

const LatestEpisodeComponent = ({channelList, onPress, emptyMessage}) => {
  if (!channelList.length) {
    return <NotFound typeName={emptyMessage} />;
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
            <TouchableOpacity onPress={() => onPress(item.key)}>
              <View style={style.listBlockStyle}>
                <Image style={style.imageStyle} source={item.imageUrl} />
                <Image
                  style={style.iconOnImageStyle}
                  source={require('../../assets/images/af.jpg')}
                />
                <Text numberOfLines={1} style={style.listTextStyle}>
                  {item.title}
                </Text>
                <Text numberOfLines={2} style={style.listDetailStyle}>
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

export default LatestEpisodeComponent;
