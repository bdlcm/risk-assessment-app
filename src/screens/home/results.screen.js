import { SafeArea } from '../../components/utility/safe-area.components';
import React, { useContext, useState, useEffect } from 'react';
import { InputComponent } from '../../components/form/input.component';
import { Button, TextInput, Card } from 'react-native-paper';
import { View, Text } from 'react-native';
import { vaccineComputation } from '../../services/vaccine.service';
import { getInfo } from '../../services/requests.service';

import { CardContainer, ImageCard, ResultCard } from '../../components/style/result-card.component';




export const ResultsScreen = ({ route }) => {
  // eslint-disable-next-line react/prop-types
  const { age, sex, location } = route.params;
  const result = vaccineComputation(age, sex);

  useEffect(() => {
    const result = vaccineComputation(age, sex, location);
    getInfo();
    console.log('text', age, sex, result);
  }, [age, sex]);

  return (
    <SafeArea>
      <CardContainer>
        <ResultCard>
          <Text>Age: {age} </Text>
          <Text>Sex: {sex} </Text>
          <Text>Location: {location} </Text>
          <Text>Result: {result} </Text>
        </ResultCard>
      </CardContainer>
    </SafeArea>
  );
};
