import { SafeArea } from '../../components/utility/safe-area.components';
import React, { useContext, useState, useEffect } from 'react';
import { InputComponent } from '../../components/form/input.component';
import { Button, TextInput } from 'react-native-paper';
import { View, Text } from 'react-native';
import { vaccineComputation } from '../../services/vaccine.service';
import { CardContainer, ResultCard } from '../../components/style/result-card.component';
export const ResultsScreen = ({ route }) => {
  // eslint-disable-next-line react/prop-types
  const { age, sex } = route.params;
  const result = vaccineComputation(age, sex);

  useEffect(() => {
    const result = vaccineComputation(age, sex);
    console.log('text', age, sex, result);
  }, [age, sex]);

  return (
    <SafeArea>
      <CardContainer>
        <ResultCard>
        <Text>Age: {age} </Text>
        <Text>Sex: {sex} </Text>
        <Text>Result: {result} </Text>
        </ResultCard>
        
      </CardContainer>
    </SafeArea>
  );
};
