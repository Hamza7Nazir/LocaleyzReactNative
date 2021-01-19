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
import {Queries} from '../../api';
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
  const [VideoByChannelState, setVideoByChannelState] = useState([]);
  const [channelIdState, setChannelIdState] = useState<string>('0');
  const {data} = useContext(MediaContext);
  const [isPressed, setIsPressed] = useState<boolean>(false);
  const [currentMedia, setCurrentMedia] = useState<string>('0');

  const getChannelId = (id: string) => {
    setChannelIdState(id);
  };
  const getSelectedMedia = async () => {
    const val = await AsyncStorage.getItem(Strings.CurrentSelectedMediaId);
    if (val !== null) {
      return setCurrentMedia(val);
    }
  };

  const {data: ScheduleData} = useQuery(Queries.SCHEDULE_VIDEO_QUERY, {
    variables: {
      organizationId: currentMedia,
    },
  });

  const {data: VideosByChannelData} = useQuery(
    Queries.SCHEDULE_LIVE_VIDEO_BY_CHANNEL,
    {
      variables: {
        liveVideoId: channelIdState,
        query: '',
        per: 30,
        page: 1,
      },
    },
  );
  useEffect(() => {
    if (ScheduleData) {
      setScheduleList(ScheduleData.liveVideosByOrganization);
    }
    if (VideosByChannelData) {
      console.log(VideosByChannelData.liveVideoByChannel.nodes);
      setVideoByChannelState(VideosByChannelData.liveVideoByChannel.nodes);
    }
  }, [ScheduleData, VideosByChannelData]);

  const getChannelName = () => {
    if (scheduleList.length) {
      const name = scheduleList.filter(
        (singleVal) => singleVal.id === channelIdState,
        console.log('name is ', name),
      );
      return name[0].stations;
    } else return 'No Channel available';
  };

  getSelectedMedia();
  getChannelName();
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
            {getChannelName()}
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

      <ScheduleVideoList scheduleList={VideoByChannelState} />

      <Modal animationType="slide" transparent={true} visible={isPressed}>
        <View style={style.centeredView}>
          <View style={style.modalView}>
            <Text style={style.modalText}>Select a channel</Text>
            {isPressed && data ? (
              <DropDownChannel
                getChannelId={getChannelId}
                scheduleList={scheduleList}
              />
            ) : (
              <NotFound typeName={'Schedule'} />
            )}
            <TouchableOpacity
              style={style.openButton}
              onPress={() => {
                setIsPressed(!isPressed);
              }}>
              <Text style={style.textStyle}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ChannelSchedule;
