import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './App/screens/HomeScreen';
import Header from "./App/components/HeaderComponent";

const Stack = createStackNavigator();

const  MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen}  
      options = {
        // eslint-disable-next-line react/display-name
        { headerTitle: props => <Header {...props}/>,
        headerStyle: {
          backgroundColor: '#ffff',
        },
        headerTintColor: 'black',
        
        }
        }


  />
    </Stack.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
