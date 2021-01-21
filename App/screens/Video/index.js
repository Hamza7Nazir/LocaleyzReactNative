import React, {useState, useEffect, useContext, useLayoutEffect} from 'react';

import {ScrollView, Text} from 'react-native';
import style from './style';
import {useNavigation} from '@react-navigation/native';
import {OrgHeader} from '../../components';

const VideoScreen = ({route}) => {
  return (
    <>
      <OrgHeader title={'Localeyz'} />
      <ScrollView style={style.pageStyle}>
        <Text>This is Video Screen</Text>
      </ScrollView>
    </>
  );
};

export default VideoScreen;
