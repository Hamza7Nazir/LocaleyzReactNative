import React from 'react';
import {ScrollView} from 'react-native';
import style from './style';
import {CalendarTab, ChannelSchedule} from '../../components';

const ScheduleScreen = () => {
  return (
    <ScrollView style={style.pageStyle}>
      <CalendarTab />
      <ChannelSchedule />
    </ScrollView>
  );
};

export default ScheduleScreen;
