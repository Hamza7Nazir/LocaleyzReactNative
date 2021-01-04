import React from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import NotFound from '../NotFound';
import style from './style';
import Spinner from 'react-native-loading-spinner-overlay';

const LatestEpisodeComponent = ({
  channelList,
  onPress,
  emptyMessage,
  loading,
}) => {
  if (!channelList.length) {
    return <NotFound typeName={emptyMessage} />;
  }

  return (
    <View style={style.parentStyle}>
      <Spinner visible={loading} />
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
                    uri: item?.thumbnail?.url || 'https://picsum.photos/200',
                  }}
                />
                <Image
                  style={style.iconOnImageStyle}
                  source={require('../../assets/images/af.jpg')}
                />
                <Text numberOfLines={1} style={style.listTextStyle}>
                  {item.title}
                </Text>
                <Text numberOfLines={2} style={style.listDetailStyle}>
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

export default LatestEpisodeComponent;
