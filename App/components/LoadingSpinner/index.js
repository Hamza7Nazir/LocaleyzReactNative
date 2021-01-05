import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import style from './style';
const LoadingSpinner = () => {
  return (
    <View style={style.spinnerStyle}>
      <ActivityIndicator size="large" color="#989a9e" />
    </View>
  );
};
export default LoadingSpinner;
