import React from 'react';
import {View, TextInput} from 'react-native';
import style from './style';
import FontTelloIcon from '../../components/FontTelloIcon';

const SearchBar = () => {
  return (
    <View style={style.ViewStyle}>
      <FontTelloIcon
        style={style.iconSearchStyle}
        name="search"
        color={'#34b7eb'}
        size={20}
      />
      <TextInput
        style={style.inputStyle}
        placeholder="Search by name, city or state"
      />
    </View>
  );
};
export default SearchBar;
