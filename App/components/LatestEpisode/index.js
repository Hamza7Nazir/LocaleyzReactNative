import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  // ActivityIndicator,
} from 'react-native';
import NotFound from '../NotFound';
import style from './style';
import {TrimDescription} from '../../util/TrimDescription';
// import Spinner from 'react-native-loading-spinner-overlay';
// import AnimatedLoader from 'react-native-animated-loader';

const LatestEpisodeComponent = ({
  channelList,
  onPress,
  emptyMessage,
  loading,
}) => {
  if (!channelList.length) {
    return <NotFound typeName={emptyMessage} />;
  }
  // console.log('Loading Latest Eposidoe -------------------- ', loading);
  // if (loading) {
  //   return <ActivityIndicator size="large" color="#00ff00" />;
  // }

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
                  {TrimDescription(item.description)}
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
