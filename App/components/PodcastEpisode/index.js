import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
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
      <FlatList
        data={podcastList}
        horizontal={false}
        // Added toString to remove a warning
        keyExtractor={(pod) => pod.id.toString()}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={() => onPress(item.id)}>
              <View style={style.listBarStyle}>
                <Image style={style.imageStyle} source={{uri: item.image}} />
                <View style={style.textWrap}>
                  <Text numberOfLines={1} style={style.titleStyle}>
                    {item.title}
                  </Text>
                  <Text numberOfLines={1} style={style.detailStyle}>
                    {item.description}
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
    </View>
  );
};
export default PodcastEpisode;
