import React from 'react';
import {ScrollView, Text} from 'react-native';
import style from './style';
import {Calendar1, ChannelSchedule} from '../../components';

const ScheduleScreen = () => {
  return (
    <ScrollView style={style.pageStyle}>
      <Calendar1 />
      <ChannelSchedule />
    </ScrollView>
  );
};

export default ScheduleScreen;
