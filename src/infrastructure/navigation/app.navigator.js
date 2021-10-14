import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../../screens/home/home.screen';
import { ResultsScreen } from '../../screens/home/results.screen';
import { SourcesScreen } from '../../screens/home/sources.screen';

import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export const Navigator = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={HomeScreen} />
      <Stack.Screen name="Results" component={ResultsScreen} />
      <Stack.Screen name="Sources" component={SourcesScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
