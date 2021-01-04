import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import FontTelloIcon from '../../components/FontTelloIcon';
import NotFound from '../NotFound';
import style from './style';

const PodcastEpisode = ({podcastList, onPress}) => {
  if (!podcastList.length) {
    return <NotFound typeName="Podcasts" />;
  }

  return (
    <View style={style.parentStyle}>
      <SafeAreaView style={{flex: 1}}>
        <FlatList
          data={podcastList}
          // Added toString to remove a warning
          keyExtractor={(pod) => pod.key.toString()}
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
                  <View style={style.iconCameraStyle}>
                    <FontTelloIcon name="right-dir" color={'#000'} size={25} />
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </SafeAreaView>
    </View>
  );
};
export default PodcastEpisode;
