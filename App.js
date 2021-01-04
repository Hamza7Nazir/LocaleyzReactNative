import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './App/screens/HomeScreen';
import Header from './App/components/Header';
import VideoScreen from './App/screens/VideoScreen';
import ScheduleScreen from './App/screens/ScheduleScreen';
import RadioScreen from './App/screens/RadioScreen';
import FontTelloIcon from './App/components/FontTelloIcon';
import {ApolloClient, InMemoryCache} from '@apollo/client';
import {ApolloProvider} from '@apollo/react-hooks';

const client = new ApolloClient({
  uri: 'https://localeyz-app-staging-api.herokuapp.com/graphql',

  cache: new InMemoryCache(),
});

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
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Video" component={VideoScreen} />
      <Tab.Screen name="Radio" component={RadioScreen} />
      <Tab.Screen name="Schedule" component={ScheduleScreen} />
    </Tab.Navigator>
  );
};
const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={MyTab}
        options={{
          headerTitle: (props) => <Header title="Localeyz" {...props} />,
          headerStyle: {
            backgroundColor: '#ffff',
          },
          headerTintColor: 'black',
        }}
      />
      {/* <Stack.Screen
        name="Video"
        component={VideoScreen}
        options={{
          headerTitle: (props) => <Header title="Video" {...props} />,
          headerStyle: {
            backgroundColor: '#ffff',
          },
          headerTintColor: 'black',
        }}
      /> */}
    </Stack.Navigator>
  );
};
export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        {/* <MyTab /> */}
        <MyStack />
      </NavigationContainer>
    </ApolloProvider>
  );
}
