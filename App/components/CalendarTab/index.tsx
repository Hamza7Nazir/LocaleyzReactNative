import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import FontTelloIcon from '../FontTelloIcon';
import {Colors} from '../../constants';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import style from './style';

const CalendarTab = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const moment = require('moment');
  const today = moment();

  const hideDatePicker = () => {
    setModalVisible(false);
  };
  const handleConfirm = (date: Date) => {
    hideDatePicker();
  };

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
        }}>
        <View style={style.parentStyle}>
          <View style={style.iconStyle}>
            <FontTelloIcon
              name={'calendar-empty'}
              color={Colors.lightBlue}
              size={20}
            />
          </View>

          <Text style={style.dateStyle}>
            {today.format('dddd MMMM D , YYYY')}
          </Text>
        </View>
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={modalVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

export default CalendarTab;
