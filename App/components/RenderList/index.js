import React from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import FontTelloIcon from '../../components/FontTelloIcon';
import style from './style';

const RenderList = ({iconName, data, onPress}) => {
  return (
    <View style={style.parentStyle}>
      <FlatList
        data={data}
        horizontal={false}
        // Added toString to remove a warning
        keyExtractor={(pod) => pod.id.toString()}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={() => onPress(item.id)}>
              {console.log('Item ----', item)}
              <View style={style.listBarStyle}>
                <Image
                  style={style.imageStyle}
                  source={{uri: item.image || 'https://picsum.photos/200'}}
                />
                <View style={style.textWrap}>
                  <Text numberOfLines={1} style={style.titleStyle}>
                    {item.title}
                  </Text>
                  <Text numberOfLines={1} style={style.detailStyle}>
                    {item.description}
                  </Text>
                </View>
                <View style={style.iconCameraStyle}>
                  <FontTelloIcon name={iconName} color={'#000'} size={25} />
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
export default RenderList;
