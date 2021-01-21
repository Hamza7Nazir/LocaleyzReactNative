import React from 'react';
import {Colors} from '../constants';
import {SearchCenterScreen} from '../screens';
import {Header} from '../components';
import {createStackNavigator} from '@react-navigation/stack';
import MyTabNavigator from './AppTabNavigation';

const MyStackNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Tab" component={MyTabNavigator} />
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
export default MyStackNavigator;
