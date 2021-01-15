import React, {useEffect, useState} from 'react';
import {Text, View, TouchableOpacity, Modal} from 'react-native';

import FontTelloIcon from '../FontTelloIcon';
import {Colors} from '../../constants';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {TrimDate} from '../../util';
import style from './style';

const Calendar1 = () => {
  const [isPressed, setIsPressed] = useState(false);

  const toggleOverlay = () => {
    setIsPressed(!isPressed);
  };
  console.log(isPressed);
  return (
    <TouchableOpacity onPress={() => toggleOverlay}>
      <View style={style.parentStyle}>
        <View style={style.iconStyle}>
          <FontTelloIcon
            name={'calendar-empty'}
            color={Colors.lightBlue}
            size={20}
          />
        </View>
        <Text style={style.dateStyle}>{TrimDate()}</Text>
      </View>
      <Modal transparent={true} visible={isPressed}>
        <View style={style.popUpStyle}>
          <Text>This is Modal</Text>
        </View>
      </Modal>
    </TouchableOpacity>
  );
};

export default Calendar1;
