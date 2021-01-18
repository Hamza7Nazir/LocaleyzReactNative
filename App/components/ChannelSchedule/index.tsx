import React, {useContext, useEffect, useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Modal,
  TouchableHighlight,
} from 'react-native';
import {getTitle} from '../../util';
import style from './style';
import MediaContext from '../../Context/MediaContext';
import api from '../../api/Queries';
import {useQuery} from '@apollo/react-hooks';
import {
  NotFound,
  ScheduleVideoList,
  FontTelloIcon,
  DropDownChannel,
} from '../../components';
import {Colors, Icons, Strings} from '../../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ChannelSchedule = () => {
  const [scheduleList, setScheduleList] = useState([]);
  const {data} = useContext(MediaContext);
  const [isPressed, setIsPressed] = useState(false);
  const [currentMedia, setCurrentMedia] = useState(0);

  const getSelectedMedia = async () => {
    const val = await AsyncStorage.getItem(Strings.CurrentSelectedMediaId);
    return setCurrentMedia(val);
  };

  const {data: ScheduleData} = useQuery(api.SCHEDULE_VIDEO_QUERY, {
    variables: {
      organizationId: currentMedia,
    },
  });

  useEffect(() => {
    if (ScheduleData) {
      setScheduleList(ScheduleData.liveVideosByOrganization);
    }
  }, [ScheduleData]);

  getSelectedMedia();

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          setIsPressed(!isPressed);
        }}>
        <View style={style.parentStyle}>
          <View style={style.clockIconStyle}>
            <FontTelloIcon
              name={Icons.Clock}
              color={Colors.lightBlue}
              size={20}
            />
          </View>
          <Text style={style.titleStyle} numberOfLines={1}>
            {getTitle(data, currentMedia)}
          </Text>

          <View style={style.arrowIconStyle}>
            <FontTelloIcon
              name={
                isPressed
                  ? Icons.ArrowUpDirectionLight
                  : Icons.ArrowDownDirectionLight
              }
              color={Colors.lightBlue}
              size={20}
            />
          </View>
        </View>
      </TouchableOpacity>

      <ScheduleVideoList scheduleList={scheduleList} />
      <Modal animationType="slide" transparent={true} visible={isPressed}>
        <View style={style.centeredView}>
          <View style={style.modalView}>
            <Text style={style.modalText}>Stations</Text>
            {isPressed && data ? (
              <DropDownChannel scheduleList={scheduleList} />
            ) : (
              <NotFound typeName={'Schedule'} />
            )}
            <TouchableHighlight
              style={style.openButton}
              onPress={() => {
                setIsPressed(!isPressed);
              }}>
              <Text style={style.textStyle}>Close</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ChannelSchedule;
