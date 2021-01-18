import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {LoadingSpinner, NotFound} from '../../components';

import style from './style';

const ScheduleVideoList = ({scheduleList}) => {
  const time = '09:30 PM';

  return (
    <View>
      {scheduleList.length ? (
        <FlatList
          data={scheduleList}
          keyExtractor={(element) => element.id}
          ListEmptyComponent={<LoadingSpinner />}
          renderItem={({item}) => (
            <View style={style.parentStyle}>
              <View style={style.timeStyle}>
                <Text numberOfLines={2}>{time}</Text>
              </View>

              <View style={style.doubleBorderStyle}>
                <View style={style.detailStyle}>
                  <Text style={style.mainHeadingStyle} numberOfLines={1}>
                    {item.stations}
                  </Text>
                  <Text style={style.descriptionStyle} numberOfLines={1}>
                    {item.playerType}
                  </Text>
                </View>
              </View>
            </View>
          )}
        />
      ) : (
        <NotFound typeName={'schedule for this channel'} />
      )}
    </View>
  );
};
export default ScheduleVideoList;
