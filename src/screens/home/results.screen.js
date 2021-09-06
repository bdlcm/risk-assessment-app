/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { SafeArea } from '../../components/utility/safe-area.components';
import React, { useContext, useState, useEffect } from 'react';

import { Text, FlatList, ScrollView } from 'react-native';
import { CircleComponent } from '../../components/style/circle-animation.component';
import { vaccineComputation } from '../../services/vaccine.service';
import { LocationContext } from '../../context/results.context';
import { MiniCardBody, Number, Label } from '../../components/style/mini-card.component';
import {
  CardContainer,
  ResultCard,
  CardBackground,
  ResultCardBackground,
  ResultText,
} from '../../components/style/result-card.component';
import { MiniCardContainer, MiniResultCard } from '../../components/style/mini-card.component';
export const ResultsScreen = ({ route }) => {
  // eslint-disable-next-line react/prop-types

  const { age, sex, area, country } = route.params;
  // const { location, setLocation } = useState();
  const { location, retrieveCountry, countryInfo } = useContext(LocationContext);
  const results = vaccineComputation(age, sex, area);

  useEffect(() => {
    console.log('results', results);
    retrieveCountry();
  }, []);

  return (
    <SafeArea>
      <CardContainer>
        <ScrollView>
          <CardBackground>
            <ResultCardBackground>
              <ResultText>
                {sex}, {age}{' '}
              </ResultText>

              {countryInfo.country != 'USA' && <ResultText> {countryInfo.country} </ResultText>}
              {countryInfo.country == 'USA' && (
                <ResultText>
                  {' '}
                  {area}, {countryInfo.country}{' '}
                </ResultText>
              )}
            </ResultCardBackground>
          </CardBackground>

          <MiniCardContainer>
            {countryInfo.country == 'USA' && (
              <MiniResultCard>
                <Number>{location.active} </Number>
                <Label>Total Cases in {area} </Label>
              </MiniResultCard>
            )}

            <MiniResultCard>
              <Number>{countryInfo.active} </Number>
              <Label>Total Active Cases </Label>
            </MiniResultCard>

            <MiniResultCard>
              <Number>{countryInfo.cases} </Number>
              <Label>Total Recorded Cases </Label>
            </MiniResultCard>
          </MiniCardContainer>
          {results.map((item) => (
            <MiniCardContainer key={item.id}>
              <MiniResultCard>
                <Number>{item.vaccine} </Number>
                <Label>Vaccine </Label>
                <CircleComponent arc={item.risk}></CircleComponent>
              </MiniResultCard>
            </MiniCardContainer>
          ))}
        </ScrollView>
      </CardContainer>
    </SafeArea>
  );
};
