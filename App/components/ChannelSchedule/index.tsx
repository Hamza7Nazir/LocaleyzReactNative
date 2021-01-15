import React, {useContext, useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import FontTelloIcon from '../FontTelloIcon';
import {Colors} from '../../constants';
import {getTitle} from '../../util';
import style from './style';
import MediaContext from '../../Context/MediaContext';
import RenderList from '../RenderList';
import NotFound from '../NotFound';

const Calendar = () => {
  const {data, selectedOrgId} = useContext(MediaContext);
  const [isPressed, setIsPressed] = useState(false);

  const AddList = () => {
    return (
      <RenderList
        data={data}
        // iconName={'clock'}
        onPress={() => console.log('Channel Schedule to RenderList')}
        imageType={'square'}
        descriptionType={'address'}
        listType={'FindMediaCenters'}
      />
    );
  };

  return (
    <TouchableOpacity
      onPress={() => (!isPressed ? setIsPressed(true) : setIsPressed(false))}>
      <View style={style.parentStyle}>
        <View style={style.clockIconStyle}>
          <FontTelloIcon name={'clock'} color={Colors.lightBlue} size={20} />
        </View>
        <Text style={style.titleStyle} numberOfLines={1}>
          {getTitle(data, selectedOrgId.toString())}
        </Text>

        <View style={style.arrowIconStyle}>
          <FontTelloIcon
            name={!isPressed ? 'down-open' : 'up-open'}
            color={Colors.lightBlue}
            size={20}
          />
        </View>
      </View>
      {isPressed && data ? AddList() : <NotFound typeName={'Schedule'} />}
    </TouchableOpacity>
  );
};

export default Calendar;
