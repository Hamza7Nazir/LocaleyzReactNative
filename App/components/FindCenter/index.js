import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import style from './style';

const CenterComponent = ({onPress1, thumbImage, onPress2}) => {
  const RenderLatestVisits = (item) => {
    return (
      <TouchableOpacity onPress={() => onPress2(item.id)}>
        <View style={style.viewImageStyle}>
          <Image style={style.imageStyle} source={{uri: item.image}} />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={style.parentStyle}>
      <FlatList
        data={thumbImage}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(pod) => pod.id}
        renderItem={({item}) => {
          return RenderLatestVisits(item);
        }}
      />

      <TouchableOpacity onPress={() => onPress1()}>
        <View style={style.touchableParentStyle}>
          <Text style={style.textStyle}>Find a Center </Text>
          <Ionicons name={'location-outline'} style={style.iconStyle} light />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CenterComponent;
