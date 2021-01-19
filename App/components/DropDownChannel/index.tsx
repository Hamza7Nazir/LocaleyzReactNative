import React from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import {NotFound} from '../../components';
import style from './style';
import {ScheduleObj} from '../../@types';
const DropDownChannel = ({getChannelId, scheduleList}) => {
  const showList = (item: ScheduleObj) => {
    return (
      <TouchableOpacity
        onPress={() => {
          getChannelId(item.id);
        }}>
        <View style={style.popUpList}>
          <Text style={style.popUpStyle} numberOfLines={1}>
            {item.stations}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={scheduleList}
      keyExtractor={(element) => element.id}
      ListEmptyComponent={<NotFound typeName="Channels" />}
      renderItem={({item}) => showList(item)}
    />
  );
};
export default DropDownChannel;
