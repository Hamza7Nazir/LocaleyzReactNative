import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CenterComponent from "../components/CenterComponent";


const HomeScreen = () => {
  return (
    <View>
      <Text style={style.headingStyle}>Your recent picks</Text>
      <CenterComponent/>
    
    </View>
  );
};
const style = StyleSheet.create({
  headingStyle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginHorizontal: 15,
    marginTop: 20,
  }
  
});

export default HomeScreen;
