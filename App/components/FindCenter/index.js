import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import style from './style';

const CenterComponent = () => {
  return (
    <View style={style.parentStyle}>
      <TouchableOpacity>
        <Image
          style={style.imageStyle}
          source={require('../../assets/images/af.jpg')}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={style.touchableParentStyle}>
          <Text style={style.textStyle}>Find a Center </Text>
          <Ionicons name={'location-outline'} style={style.iconStyle} light />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CenterComponent;
