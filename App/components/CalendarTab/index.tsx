import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Modal,
  TouchableHighlight,
} from 'react-native';
import Moment from 'react-moment';
import FontTelloIcon from '../FontTelloIcon';
import {Colors} from '../../constants';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {TrimDate} from '../../util';
import style from './style';

const CalendarTab = () => {
  const [modalVisible, setModalVisible] = useState(false);

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

          <Text style={style.dateStyle}>{TrimDate()}</Text>
        </View>
      </TouchableOpacity>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={style.centeredView}>
          <View style={style.modalView}>
            <Text style={style.modalText}>Select event date</Text>
            <Calendar />
            <TouchableHighlight
              style={{...style.openButton, backgroundColor: '#2196F3'}}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text style={style.textStyle}>Submit</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CalendarTab;
