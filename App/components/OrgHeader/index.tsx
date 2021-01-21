import React, {useContext, useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import style from './style';
import MediaContext from '../../Context/MediaContext';
import {getImage, getTitle} from '../../util';
import FontTelloIcon from '../FontTelloIcon';
import {Colors, Strings} from '../../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../constants';
const OrgHeader = () => {
  const navigation = useNavigation();
  const {data} = useContext(MediaContext);
  const [currentMedia, setCurrentMedia] = useState(0);
  const getSelectedMedia = async () => {
    const val = await AsyncStorage.getItem(Strings.CurrentSelectedMediaId);
    return setCurrentMedia(val);
  };
  getSelectedMedia();

  return (
    <TouchableOpacity onPress={() => navigation.navigate(Routes.SearchCenter)}>
      <View style={style.parentStyle}>
        <View style={style.iconTextViewStyle}>
          <Image
            style={style.imageStyle}
            source={{
              uri:
                getImage(data, currentMedia) || 'https://picsum.photos/200/300',
            }}
          />

          <Text style={style.textStyle}>{getTitle(data, currentMedia)}</Text>
        </View>
        <FontTelloIcon
          name={'info-circled-alt'}
          color={Colors.lightGrey}
          size={18}
        />
      </View>
    </TouchableOpacity>
  );
};

export default OrgHeader;
