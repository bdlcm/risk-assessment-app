/* eslint-disable react/prop-types */
import { SafeArea } from '../../components/utility/safe-area.components';
import React from 'react';
import { InputComponent } from '../../components/form/input.component';

export const HomeScreen = ({ navigation }) => {
  return (
    <SafeArea>
      <InputComponent navigation={navigation}></InputComponent>
    </SafeArea>
  );
};
