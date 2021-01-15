import React, {useContext, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import style from './style';
import MediaContext from '../../Context/MediaContext';
import {getImage, getTitle} from '../../util';
import FontTelloIcon from '../FontTelloIcon';
import {Colors} from '../../constants';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const OrgHeader = () => {
  const {data, selectedOrgId} = useContext(MediaContext);

  // const getOrgId = async () => {
  //   try {
  //     return await AsyncStorage.getItem('OrgId');
  //   } catch (error) {
  //     console.log('Error getting Org Id Data');
  //   }
  // };
  // useEffect(() => {
  //   const id = getOrgId();
  // }, []);
  return (
    <TouchableOpacity>
      <View style={style.parentStyle}>
        <View style={style.iconTextViewStyle}>
          <Image
            style={style.imageStyle}
            source={{
              uri:
                getImage(data, selectedOrgId) ||
                'https://picsum.photos/200/300',
            }}
          />

          <Text style={style.textStyle}>{getTitle(data, selectedOrgId)}</Text>
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
