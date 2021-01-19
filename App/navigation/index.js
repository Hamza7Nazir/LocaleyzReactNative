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
import {Header} from '../components';
import FontTelloIcon from '../components/FontTelloIcon';
import {ApolloProvider} from '@apollo/react-hooks';
import client from '../api/Client';
import {Colors, Routes, Icons} from '../constants';

const MyTab = () => {
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
                name={focused ? Icons.HomeDark : Icons.HomeLight}
                color={Colors.black}
                size={15}
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
                size={15}
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
                name={focused ? Icons.TowerSignal : Icons.TowerSignal}
                color={Colors.black}
                size={15}
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
                name={focused ? Icons.CalendarLight : Icons.CalendarLight}
                color={Colors.black}
                size={15}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
const MyStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Tab" component={MyTab} />
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

export default function AppNavigation() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </ApolloProvider>
  );
}
