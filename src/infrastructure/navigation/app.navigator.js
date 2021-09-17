import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../../screens/home/home.screen';
import { ResultsScreen } from '../../screens/home/results.screen';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export const Navigator = () => (
  <NavigationContainer>
    <Stack.Navigator >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Results" component={ResultsScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
