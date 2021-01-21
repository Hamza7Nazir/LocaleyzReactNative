import React, {useContext, useEffect, useState} from 'react';
import {Text, View, TouchableOpacity, Modal} from 'react-native';
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
import {ScheduleObj, CurrentlyPlaying} from '../../@types';

const ChannelSchedule = () => {
  const {data} = useContext(MediaContext);
  const [scheduleList, setScheduleList] = useState<ScheduleObj[]>([]);
  const [VideoByChannelState, setVideoByChannelState] = useState<
    CurrentlyPlaying[]
  >([]);
  const [isPressed, setIsPressed] = useState<boolean>(false);
  const [channelIdState, setChannelIdState] = useState<string>('');
  const [currentMedia, setCurrentMedia] = useState<string>('');
  const [currentlyPlaying, setCurrentlyPlaying] = useState<CurrentlyPlaying>();
  const getSelectedMedia = async () => {
    const val = await AsyncStorage.getItem(Strings.CurrentSelectedMediaId);
    if (val) {
      return setCurrentMedia(val);
    }
  };
  getSelectedMedia();
  const getChannelName = () => {
    if (scheduleList) {
      const name = scheduleList.find(
        (singleVal: ScheduleObj) => singleVal.id === channelIdState,
      );
      return name?.stations;
    } else {
      return 'No Channel available';
    }
  };

  const getChannelId = (id: string) => {
    setChannelIdState(id);
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

  const {data: CurrentlyPlayingVideo} = useQuery(
    Queries.NOW_PLAYING_SCHEDULE_VIDEO,
    {
      variables: {
        liveVideoId: channelIdState,
      },
    },
  );

  useEffect(() => {
    if (ScheduleData) {
      setScheduleList(ScheduleData.liveVideosByOrganization);
    }
    if (VideosByChannelData) {
      setVideoByChannelState(VideosByChannelData.liveVideoByChannel.nodes);
    }
    if (CurrentlyPlayingVideo) {
      setCurrentlyPlaying(CurrentlyPlayingVideo.nowPlayingByChannel);
    }
  }, [ScheduleData, CurrentlyPlayingVideo, VideosByChannelData]);

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

      <ScheduleVideoList
        currentlyPlaying={currentlyPlaying}
        scheduleList={VideoByChannelState}
      />

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
