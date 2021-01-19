import React from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import FontTelloIcon from '../../components/FontTelloIcon';
import style from './style';
import LoadingSpinner from '../LoadingSpinner';
import {Colors} from '../../constants';

const RenderList = ({
  iconName,
  data,
  onPress,
  imageType,
  descriptionType,
  listType,
}) => {
  const renderList = (item) => {
    const SQUARE = 'square';
    const ADDRESS = 'address';
    const FINDMEDIACENTERS = 'FindMediaCenters';
    return (
      <TouchableOpacity onPress={() => onPress(item.id)}>
        <View
          style={
            listType === FINDMEDIACENTERS
              ? style.mediaCenterStyle
              : style.listBarStyle
          }>
          <Image
            style={style.imageStyle}
            source={{
              uri: imageType === SQUARE ? item.squareImage : item.image,
            }}
          />
          <View style={style.textWrap}>
            <Text numberOfLines={1} style={style.titleStyle}>
              {item.title}
            </Text>
            <Text numberOfLines={1} style={style.detailStyle}>
              {descriptionType === ADDRESS ? item.address : item.description}
            </Text>
          </View>
          <View style={style.iconCameraStyle}>
            <FontTelloIcon name={iconName} color={Colors.black} size={25} />
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={style.parentStyle}>
      <FlatList
        data={data}
        horizontal={false}
        ListEmptyComponent={<LoadingSpinner />}
        keyExtractor={(pod) => pod.id.toString()}
        renderItem={({item}) => renderList(item)}
      />
    </View>
  );
};
export default RenderList;
