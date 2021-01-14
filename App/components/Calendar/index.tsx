import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import FontTelloIcon from '../FontTelloIcon';
import {Colors} from '../../constants';
import style from './style';

const Calendar = () => {
  return (
    <TouchableOpacity>
      <View style={style.parentStyle}>
        <View style={style.iconStyle}>
          <FontTelloIcon
            name={'calendar-empty'}
            color={Colors.lightBlue}
            size={20}
          />
        </View>
        <Text style={style.dateStyle}>Date: Jan 14, 2020</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Calendar;
