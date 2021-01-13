import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {Routes} from '../constants';
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
import client from './apolloClient';
import {Colors} from '../constants';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const MyTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Video') {
            iconName = focused ? 'videocam-1' : 'videocam-1';
          } else if (route.name === 'Radio') {
            iconName = focused ? 'signal' : 'signal';
          } else if (route.name === 'Schedule') {
            iconName = focused ? 'calendar-empty' : 'calendar-empty';
          }

          // You can return any component that you like here!
          return <FontTelloIcon name={iconName} color={'#000'} size={15} />;
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
    <Stack.Navigator>
      <Stack.Screen
        name="Tab"
        component={MyTab}
        options={{
          headerTitle: (props) => <Header title="Localeyz" {...props} />,
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
