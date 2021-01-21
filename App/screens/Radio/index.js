import React from 'react';
import {ScrollView, View, Text, Linking} from 'react-native';
import {OrgHeader} from '../../components';
import style from './style';
const RadioScreen = () => {
  return (
    <>
      <OrgHeader />
      <ScrollView style={style.pageStyle}>
        <Text>RadioScreen</Text>
        <View style={style.infoStyle}>
          <Text
            style={style.textStyle}
            onPress={() => Linking.openURL('http://www.freepik.com')}>
            Icons made by Freepik
          </Text>
          <Text
            style={style.textStyle}
            onPress={() => Linking.openURL('https://www.flaticon.com')}>
            Flaticon Icons made by sripfrom
          </Text>
        </View>
      </ScrollView>
    </>
  );
};

export default RadioScreen;
