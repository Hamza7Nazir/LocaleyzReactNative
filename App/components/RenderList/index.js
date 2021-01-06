import React from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import FontTelloIcon from '../../components/FontTelloIcon';
import style from './style';
import LoadingSpinner from '../LoadingSpinner';

const RenderList = ({
  iconName,
  data,
  onPress,
  imageType,
  descriptionType,
  listType,
}) => {
  let subHeading = '';

  return (
    <View style={style.parentStyle}>
      <FlatList
        data={data}
        horizontal={false}
        ListEmptyComponent={<LoadingSpinner />}
        keyExtractor={(pod) => pod.id.toString()}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={() => onPress(item.id)}>
              <View
                style={
                  listType === 'FindMediaCenters'
                    ? style.mediaCenterStyle
                    : style.listBarStyle
                  // Styling choice
                }>
                <Image
                  style={style.imageStyle}
                  source={{
                    // change in image
                    uri: imageType === 'square' ? item.squareImage : item.image,
                  }}
                />
                <View style={style.textWrap}>
                  <Text numberOfLines={1} style={style.titleStyle}>
                    {item.title}
                  </Text>
                  <Text numberOfLines={1} style={style.detailStyle}>
                    {/* change in address */}
                    {descriptionType === 'address'
                      ? (subHeading = item.address)
                      : (subHeading = item.description)}
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