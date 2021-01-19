import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {LoadingSpinner, NotFound} from '../../components';

import style from './style';

const ScheduleVideoList = ({scheduleList}) => {
  const showVideoList = (item) => {
    return (
      <View style={style.parentStyle}>
        <View style={style.timeStyle}>
          <Text numberOfLines={2}>{item.endDatetime}</Text>
        </View>

        <View style={style.doubleBorderStyle}>
          <View style={style.detailStyle}>
            <Text style={style.mainHeadingStyle} numberOfLines={1}>
              {item.program}
            </Text>
            <Text style={style.descriptionStyle} numberOfLines={1}>
              {item.title}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View>
      {scheduleList.length ? (
        <FlatList
          data={scheduleList}
          keyExtractor={(element) => element.id}
          ListEmptyComponent={<LoadingSpinner />}
          renderItem={({item}) => showVideoList(item)}
        />
      ) : (
        <NotFound typeName={'schedule for this channel'} />
      )}
    </View>
  );
};
export default ScheduleVideoList;
