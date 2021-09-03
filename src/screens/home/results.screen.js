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

  const { age, sex, area, country } = route.params;
  // const { location, setLocation } = useState();
  const { location, retrieveCountry, countryInfo } = useContext(LocationContext);

  const result = vaccineComputation(age, sex);

  useEffect(() => {
    const result = vaccineComputation(age, sex, area);
    retrieveCountry();
  }, []);

  return (
    <SafeArea>
      <CardContainer>
        <ResultCard>
          <Text>Country: {countryInfo.country} </Text>
          {countryInfo.country == 'USA' && <Text>Location: {area} </Text>}

          <Text>Current number of cases: {countryInfo.active} </Text>
          {countryInfo.country == 'USA' && (
            <Text>Current number in this state: {location.active} </Text>
          )}
        </ResultCard>
        <ResultCard>
          <Text>Age: {age} </Text>
          <Text>Sex: {sex} </Text>
          <Text>Result: {result} </Text>
        </ResultCard>
      </CardContainer>
    </SafeArea>
  );
};
