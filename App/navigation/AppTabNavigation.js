import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen, VideoScreen, RadioScreen, ScheduleScreen} from '../screens';
import {Colors, Strings, Routes, Icons} from '../constants';
import FontTelloIcon from '../components/FontTelloIcon';

const MyTabNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      headerMode="screen"
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name={Routes.Home}
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <FontTelloIcon
                name={focused ? Icons.HomeRoundDark : Icons.HomeRoundLight}
                color={Colors.black}
                size={Strings.iconMediumSize}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={Routes.Video}
        component={VideoScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <FontTelloIcon
                name={focused ? Icons.VideoCameraDark : Icons.VideoCameraLight}
                color={Colors.black}
                size={Strings.iconMediumSize}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={Routes.Radio}
        component={RadioScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <FontTelloIcon
                name={focused ? Icons.RadioDark : Icons.RadioLight}
                color={Colors.black}
                size={Strings.iconMediumSize}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={Routes.Schedule}
        component={ScheduleScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <FontTelloIcon
                name={focused ? Icons.CalendarDark : Icons.CalendarLight}
                color={Colors.black}
                size={Strings.iconMediumSize}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
export default MyTabNavigator;
