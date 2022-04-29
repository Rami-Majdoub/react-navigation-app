import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/home'
import Auth from '../screens/auth'
import Calculator from '../screens/calculator'

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Calculator"
          component={Calculator}
        />

				<Stack.Screen
					name="Auth"
					component={Auth}
				/>

        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Welcome' }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;