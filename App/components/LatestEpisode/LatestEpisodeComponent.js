import React from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import style from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';

const LatestEpisodeComponent = () => {
  const channelList = [
    {
      title: 'Grey Cat sorry its golden',
      imageUrl: require('../../assets/images/cat.jpg'),
    },
    {title: 'White Cat', imageUrl: require('../../assets/images/cat2.jpg')},
    {title: 'Brown Cat', imageUrl: require('../../assets/images/cat3.jpg')},
    {title: 'Big Cat', imageUrl: require('../../assets/images/tiger1.jpg')},
    {title: 'Russion', imageUrl: require('../../assets/images/tank2.jpg')},
    {
      title: 'King Cat is very very very big',
      imageUrl: require('../../assets/images/tiger1.jpg'),
    },
  ];

  return (
    <View style={style.parentStyle}>
      <View style={style.headingStyle}>
        <Ionicons
          name={'videocam-outline'}
          style={style.iconCameraStyle}
          light
        />
        <Text style={style.episodeText}>Latest episodes</Text>
      </View>

      <FlatList
        data={channelList}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(obj) => obj.title}
        renderItem={({item}) => {
          return (
            <TouchableOpacity>
              <View style={style.listBlockStyle}>
                <Image style={style.imageStyle} source={item.imageUrl} />
                <Image
                  style={style.iconOnImageStyle}
                  source={require('../../assets/images/af.jpg')}
                />
                <Text numberOfLines={2} style={style.listTextStyle}>
                  {item.title}
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
