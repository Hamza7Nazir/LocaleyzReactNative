import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CenterComponent from "../components/CenterComponent";
import LatestEpisodeComponent from '../components/LatestEpisodeComponent'


const HomeScreen = () => {
  return (
    <View>
      <Text style={style.headingStyle}>Your recent picks</Text>
      <CenterComponent/>
      <LatestEpisodeComponent/>
    
    </View>
  );
};
const style = StyleSheet.create({
  headingStyle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginHorizontal: 15,
    marginVertical: 15,
  }
 
});

export default HomeScreen;
