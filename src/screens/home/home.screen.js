/* eslint-disable react/prop-types */
import { SafeArea } from '../../components/utility/safe-area.components';
import React, { useContext, useState } from 'react';
import { InputComponent } from '../../components/form/input.component';
import { Button, TextInput } from 'react-native-paper';

export const HomeScreen = ({ navigation }) => {
  return (
    <SafeArea>
      <InputComponent navigation={navigation}></InputComponent>
    </SafeArea>
  );
};
