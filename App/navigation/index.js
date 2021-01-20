import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ApolloProvider} from '@apollo/react-hooks';
import client from '../api/Client';
import MyStackNavigator from './AppStackNavigation';

export default function AppNavigation() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <MyStackNavigator />
      </NavigationContainer>
    </ApolloProvider>
  );
}
