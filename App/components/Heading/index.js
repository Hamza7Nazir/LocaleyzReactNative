import React from 'react';
import {View, Text} from 'react-native';
import FontTelloIcon from '../FontTelloIcon';
import style from './style';
const Heading = ({iconName, headingName}) => {
  return (
    <View style={style.parentStyle}>
      <View style={style.headingStyle}>
        <FontTelloIcon
          style={style.iconCameraStyle}
          name={iconName}
          color={'#000'}
          size={35}
        />
        <Text style={style.liveText}>{headingName}</Text>
      </View>
    </View>
  );
};

export default Heading;
