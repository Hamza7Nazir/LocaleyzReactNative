import React, {useContext, useEffect} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import style from './style';
import {getImage} from '../../util';
import MediaContext from '../../Context/MediaContext';
import {SetStorage} from '../../util';
import {Strings} from '../../constants';
const CenterComponent = ({onPress1, OrgIds, selectedId, onPress2}) => {
  const {data} = useContext(MediaContext);

  useEffect(() => {
    selectedId && SetStorage(Strings.SelectedOrganization, selectedId);
  }, [selectedId]);

  const RenderLatestVisits = (id, list) => {
    const imageUrl = getImage(list, id);

    return (
      <TouchableOpacity onPress={() => onPress2(id)}>
        <View style={style.viewImageStyle}>
          <Image
            style={
              id === selectedId
                ? style.selectedImageStyle
                : style.unselectedImageStyle
            }
            source={{uri: imageUrl}}
          />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={style.parentStyle}>
      {data && (
        <FlatList
          data={OrgIds}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(pod) => pod.id}
          renderItem={({item}) => RenderLatestVisits(item, data)}
        />
      )}

      <TouchableOpacity onPress={() => onPress1()}>
        <View style={style.touchableParentStyle}>
          <Text style={style.textStyle}>Find a Center </Text>
          <Ionicons name={'location-outline'} style={style.iconStyle} light />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CenterComponent;
