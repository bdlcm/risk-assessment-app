/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { SafeArea } from '../../components/utility/safe-area.components';
import React, { useContext, useState, useEffect } from 'react';
import { Text } from 'react-native';

import { vaccineComputation } from '../../services/vaccine.service';
import { LocationContext } from '../../context/results.context';

import { getInfo } from '../../services/requests.service';

import { CardContainer, ResultCard } from '../../components/style/result-card.component';

export const ResultsScreen = ({ route }) => {
  // eslint-disable-next-line react/prop-types

  const { age, sex, area } = route.params;
  // const { location, setLocation } = useState();
  const { location } = useContext(LocationContext);

  const result = vaccineComputation(age, sex);

  useEffect(() => {
    const result = vaccineComputation(age, sex, area);
  }, [location]);

  return (
    <SafeArea>
      <CardContainer>
        <ResultCard>
          <Text>Age: {age} </Text>
          <Text>Sex: {sex} </Text>
          <Text>Location: {area} </Text>
          <Text>Result: {result} </Text>
        </ResultCard>
      </CardContainer>
    </SafeArea>
  );
};
