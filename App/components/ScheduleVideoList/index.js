import React, {useContext} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {NotFound, FontTelloIcon} from '../../components';
import MediaContext from '../../Context/MediaContext';

import style from './style';
import {Colors, Icons} from '../../constants';
const ScheduleVideoList = ({scheduleList, currentlyPlaying}) => {
  const {selectedDate} = useContext(MediaContext);

  const filterSchedule = () => {
    const scheduleWithDate = scheduleList?.filter(
      (element) =>
        new Date(element.endDatetime).toDateString() === selectedDate,
    );
    return scheduleWithDate;
  };

  const showVideoList = (item) => {
    const timeFormatter = (date) => {
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      var strTime = hours + ':' + minutes + ' ' + ampm;
      return strTime;
    };

    return (
      <TouchableOpacity>
        <View style={style.parentStyle}>
          {currentlyPlaying?.id === item.id ? (
            <View style={style.iconStyle}>
              <FontTelloIcon
                name={Icons.ArrowRightDirectionDark}
                color={Colors.black}
                size={20}
              />
            </View>
          ) : null}

          <View
            style={
              currentlyPlaying?.id === item.id
                ? [style.timeStyle, style.PlayingtimeStyle]
                : style.timeStyle
            }>
            <Text numberOfLines={3}>
              {timeFormatter(new Date(item.endDatetime))}
            </Text>
          </View>

          <View style={style.doubleBorderStyle}>
            <View
              style={
                currentlyPlaying?.id === item.id
                  ? [style.detailStyle, style.playingdetailStyle]
                  : style.detailStyle
              }>
              <Text style={style.mainHeadingStyle} numberOfLines={1}>
                {item.program}
              </Text>
              <Text style={style.descriptionStyle} numberOfLines={1}>
                {item.title}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return filterSchedule().length ? (
    <FlatList
      data={filterSchedule()}
      keyExtractor={(element) => element.id.toString()}
      renderItem={({item}) => showVideoList(item)}
    />
  ) : (
    <NotFound typeName={'schedule for this channel'} />
  );
};
export default ScheduleVideoList;
