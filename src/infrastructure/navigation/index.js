import React, { useContext } from 'react';
import { AccountNavigator } from './app.navigator';
import { NavigationContainer } from '@react-navigation/native';

export const Navigation = () => {
  return (
    <NavigationContainer>
      <AccountNavigator />
    </NavigationContainer>
  );
};
