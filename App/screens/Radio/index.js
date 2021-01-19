import React from 'react';
import {ScrollView, Text} from 'react-native';
import {OrgHeader} from '../../components';
import style from './style';
const RadioScreen = () => {
  return (
    <>
      <OrgHeader />
      <ScrollView style={style.pageStyle}>
        <Text>RadioScreen</Text>
      </ScrollView>
    </>
  );
};

export default RadioScreen;
