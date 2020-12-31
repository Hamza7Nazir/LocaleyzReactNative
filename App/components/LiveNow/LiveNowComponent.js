import React from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import style from './style';
import Video from 'react-native-video';
import VideoIconComponent from "../VideoIcon/VideoIconComponent";

const LiveNowComponent = () => {
  const videos = [
    {
      title: 'Telvue Connect HLS Invisible now',
      videoUrl: require('../../assets/images/earthmoving.mp4'),
    },
    {
      title: 'Access Framingham Invisible now',
      videoUrl: require('../../assets/images/earthmoving.mp4'),
    },
    {
      title: 'Silver Cat Video',
      videoUrl: require('../../assets/images/silvercat.mov'),
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
        <Text style={style.liveText}>Live now</Text>
      </View>
      <FlatList
        data={videos}
        keyExtractor={(videos) => videos.title}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <TouchableOpacity>
              <View>
                <Video style={style.videoStyle} source={item.videoUrl} />
                <View style={style.iconViewStyle}>
                  <Image
                    style={style.iconOnImageStyle}
                    source={require('../../assets/images/af.jpg')}
                  />
                  <Text style={style.iconTextStyle}>Channel 5</Text>
                </View>
                <Text numberOfLines={1} style={style.listTextStyle}>
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

export default LiveNowComponent;
