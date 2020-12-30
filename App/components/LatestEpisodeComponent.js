/* eslint-disable react-native/no-color-literals */
import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const LatestEpisodeComponent = () => {
  const channelList = [
    {title: 'Grey Cat', imageUrl: require('../assets/cat.jpg')},
    {title: 'White Cat', imageUrl: require('../assets/cat2.jpg')},
    {title: 'Brown Cat', imageUrl: require('../assets/cat3.jpg')},
    {title: 'Big Cat', imageUrl: require('../assets/tiger1.jpg')},
    {title: 'Russion', imageUrl: require('../assets/tank2.jpg')},
    {title: 'King Cat', imageUrl: require('../assets/tiger1.jpg')},
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
                  source={require('../assets/af.jpg')}
                />
                <Text style={style.listTextStyle}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
const style = StyleSheet.create({
  episodeText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  headingStyle: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  iconCameraStyle: {
    fontSize: 35,
    marginRight: 15,
  },
  iconOnImageStyle: {
    borderRadius: 45,
    height: 25,
    left: 0,
    margin: 5,
    position: 'absolute',
    top: 0,
    width: 25,
  },
  imageStyle: {
    borderRadius: 10,
    height: 110,
    width: 100,
  },
  listBlockStyle: {
    alignItems: 'flex-start',
    marginRight: 8,
  },
  listTextStyle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  parentStyle: {
    marginHorizontal: 15,
    marginTop: 20,
  },
});

export default LatestEpisodeComponent;
