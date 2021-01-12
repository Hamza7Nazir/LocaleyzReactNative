import React from 'react';
import {View, TextInput} from 'react-native';
import style from './style';
import FontTelloIcon from '../../components/FontTelloIcon';

const SearchBar = ({text, setText}) => {
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
        onChangeText={(val) => {
          setText(val);
        }}
        value={text}
      />
    </View>
  );
};
export default SearchBar;
