import React from 'react';
import {View, Image, Text, FlatList, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontTelloIcon from '../../components/FontTelloIcon';
import style from './style';
import Video from 'react-native-video';

const LiveNowComponent = ({
  onPress,
  videos,
  iconName,
  headingName,
  channelName,
}) => {
  return (
    <View style={style.parentStyle}>
      <View style={style.headingStyle}>
        <FontTelloIcon
          style={style.iconCameraStyle}
          name={iconName}
          color={'#000'}
          size={35}
        />
        <Text style={style.liveText}>{headingName}</Text>
      </View>
      <FlatList
        data={videos}
        keyExtractor={(video) => video.title}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={() => onPress(item.key)}>
              <View>
                <Video style={style.videoStyle} source={item.videoUrl} />
                <View style={style.iconViewStyle}>
                  <Image
                    style={style.iconOnImageStyle}
                    source={require('../../assets/images/af.jpg')}
                  />
                  <Text style={style.iconTextStyle}>{channelName}</Text>
                </View>
                <Text numberOfLines={1} style={style.listTextStyle}>
                  {item.title}
                  
                </Text>
                <Text style={style.listTextDetailStyle}>{item.detail}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default LiveNowComponent;
