import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import style from './style';
const LoadingSpinner = () => {
  return (
    <View style={style.spinnerStyle}>
      <ActivityIndicator size="large" color="#949997" />
    </View>
  );
};
export default LoadingSpinner;
