import React, {useContext, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import style from './style';
import MediaContext from '../../Context/MediaContext';
import {getImage, getTitle} from '../../util';
import FontTelloIcon from '../FontTelloIcon';
import {Colors} from '../../constants';

const OrgHeader = () => {
  const {data, selectedOrgId} = useContext(MediaContext);

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
