import React from 'react';
import {Text, View, FlatList} from 'react-native';
import {NotFound} from '../../components';
import style from './style';
const DropDownChannel = ({scheduleList}) => {
  return (
    <FlatList
      data={scheduleList}
      keyExtractor={(element) => element.id}
      ListEmptyComponent={<NotFound typeName="Channels" />}
      renderItem={({item}) => (
        <View style={style.popUpList}>
          <Text style={style.popUpStyle} numberOfLines={1}>
            {item.stations}
          </Text>
        </View>
      )}
    />
  );
};
export default DropDownChannel;
