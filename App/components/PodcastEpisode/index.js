import React from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import style from './style';

const PodcastEpisode = ({podcastList, onPress}) => {
  return (
    <View style={style.parentStyle}>
      <FlatList
        data={podcastList}
        keyExtractor={(pod) => pod.key}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={() => onPress(item.key)}>
              <View style={style.listBarStyle}>
                <Image style={style.imageStyle} source={item.imageUrl} />
                <View style={style.textWrap}>
                  <Text numberOfLines={1} style={style.titleStyle}>
                    {item.title}
                  </Text>
                  <Text numberOfLines={1} style={style.detailStyle}>
                    {item.detail}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
export default PodcastEpisode;
