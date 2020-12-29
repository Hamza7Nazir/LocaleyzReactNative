import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const HeaderComponent = () => {
  return (
    <View style= {style.parentStyle}>
      <Image 
      style={style.imageStyle}
      source= {require('../assets/local.jpg')} />
      <Text style= {style.textStyle}>Localeyz</Text>
    </View>
  );
};
const style = StyleSheet.create({
  imageStyle: {
    height: 30,
    width: 30,
  },
  parentStyle: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center'
  },
  textStyle: {
      fontFamily: 'sans-serif-condensed',
      fontSize: 30,
      fontWeight: 'bold'
  }
});

export default HeaderComponent;
