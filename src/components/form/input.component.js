/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { SafeArea } from '../utility/safe-area.components';
import { FormContainer, FormButton, FormInput } from '../../components/style/styled-form.component';
import { SafeAreaView, StyleSheet, TextInput } from 'react-native';

export const InputComponent = ({ navigation }) => {
  const [sex, onChangeSex] = React.useState('');
  const [age, onChangeAge] = React.useState('');

  return (
    <SafeArea>
      <FormContainer>
        <FormInput label="Sex" onChangeText={onChangeSex} value={sex} />
        <FormInput onChangeText={onChangeAge} value={age} label="Age" keyboardType="numeric" />
        <FormButton
          onPress={() => navigation.navigate('Results', { age: age, sex: sex })}></FormButton>
      </FormContainer>
    </SafeArea>
  );
};
