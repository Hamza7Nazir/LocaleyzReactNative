import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const HeaderComponent = () => {
  return (
    <View>
        <Text style={style.iconStyle}>This is HeaderComponent</Text>

    </View>
  );
};
const style = StyleSheet.create({
    iconStyle: {
    height: 250,
    width: 250
  }
});
export default HeaderComponent;
