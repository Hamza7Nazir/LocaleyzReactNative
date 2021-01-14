import React from 'react';
import {ScrollView, Text} from 'react-native';
import style from './style';
import {Calendar} from '../../components';

const ScheduleScreen = () => {
  return (
    <ScrollView style={style.pageStyle}>
    
      <Calendar/>
    </ScrollView>
  );
};

export default ScheduleScreen;
