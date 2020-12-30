import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

const CenterComponent = () => {
  return (
    <View style={style.parentStyle}>
      <TouchableOpacity>
        <Image
          style={style.imageStyle}
          source={require('../../assets/images/af.jpg')}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={style.touchableParentStyle}>
          <Text style={style.textStyle}>Find a Center </Text>
          <Ionicons name={'location-outline'} style={style.iconStyle} light />
        </View>
      </TouchableOpacity>
    </View>
  );
};
const style = StyleSheet.create({
  parentStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15, // will be kept same for all components
    marginBottom: 15,
  },
  imageStyle: {
    borderColor: '#34b7eb',
    borderRadius: 45,
    borderWidth: 2,
    height: 50,
    width: 50,
  },
  iconStyle: {
    color: '#34b7eb',
    fontSize: 20,
  },
  touchableParentStyle: {
    alignItems: 'center',
    borderColor: '#34b7eb',
    borderRadius: 30,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 10,
    paddingHorizontal: 20,
  },
  textStyle: {
    color: '#34b7eb',
    fontSize: 20,
    fontFamily: 'Iowan Old Style',
  },
});
export default CenterComponent;
