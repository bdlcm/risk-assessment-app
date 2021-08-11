/* eslint-disable react/prop-types */
import * as React from 'react';
import { TextInput, Button } from 'react-native-paper';
import { SafeArea } from '../utility/safe-area.components';
import { FormContainer, FormButton, FormInput } from '../../components/style/styled-form.component';
import { TouchableOpacity } from 'react-native';

export const InputComponent = ({ navigation }) => {
  return (
    <>
      <SafeArea>
        <FormContainer>
          <FormInput mode="outlined" label="Age"></FormInput>

          <FormInput mode="outlined" label="Sex"></FormInput>
          <FormButton mode="contained" onPress={() => navigation.navigate('Results')}>
            {' '}
            Search
          </FormButton>
        </FormContainer>
      </SafeArea>
    </>
  );
};
