import React from 'react';
import {View, Text, Image} from 'react-native';
import FontTelloIcon from '../../components/FontTelloIcon';
import style from './style';

const RenderList = ({item}) => {
  return (
    <View style={style.listBarStyle}>
      <Image style={style.imageStyle} source={{uri: item.image}} />
      <View style={style.textWrap}>
        <Text numberOfLines={1} style={style.titleStyle}>
          {item.title}
        </Text>
        <Text numberOfLines={1} style={style.detailStyle}>
          {item.description}
        </Text>
      </View>
      <View style={style.iconCameraStyle}>
        <FontTelloIcon name="right-dir" color={'#000'} size={25} />
      </View>
    </View>
  );
};
export default RenderList;
