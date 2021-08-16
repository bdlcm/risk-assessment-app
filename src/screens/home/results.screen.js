import { SafeArea } from '../../components/utility/safe-area.components';
import React, { useContext, useState, useEffect } from 'react';
import { InputComponent } from '../../components/form/input.component';
import { Button, TextInput } from 'react-native-paper';
import { View, Text } from 'react-native';

export const ResultsScreen = ({ route }) => {
  // eslint-disable-next-line react/prop-types
  const { age, sex } = route.params;

  useEffect(() => {
    console.log('text', age, sex);
  }, []);
  return (
    <SafeArea>
      <View>
        <Text>Something</Text>
      </View>
    </SafeArea>
  );
};
