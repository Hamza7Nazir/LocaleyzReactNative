import React from 'react';
import {ScrollView} from 'react-native';
import style from './style';
import {CalendarTab, OrgHeader, ChannelSchedule} from '../../components';

const ScheduleScreen = () => {
  return (
    <>
      <OrgHeader />
      <ScrollView style={style.pageStyle}>
        <CalendarTab />
        <ChannelSchedule />
      </ScrollView>
    </>
  );
};

export default ScheduleScreen;
