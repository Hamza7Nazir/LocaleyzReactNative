import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import style from './style';

const CenterComponent = ({onPress, thumbImage}) => {
  return (
    <View style={style.parentStyle}>
      <FlatList
        data={thumbImage}
        horizontal
        keyExtractor={(pod) => pod.id.toString()}
        renderItem={({item}) => {
          return (
            <View style={style.viewImageStyle}>
              <TouchableOpacity>
                <Image style={style.imageStyle} source={{uri: item.image}} />
              </TouchableOpacity>
            </View>
          );
        }}
      />

      <TouchableOpacity onPress={onPress}>
        <View style={style.touchableParentStyle}>
          <Text style={style.textStyle}>Find a Center </Text>
          <Ionicons name={'location-outline'} style={style.iconStyle} light />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CenterComponent;
