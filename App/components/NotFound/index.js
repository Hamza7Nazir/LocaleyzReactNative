import React from 'react';
import {View, Text} from 'react-native';
import FontTelloIcon from '../../components/FontTelloIcon';
import style from './style';

const NotFound = ({typeName}) => {
  return (
    <View style={style.ifViewStyle}>
      <FontTelloIcon
        style={style.ifIconCameraStyle}
        name="cw"
        color={'#949997'}
        size={35}
      />
      <Text style={style.ifTextStyle}>We could not find any {typeName}</Text>
    </View>
  );
};
export default NotFound;
