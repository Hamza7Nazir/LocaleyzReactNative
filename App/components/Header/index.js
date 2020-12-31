import React from 'react';
import {View, Text, Image} from 'react-native';
import style from './style';
const HeaderComponent = () => {
  return (
    <View style={style.parentStyle}>
      <Image
        style={style.imageStyle}
        source={require('../../assets/images/local.jpg')}
      />
      <Text style={style.textStyle}>Localeyz</Text>
    </View>
  );
};

export default HeaderComponent;
