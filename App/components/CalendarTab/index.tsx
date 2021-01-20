import React, {useState, useContext} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import FontTelloIcon from '../FontTelloIcon';
import {Colors} from '../../constants';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import MediaContext from '../../Context/MediaContext';
import style from './style';
const CalendarTab = () => {
  const {selectedDate, setSelectedDate} = useContext(MediaContext);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const moment = require('moment');
  const today = moment();

  const hideDatePicker = () => {
    setModalVisible(false);
  };
  const handleConfirm = (date: Date) => {
    hideDatePicker();

    let myDate = new Date(date);

    setSelectedDate(myDate.toDateString());
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

          <Text style={style.dateStyle}>{selectedDate}</Text>
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
