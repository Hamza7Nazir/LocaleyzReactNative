import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {
  HomeScreen,
  VideoScreen,
  RadioScreen,
  ScheduleScreen,
  SearchCenterScreen,
} from '../screens';
import {OrgHeader} from '../components';
import {Header} from '../components';
import FontTelloIcon from '../components/FontTelloIcon';
import {ApolloProvider} from '@apollo/react-hooks';
import client from '../api/Client';
import {Colors, Routes, Icons} from '../constants';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MyTab = () => {
  return (
    <Tab.Navigator
      headerMode="screen"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          //TODO: remove from here
          if (route.name === Routes.Home) {
            iconName = focused ? Icons.HomeDark : Icons.HomeLight;
          } else if (route.name === Routes.Video) {
            iconName = focused ? Icons.VideoCameraDark : Icons.VideoCameraLight;
          } else if (route.name === Routes.Radio) {
            iconName = focused ? Icons.TowerSignal : Icons.TowerSignal;
          } else if (route.name === Routes.Schedule) {
            iconName = focused ? Icons.CalendarLight : Icons.CalendarLight;
          }

          return (
            <FontTelloIcon name={iconName} color={Colors.black} size={15} />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name={Routes.Home} component={HomeScreen} />
      <Tab.Screen name={Routes.Video} component={VideoScreen} />
      <Tab.Screen name={Routes.Radio} component={RadioScreen} />
      <Tab.Screen name={Routes.Schedule} component={ScheduleScreen} />
    </Tab.Navigator>
  );
};
const MyStack = () => {
  return (
    <Stack.Navigator headerMode="screen">
      <Stack.Screen
        name="Tab"
        component={MyTab}
        options={{
          headerTitle: (props) => <OrgHeader title="Localeyz" {...props} />,
          headerStyle: {
            backgroundColor: Colors.white,
          },
          headerTintColor: Colors.black,
          cardStyle: {backgroundColor: Colors.white},
        }}
      />
      <Stack.Screen
        name="SearchCenter"
        component={SearchCenterScreen}
        options={{
          headerTitle: (props) => <Header title="Localeyz" {...props} />,
          headerStyle: {
            backgroundColor: Colors.white,
          },
          headerTintColor: Colors.black,
          cardStyle: {backgroundColor: Colors.white},
        }}
      />
    </Stack.Navigator>
  );
};

export default function Nav() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </ApolloProvider>
  );
}
